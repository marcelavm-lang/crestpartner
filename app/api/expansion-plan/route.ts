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

  // Use actual seniority-based salary estimate if provided, else fallback
  const totalSalaries = body.estimatedSalaries || headcount * 55000
  const recruitingFee = Math.round((totalSalaries / headcount / 12) * headcount)
  const totalYear1 = setupCost + managementFee + recruitingFee + totalSalaries

  // Position metadata (US-standard titles, all-in annual avg incl. 34% CR social charges)
  const POSITION_META: Record<string, { label: string; years: string; annualAvg: number }> = {
    // Engineering
    devMgr:      { label: 'Engineering Manager',          years: '10+ yrs',  annualAvg: 136680 },
    srLead:      { label: 'Staff Engineer',               years: '5–10 yrs', annualAvg: 96480  },
    techLead:    { label: 'Tech Lead',                    years: '3–5 yrs',  annualAvg: 80400  },
    srDev:       { label: 'Senior Software Engineer',     years: '5+ yrs',   annualAvg: 84420  },
    midDev:      { label: 'Mid-Level Software Engineer',  years: '2–4 yrs',  annualAvg: 45024  },
    jrDev:       { label: 'Junior Software Engineer',     years: '1–2 yrs',  annualAvg: 26532  },
    intern:      { label: 'Software Engineering Intern',  years: '0–1 yrs',  annualAvg: 16080  },
    // QA
    srQaMgr:     { label: 'Senior QA Manager',            years: '10+ yrs',  annualAvg: 76380  },
    srQa:        { label: 'Senior QA Engineer',           years: '5+ yrs',   annualAvg: 53064  },
    midQa:       { label: 'Mid-Level QA Engineer',        years: '2–4 yrs',  annualAvg: 37836  },
    jrQa:        { label: 'Junior QA Engineer',           years: '0–2 yrs',  annualAvg: 23316  },
    // Data Engineering
    srDataEng:   { label: 'Senior Data Engineer',         years: '5+ yrs',   annualAvg: 84420  },
    midDataEng:  { label: 'Mid-Level Data Engineer',      years: '2–4 yrs',  annualAvg: 52260  },
    jrDataEng:   { label: 'Junior Data Engineer',         years: '1–2 yrs',  annualAvg: 32160  },
    // DevOps & Cloud
    srDevOps:    { label: 'Senior DevOps/Cloud Engineer', years: '5+ yrs',   annualAvg: 88440  },
    midDevOps:   { label: 'Mid-Level DevOps/Cloud Eng.',  years: '2–4 yrs',  annualAvg: 56280  },
    jrDevOps:    { label: 'Junior DevOps/Cloud Engineer', years: '1–2 yrs',  annualAvg: 32160  },
    // Product Management
    srPM:        { label: 'Senior Product Manager',       years: '5+ yrs',   annualAvg: 84420  },
    pm:          { label: 'Product Manager',              years: '2–5 yrs',  annualAvg: 52260  },
    assocPM:     { label: 'Associate Product Manager',    years: '0–2 yrs',  annualAvg: 36984  },
    // UI/UX Design
    srUX:        { label: 'Senior UI/UX Designer',        years: '5+ yrs',   annualAvg: 64320  },
    midUX:       { label: 'Mid-Level UI/UX Designer',     years: '2–4 yrs',  annualAvg: 44220  },
    jrUX:        { label: 'Junior UI/UX Designer',        years: '0–2 yrs',  annualAvg: 25728  },
    // Data Science
    srDS:        { label: 'Senior Data Scientist',        years: '5+ yrs',   annualAvg: 92460  },
    ds:          { label: 'Data Scientist',               years: '2–5 yrs',  annualAvg: 58692  },
    jrDS:        { label: 'Junior Data Scientist',        years: '1–2 yrs',  annualAvg: 36984  },
    // Business Analysis
    srBA:        { label: 'Senior Business Analyst',      years: '5+ yrs',   annualAvg: 60300  },
    ba:          { label: 'Business Analyst',             years: '2–4 yrs',  annualAvg: 40200  },
    jrBA:        { label: 'Junior Business Analyst',      years: '0–2 yrs',  annualAvg: 25728  },
  }

  // Build position breakdown string for the prompt
  const s = body.seniority || {}
  const seniorityLines = Object.entries(POSITION_META)
    .filter(([key]) => (s[key] || 0) > 0)
    .map(([key, meta]) =>
      `  - ${meta.label} (${meta.years}): ${s[key]} person(s) × $${meta.annualAvg.toLocaleString()}/yr avg (all-in, incl. 34% CR social charges)`
    )
    .join('\n')

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
    - Estimated total compensation Year 1 (all-in, incl. 34% CR social charges): $${totalSalaries.toLocaleString()}
    - Total Year 1 investment: $${totalYear1.toLocaleString()}

    Costa Rica salary ranges reference (USD/year, all-in incl. 34% social charges):
    Engineering:
    - Engineering Manager (10+ yrs): $112,560 – $160,800/yr
    - Staff Engineer (5–10 yrs): $80,400 – $112,560/yr
    - Tech Lead (3–5 yrs): $64,320 – $96,480/yr
    - Senior Software Engineer (5+ yrs): $64,320 – $104,520/yr
    - Mid-Level Software Engineer (2–4 yrs): $33,768 – $56,280/yr
    - Junior Software Engineer (1–2 yrs): $20,904 – $32,160/yr
    - Software Engineering Intern (0–1 yrs): $14,472 – $17,688/yr
    QA:
    - Senior QA Manager (10+ yrs): $64,320 – $88,440/yr
    - Senior QA Engineer (5+ yrs): $45,024 – $61,104/yr
    - Mid-Level QA Engineer (2–4 yrs): $32,160 – $43,416/yr
    - Junior QA Engineer (0–2 yrs): $16,080 – $30,552/yr
    Data Engineering:
    - Senior Data Engineer (5+ yrs): $64,320 – $104,520/yr
    - Mid-Level Data Engineer (2–4 yrs): $40,200 – $64,320/yr
    - Junior Data Engineer (1–2 yrs): $24,120 – $40,200/yr
    DevOps & Cloud:
    - Senior DevOps/Cloud Engineer (5+ yrs): $64,320 – $112,560/yr
    - Mid-Level DevOps/Cloud Engineer (2–4 yrs): $40,200 – $72,360/yr
    - Junior DevOps/Cloud Engineer (1–2 yrs): $24,120 – $40,200/yr
    Product Management:
    - Senior Product Manager (5+ yrs): $64,320 – $104,520/yr
    - Product Manager (2–5 yrs): $40,200 – $64,320/yr
    - Associate Product Manager (0–2 yrs): $28,944 – $45,024/yr
    UI/UX Design:
    - Senior UI/UX Designer (5+ yrs): $48,240 – $80,400/yr
    - Mid-Level UI/UX Designer (2–4 yrs): $32,160 – $56,280/yr
    - Junior UI/UX Designer (0–2 yrs): $19,296 – $32,160/yr
    Data Science:
    - Senior Data Scientist (5+ yrs): $72,360 – $112,560/yr
    - Data Scientist (2–5 yrs): $45,024 – $72,360/yr
    - Junior Data Scientist (1–2 yrs): $28,944 – $45,024/yr
    Business Analysis:
    - Senior Business Analyst (5+ yrs): $48,240 – $72,360/yr
    - Business Analyst (2–4 yrs): $32,160 – $48,240/yr
    - Junior Business Analyst (0–2 yrs): $19,296 – $32,160/yr

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
- Estimated total compensation (all-in, incl. 34% CR social charges)
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
      model: 'claude-sonnet-4-6',
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
