'use client'

import Link from 'next/link'
import { useState } from 'react'
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
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
            <g transform="translate(50,50)">
              {[0,20,40,60,80,100,120,140,160,180,200,220].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <line x1="0" y1={i < 4 ? -38 : -32} x2="0" y2="-20"
                    stroke={i < 5 ? '#00A79D' : '#2574A7'}
                    strokeWidth={i < 4 ? 6 : 5} strokeLinecap="round"/>
                  <circle cx="0" cy={i < 4 ? -42 : -36} r={i < 4 ? 4 : 3}
                    fill={i < 5 ? '#00A79D' : '#2574A7'}/>
                </g>
              ))}
            </g>
          </svg>
          <span style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.05em', color: '#000' }}>
            CREST PARTNERS
          </span>
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
