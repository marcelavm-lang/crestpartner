import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  const body = await req.json()

  const userMessage = `
    Company: ${body.company}
    Industry: ${body.industry}
    Current US team size: ${body.teamSize}
    Profiles needed in Costa Rica: ${body.profiles.join(', ')}
    Number of people: ${body.headcount}
    Services needed: ${body.services.join(', ')}
    Timeline: ${body.timeline}
  `

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: `You are an expansion plan advisor for Crest Partners — a nearshore tech operations company in Costa Rica with 25+ years of experience. Based on the user's inputs, generate a personalized, professional expansion plan that includes: 1) Executive summary addressing their situation 2) Recommended team structure 3) Timeline breakdown — Day 1, Week 1, Month 1, Month 3 4) Key considerations for their industry 5) Why Costa Rica makes sense for their case 6) Next steps with Crest Partners. Keep the tone confident, specific and human. Reference real facts: less than 1% turnover, 25+ years, $1B+ client revenue, 97.6 GPTW Trust Index. Max 400 words. Use markdown headers.`,
    messages: [{ role: 'user', content: userMessage }],
  })

  const content = message.content[0]
  if (content.type !== 'text') {
    return NextResponse.json({ error: 'Unexpected response type' }, { status: 500 })
  }

  return NextResponse.json({ plan: content.text })
}
