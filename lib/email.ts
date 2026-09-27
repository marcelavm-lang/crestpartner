import { Resend } from 'resend'
import { SITE } from '@/lib/site'

export const LEADS_TO = SITE.email
export const LEADS_FROM = 'Crest Partners Website <website@crestpartners.com>'

/** Returns a Resend client, or null (and logs) when RESEND_API_KEY is missing. */
export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.error('[email] RESEND_API_KEY is not set — cannot send email.')
    return null
  }
  return new Resend(key)
}

export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Renders label/value rows as a simple HTML table + plain-text fallback. */
export function renderFields(rows: [string, unknown][]) {
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="font-weight:bold;vertical-align:top;border-bottom:1px solid #eee">${escapeHtml(k)}</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(v) || '—'}</td></tr>`
    )
    .join('')}</table>`
  const text = rows.map(([k, v]) => `${k}: ${v ?? '—'}`).join('\n')
  return { html, text }
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
