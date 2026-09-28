'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BookCallLink } from '@/components/CtaLinks'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Why Costa Rica', href: '/why-costa-rica' },
  { label: 'Who we are', href: '/who-we-are' },
]

// Brand gradient (from the logo): light teal → teal → blue (decorative only — never behind text)
const GRADIENT = 'bg-[linear-gradient(90deg,#2BD4B4_0%,#00A79D_50%,#2574A7_100%)]'

/**
 * Proposal A — "Transparent over the video"
 * - Home: transparent over the hero video; after a short scroll it becomes
 *   frosted dark navy — same logo (reverso) and white links, so it never changes color.
 * - Other pages: frosted dark navy from the start.
 * - Personality comes from the logo's gradient: animated underline on links,
 *   gradient hairline under the bar and a teal glow on the CTA.
 */
export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // Transparent only while sitting over the Home video; otherwise the same dark navy, frosted.
  const transparent = isHome && !scrolled && !open

  return (
    <header
      className={`${isHome ? 'fixed' : 'sticky'} inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-[#0E2233]/90 backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4 xl:gap-6">
        {/* Logo */}
        <Link href="/" className="relative flex items-center shrink-0" aria-label="Crest Partners — home">
          <Image
            src="/crest-partners-logo/svg/crest-partners-logo-reverso.svg"
            alt="Crest Partners"
            width={685}
            height={100}
            unoptimized
            priority
            className="h-[30px] lg:h-[32px] xl:h-[36px] w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`group relative whitespace-nowrap py-2 text-[14px] font-medium transition-colors ${
                  active ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[3px] rounded-full ${GRADIENT} origin-left transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <Link
            href="/expansion-plan"
            className={`whitespace-nowrap text-[13px] font-bold px-3.5 xl:px-4 py-2.5 rounded-full border transition-colors ${
              'border-white/40 text-white hover:border-white'
            }`}
          >
            Build your plan
          </Link>
          <BookCallLink
            className={`whitespace-nowrap text-[13px] font-bold px-4 xl:px-5 py-2.5 rounded-full shadow-[0_8px_22px_-8px_rgba(0,167,157,0.9)] hover:-translate-y-px transition-all ${
              'bg-white text-[#0E2233] hover:bg-[#E9FBF8]'
            }`}
          >
            Book a 30-min call →
          </BookCallLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-[2px] rounded-full transition-all bg-white ${
                open && i === 0 ? 'rotate-45 translate-y-[7px]' : ''
              } ${open && i === 1 ? 'opacity-0' : ''} ${open && i === 2 ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          ))}
        </button>
      </nav>

      {/* Gradient hairline once the bar is solid */}
      <div
        aria-hidden="true"
        className={`h-[2px] ${GRADIENT} transition-opacity duration-300 ${transparent ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 pt-4 pb-6 flex flex-col">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-3.5 border-b border-white/10 text-[18px] font-bold ${
                  active ? 'text-[#5FD4CB]' : 'text-white'
                }`}
              >
                {link.label}
                <span aria-hidden="true" className="text-[#5FD4CB]">→</span>
              </Link>
            )
          })}
          <Link
            href="/expansion-plan"
            className="mt-5 text-center text-[14px] font-bold px-5 py-3 rounded-full border border-white/40 text-white"
          >
            Build your plan
          </Link>
          <BookCallLink
            onClick={() => setOpen(false)}
            className="mt-3 text-center text-[14px] font-bold px-5 py-3 rounded-full bg-white text-[#0E2233]"
          >
            Book a 30-min call →
          </BookCallLink>
        </div>
      )}
    </header>
  )
}
