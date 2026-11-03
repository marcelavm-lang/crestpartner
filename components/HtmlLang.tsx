'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { localeFromPath } from '@/lib/i18n'

/** Keeps <html lang> in sync with the page language (Spanish pages live under /es). */
export default function HtmlLang() {
  const pathname = usePathname()
  useEffect(() => {
    document.documentElement.lang = localeFromPath(pathname)
  }, [pathname])
  return null
}
