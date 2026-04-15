'use client'

import { useState } from 'react'
import ExpansionPlanForm from './ExpansionPlanForm'

export default function ExpansionPlanWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#2574A7] text-white font-bold text-[13px] px-5 py-3 rounded-full shadow-lg hover:bg-[#1f6391] transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
        aria-label="Build your expansion plan"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
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
