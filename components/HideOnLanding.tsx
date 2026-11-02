'use client'

import { usePathname } from 'next/navigation'

/** Hides site chrome (e.g. the global footer) on the ad landing page, which has its own footer. */
export default function HideOnLanding({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/lp') return null
  return <>{children}</>
}
