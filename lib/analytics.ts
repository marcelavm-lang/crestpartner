import { track } from '@vercel/analytics'

export type AnalyticsEvent =
  | 'contact_form_submitted'
  | 'calendly_click'
  | 'whatsapp_click'
  | 'expansion_plan_completed'

/** Fire a Vercel Analytics custom event. Never throws. */
export function trackEvent(name: AnalyticsEvent, props?: Record<string, string | number | boolean | null>) {
  try {
    track(name, props)
  } catch {
    // analytics must never break the UI
  }
}
