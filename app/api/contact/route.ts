import { NextRequest, NextResponse } from 'next/server'
import { EMAIL_RE, LEADS_FROM, LEADS_TO, getResend, renderFields } from '@/lib/email'

export const runtime = 'nodejs'

const GOAL_LABELS: Record<string, string> = {
  launch: 'Launch from scratch',
  build: 'Build a tech team',
  operate: 'Delegate back office',
  all: 'All of the above',
  notsure: 'Not sure yet',
}

const MAX_MESSAGE = 5000

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : ''
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real users never see or fill this field. Pretend success, send nothing.
  if (str(body.website)) {
    return NextResponse.json({ ok: true })
  }

  const firstName = str(body.firstName)
  const lastName = str(body.lastName)
  const company = str(body.company)
  const email = str(body.email)
  const goal = str(body.goal)
  const message = str(body.message)

  if (!firstName) return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
  if (!lastName) return NextResponse.json({ error: 'Last name is required.' }, { status: 400 })
  if (!company) return NextResponse.json({ error: 'Company is required.' }, { status: 400 })
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (!goal) {
    return NextResponse.json({ error: 'Please tell us what you are looking to build.' }, { status: 400 })
  }
  if (message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: `"Tell us more" must be ${MAX_MESSAGE.toLocaleString()} characters or fewer.` },
      { status: 400 }
    )
  }

  const resend = getResend()
  if (!resend) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  const goalLabel = GOAL_LABELS[goal] ?? goal
  const { html, text } = renderFields([
    ['First name', firstName],
    ['Last name', lastName],
    ['Company', company],
    ['Email', email],
    ['What are you looking to build?', goalLabel],
    ['Tell us more', message],
  ])

  try {
    const { error } = await resend.emails.send({
      from: LEADS_FROM,
      to: LEADS_TO,
      replyTo: email,
      subject: `New lead: ${company} — ${goalLabel}`,
      html: `<h2 style="font-family:Arial,sans-serif">New contact form lead</h2>${html}`,
      text,
    })
    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Could not send your message.' }, { status: 500 })
    }
  } catch (err) {
    console.error('[contact] Unexpected error sending email:', err)
    return NextResponse.json({ error: 'Could not send your message.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
