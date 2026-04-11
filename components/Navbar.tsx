'use client'

import Link from 'next/link'
import { useState } from 'react'
import LogoMark from './LogoMark'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Why Costa Rica', href: '/why-costa-rica' },
  { label: 'Who we are', href: '/who-we-are' },
  { label: 'Careers', href: '/careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#D8E2EA]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <LogoMark size={44} />
          <div className="flex flex-col leading-none gap-[3px]">
            <span className="font-bold text-[17px] tracking-[0.12em] uppercase text-black">CREST</span>
            <span className="font-light text-[11px] tracking-[0.22em] uppercase text-[#00A79D]">PARTNERS</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-400 text-black hover:text-[#2574A7] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#2574A7] text-white text-[13px] font-bold px-5 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors tracking-wide"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-black transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#D8E2EA] bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-black hover:text-[#2574A7] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#2574A7] text-white text-[13px] font-bold px-5 py-2.5 rounded-[8px] text-center hover:bg-[#1f6391] transition-colors"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  )
}
