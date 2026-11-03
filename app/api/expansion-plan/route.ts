import { NextRequest, NextResponse } from 'next/server'
import { LEADS_FROM, LEADS_TO, EMAIL_RE, getResend, renderFields } from '@/lib/email'
import { POSITIONS, GROUPS, EMPLOYER_COST_PCT } from '@/lib/positions'

export const runtime = 'nodejs'
// Plan generation usually takes 20–30s; give the function room so it never times out mid-plan.
export const maxDuration = 60

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body || typeof body.name !== 'string' || !body.name.trim() || typeof body.email !== 'string' || !EMAIL_RE.test(body.email.trim())) {
    return NextResponse.json({ error: 'Please include your name and a valid email.' }, { status: 400 })
  }

  const setupCost = 2450
  const headcount = body.headcount || 1
  let managementFee = 18000
  if (headcount > 20) managementFee = 42000
  else if (headcount > 10) managementFee = 30000
  else if (headcount > 5) managementFee = 24000

  // Use actual seniority-based salary estimate if provided, else fallback
  const totalSalaries = body.estimatedSalaries || headcount * 55000
  const recruitingFee = Math.round((totalSalaries / headcount / 12) * headcount)
  const totalYear1 = setupCost + managementFee + recruitingFee + totalSalaries

  // Build position breakdown string for the prompt
  const s = body.seniority || {}
  const seniorityLines = POSITIONS
    .filter((p) => (Number(s[p.key]) || 0) > 0)
    .map((p) =>
      `  - ${p.label} (${p.years}): ${s[p.key]} person(s) × $${p.avg.toLocaleString()}/yr avg (all-in, incl. ~${EMPLOYER_COST_PCT}% CR employer costs)`
    )
    .join('\n')

  // Reference ranges (all-in, USD/yr) grouped by discipline
  const referenceRanges = GROUPS.map((g) =>
    `    ${g}:\n` + POSITIONS.filter((p) => p.group === g).map((p) => `    - ${p.label} (${p.years}): ${p.annualRange}/yr`).join('\n')
  ).join('\n')

  const userMessage = `
    Company: ${body.company}
    Industry: ${body.industry}
    Current US team size: ${body.usTeamSize}
    Profiles needed in Costa Rica: ${body.profiles?.join(', ')}
    Total headcount: ${headcount}
    Seniority breakdown:
${seniorityLines}
    Services needed: ${body.services?.join(', ')}
    Timeline: ${body.timeline}
    Contact name: ${body.name}
    Additional notes: ${body.message || 'None'}

    Cost data to include in the plan:
    - One-time setup cost: $${setupCost.toLocaleString()}
    - Annual management fee: $${managementFee.toLocaleString()}/year
    - Recruiting fee: one month avg salary per hire
    - Estimated total compensation Year 1 (all-in, incl. ~${EMPLOYER_COST_PCT}% CR employer costs): $${totalSalaries.toLocaleString()}
    - Total Year 1 investment: $${totalYear1.toLocaleString()}

    Costa Rica salary ranges reference (USD/year, all-in incl. ~${EMPLOYER_COST_PCT}% employer costs: CCSS, aguinaldo, INS):
${referenceRanges}

    Most common perks offered in Costa Rica:
    Private medical insurance, wellness programs, performance bonuses, food vouchers,
    professional development & training, flexible/hybrid work, additional PTO,
    company events, new computer, extended year-end break (Dec 24 - Jan 1)
  `

  const systemPrompt = `You are an expansion plan advisor for Crest Partners — Costa Rica's most proven nearshore tech operation partner, with 20 years of experience (since 2006). Generate a personalized, professional expansion plan in English.

Structure your response with these exact sections using markdown:

## Executive Summary
2-3 sentences addressing their specific company and goals.

## Recommended Team Structure
Based on their selected profiles and headcount. Include estimated salaries using the provided ranges. Show a clear cost breakdown per role.

## Estimated Investment — Year 1
Show a clear cost table:
- One-time setup cost
- Annual management fee
- Recruiting fees (calculate based on headcount and estimated salaries)
- Estimated total compensation (all-in, incl. ~${EMPLOYER_COST_PCT}% CR employer costs)
- **Total Year 1 investment**

## Recommended Perks Package
Based on their industry, suggest the most relevant perks from the list provided.

## Timeline
What happens Day 1, Week 1, Month 1, Month 3.

## Why Costa Rica for ${body.industry || 'your industry'}
Specific reasons why Costa Rica makes sense for their industry and company size.

## Next Steps with Crest Partners
3 clear action items.

Keep the tone confident, specific and consultative. Reference Crest Partners' track record: less than 1% turnover, 20 years in Costa Rica, $1B+ client revenue, 97.6 GPTW Trust Index. Max 600 words.`

  let response: Response
  try {
    response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
    })
  } catch (err) {
    console.error('[expansion-plan] AI request failed:', err)
    return NextResponse.json({ error: 'Plan generation failed' }, { status: 502 })
  }

  if (!response.ok) {
    console.error('[expansion-plan] AI error:', response.status, await response.text())
    return NextResponse.json({ error: 'Plan generation failed' }, { status: 502 })
  }

  const data = await response.json()
  const text = data.content?.[0]?.text
  if (!text) {
    return NextResponse.json({ error: 'Unexpected response format' }, { status: 500 })
  }

  // Notify the team about the new lead. Never block or break plan generation.
  await notifyLead(body, text, { setupCost, managementFee, recruitingFee, totalSalaries, totalYear1, headcount }, seniorityLines)

  return NextResponse.json({
    plan: text,
    costs: { setup: setupCost, managementFee, recruitingFee, totalSalaries, totalYear1, headcount },
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function notifyLead(body: any, plan: string, costs: Record<string, number>, seniorityLines: string) {
  try {
    const resend = getResend()
    if (!resend) return
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const company = body.company || body.contactCompany || 'Unknown company'
    const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
    const { html, text } = renderFields([
      ['Name', body.name],
      ['Email', email],
      ['Company', company],
      ['Industry', body.industry],
      ['Current U.S. team size', body.usTeamSize],
      ['Profiles', Array.isArray(body.profiles) ? body.profiles.join(', ') : ''],
      ['Total headcount', costs.headcount],
      ['Seniority breakdown', seniorityLines.replace(/^\s+-\s*/gm, '• ')],
      ['Services', Array.isArray(body.services) ? body.services.join(', ') : ''],
      ['Timeline', body.timeline],
      ['Notes', body.message],
      ['Est. total Year 1', money(costs.totalYear1)],
    ])
    const planText = String(plan)
    const { error } = await resend.emails.send({
      from: LEADS_FROM,
      to: LEADS_TO,
      ...(EMAIL_RE.test(email) ? { replyTo: email } : {}),
      subject: `New expansion plan: ${company} — ${costs.headcount} hire(s)`,
      html: `<h2 style="font-family:Arial,sans-serif">New expansion plan lead</h2>${html}<h3 style="font-family:Arial,sans-serif">Generated plan</h3><pre style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:13px">${planText.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</pre>`,
      text: `${text}\n\n--- Generated plan ---\n${planText}`,
    })
    if (error) console.error('[expansion-plan] Resend error:', error)
  } catch (err) {
    console.error('[expansion-plan] Failed to send lead email:', err)
  }
}
