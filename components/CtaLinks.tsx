'use client'

import type { ReactNode } from 'react'
import { SITE } from '@/lib/site'
import { trackEvent } from '@/lib/analytics'

type LinkProps = {
  className?: string
  children?: ReactNode
  onClick?: () => void
}

/** Primary CTA — always "Book a 30-min call" → Calendly, new tab. */
export function BookCallLink({ className, children, onClick }: LinkProps) {
  return (
    <a
      href={SITE.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackEvent('calendly_click')
        onClick?.()
      }}
    >
      {children ?? 'Book a 30-min call'}
    </a>
  )
}

/** WhatsApp link with the pre-filled message. */
export function WhatsAppLink({ className, children, onClick }: LinkProps) {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackEvent('whatsapp_click')
        onClick?.()
      }}
    >
      {children ?? `WhatsApp: ${SITE.whatsappDisplay}`}
    </a>
  )
}
