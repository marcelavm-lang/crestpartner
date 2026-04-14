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
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          {/* Modal panel */}
          <div className="bg-white rounded-[16px] shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-8">
              <ExpansionPlanForm onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
