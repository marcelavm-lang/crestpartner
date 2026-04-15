import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const setupCost = 2450
  const headcount = body.headcount || 1
  let managementFee = 18000
  if (headcount > 20) managementFee = 42000
  else if (headcount > 10) managementFee = 30000
  else if (headcount > 5) managementFee = 24000

  const avgSalary = 55000
  const totalSalaries = headcount * avgSalary
  const recruitingFee = Math.round((avgSalary / 12) * headcount)
  const totalYear1 = setupCost + managementFee + recruitingFee + totalSalaries

  const userMessage = `
    Company: ${body.company}
    Industry: ${body.industry}
    Current US team size: ${body.usTeamSize}
    Profiles needed in Costa Rica: ${body.profiles?.join(', ')}
    Number of people: ${headcount}
    Services needed: ${body.services?.join(', ')}
    Timeline: ${body.timeline}
    Contact name: ${body.name}
    Additional notes: ${body.message || 'None'}

    Cost data to include in the plan:
    - One-time setup cost: $${setupCost.toLocaleString()}
    - Annual management fee: $${managementFee.toLocaleString()}/year
    - Recruiting fee: one month salary per hire (50% at hiring, 50% after 3 months)
    - Salary ranges: Junior $24,300/yr, Mid $40,000/yr, Senior $113,400/yr, Engineering Manager $162,000/yr

    Most common perks offered in Costa Rica:
    Private medical insurance, wellness programs, performance bonuses, food vouchers,
    professional development & training, flexible/hybrid work, additional PTO,
    company events, new computer, extended year-end break (Dec 24 - Jan 1)
  `

  const systemPrompt = `You are an expansion plan advisor for Crest Partners — Costa Rica's most proven nearshore tech operation partner, with 25+ years of experience. Generate a personalized, professional expansion plan in English.

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
- Estimated total salaries
- **Total Year 1 investment**

## Recommended Perks Package
Based on their industry, suggest the most relevant perks from the list provided.

## Timeline
What happens Day 1, Week 1, Month 1, Month 3.

## Why Costa Rica for ${body.industry || 'your industry'}
Specific reasons why Costa Rica makes sense for their industry and company size.

## Next Steps with Crest Partners
3 clear action items.

Keep the tone confident, specific and consultative. Reference Crest Partners' track record: less than 1% turnover, 25+ years, $1B+ client revenue, 97.6 GPTW Trust Index. Max 600 words.`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 1500,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    return NextResponse.json({ error: err }, { status: response.status })
  }

  const data = await response.json()
  const text = data.content?.[0]?.text
  if (!text) {
    return NextResponse.json({ error: 'Unexpected response format' }, { status: 500 })
  }

  return NextResponse.json({
    plan: text,
    costs: { setup: setupCost, managementFee, recruitingFee, totalSalaries, totalYear1, headcount },
  })
}
