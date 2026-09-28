'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { BookCallLink } from '@/components/CtaLinks'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Why Costa Rica', href: '/why-costa-rica' },
  { label: 'Who we are', href: '/who-we-are' },
  { label: 'Build your plan', href: '/expansion-plan', highlight: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0E2233] border-b border-[#1F3A52]">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4 xl:gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
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
        <div className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navLinks.map((link) => (
            link.highlight ? (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[13px] font-bold text-[#5FD4CB] border border-[#5FD4CB] px-4 py-1.5 rounded-[8px] hover:bg-[#5FD4CB] hover:text-[#0E2233] transition-colors"
              >
                {link.label} →
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[13.5px] font-normal text-white/85 hover:text-[#5FD4CB] transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <BookCallLink className="bg-[#3CC4B9] text-[#0E2233] text-[13px] font-bold px-4 xl:px-5 py-2.5 rounded-[8px] hover:bg-[#5FD4CB] transition-colors whitespace-nowrap" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#1F3A52] bg-[#0E2233] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-white/85 hover:text-[#5FD4CB] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <BookCallLink
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#3CC4B9] text-[#0E2233] text-[13px] font-bold px-5 py-2.5 rounded-[8px] text-center hover:bg-[#5FD4CB] transition-colors"
          />
        </div>
      )}
    </header>
  )
}
