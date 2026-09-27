'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ExpansionPlanForm from './ExpansionPlanForm'

// Pages where the floating button is never shown (the page already is the form / CTA).
const HIDDEN_ON = ['/expansion-plan', '/contact', '/lp']

export default function ExpansionPlanWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolledPastFold, setScrolledPastFold] = useState(false)

  const hidden = HIDDEN_ON.some((p) => pathname === p || pathname?.startsWith(`${p}/`))

  useEffect(() => {
    if (hidden) return
    const onScroll = () => setScrolledPastFold(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [hidden, pathname])

  // Close the modal on route change.
  useEffect(() => setOpen(false), [pathname])

  if (hidden) return null

  return (
    <>
      {/* Floating button — only after the user scrolls more than one screen */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 bg-[#2574A7] text-white font-bold text-[12px] md:text-[13px] px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-lg hover:bg-[#1f6391] transition-all duration-300 hover:shadow-xl flex items-center gap-2 ${
          scrolledPastFold ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Build your expansion plan"
        aria-hidden={!scrolledPastFold}
        tabIndex={scrolledPastFold ? 0 : -1}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden="true">
          <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Build your plan →
      </button>

      {/* Modal backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center md:p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          {/* Modal panel — fullscreen on mobile, card on desktop */}
          <div className="bg-white w-full md:rounded-[16px] md:max-w-lg md:max-h-[90vh] h-[95dvh] md:h-auto flex flex-col overflow-hidden shadow-2xl md:rounded-t-[16px] rounded-t-[20px]">
            {/* Mobile drag handle */}
            <div className="md:hidden flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 bg-[#D8E2EA] rounded-full" />
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <ExpansionPlanForm onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
