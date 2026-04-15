'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// ── Markdown renderer ──────────────────────────────────────────────────────
function MarkdownRenderer({ text }: { text: string }) {
  const sections = text.split('\n\n').filter(Boolean)
  return (
    <div className="space-y-3">
      {sections.map((section, i) => {
        const lines = section.split('\n')
        const first = lines[0]
        if (first.startsWith('## ')) {
          return (
            <div key={i}>
              <h2 className="text-[15px] font-bold text-black mt-5 mb-1.5">{first.slice(3)}</h2>
              {lines.slice(1).map((l, j) => l.trim() ? (
                <p key={j} className="text-[13px] text-[#5A6A7A] font-light leading-relaxed">{l}</p>
              ) : null)}
            </div>
          )
        }
        if (first.startsWith('### ')) {
          return (
            <div key={i}>
              <h3 className="text-[13px] font-bold text-black mt-3 mb-1">{first.slice(4)}</h3>
              {lines.slice(1).map((l, j) => l.trim() ? (
                <p key={j} className="text-[13px] text-[#5A6A7A] font-light leading-relaxed">{l}</p>
              ) : null)}
            </div>
          )
        }
        if (lines.every(l => /^[-*] /.test(l.trim()) || l.trim() === '')) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {lines.filter(l => /^[-*] /.test(l.trim())).map((l, j) => (
                <li key={j} className="text-[13px] text-[#5A6A7A] font-light leading-relaxed">
                  {l.replace(/^[-*] /, '').replace(/\*\*([^*]+)\*\*/g, '$1')}
                </li>
              ))}
            </ul>
          )
        }
        const cleaned = section.replace(/\*\*([^*]+)\*\*/g, '$1')
        return (
          <p key={i} className="text-[13px] text-[#5A6A7A] font-light leading-relaxed">
            {cleaned}
          </p>
        )
      })}
    </div>
  )
}

// ── Constants ──────────────────────────────────────────────────────────────
const INDUSTRIES = ['Tech', 'Data & Analytics', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS', 'E-commerce', 'Other']
const US_TEAM_SIZES = ['1–10', '11–50', '51–200', '200+']
const PROFILES = [
  'Software Engineers', 'Data Engineers', 'DevOps & Cloud Engineers',
  'QA Engineers', 'Product Managers', 'Engineering Leadership',
  'UI/UX Designers', 'Data Scientists', 'Business Analysts', 'Other',
]
const SERVICES = [
  { id: 'launch', label: 'Launch', sub: 'Set up legal entity in Costa Rica' },
  { id: 'build', label: 'Build', sub: 'Recruit and manage the team' },
  { id: 'operate', label: 'Operate', sub: 'Run back office (accounting, HR, legal)' },
  { id: 'all', label: 'All of the above', sub: 'Complete end-to-end partnership' },
]
const TIMELINES = [
  { value: 'ASAP (30 days)', label: 'ASAP', sub: '30 days' },
  { value: '3 months', label: '3 months', sub: 'Planned expansion' },
  { value: '6 months', label: '6 months', sub: 'Strategic timeline' },
  { value: 'Still exploring', label: 'Still exploring', sub: 'Just researching' },
]
const TOTAL_STEPS = 5 // data steps; step 6 is result

// ── Form state ─────────────────────────────────────────────────────────────
interface PlanFormData {
  companyName: string
  industry: string
  usTeamSize: string
  profiles: string[]
  headcount: number
  services: string[]
  timeline: string
  contactName: string
  contactCompany: string
  contactEmail: string
  message: string
}

const initial: PlanFormData = {
  companyName: '', industry: '', usTeamSize: '',
  profiles: [], headcount: 5, services: [], timeline: '',
  contactName: '', contactCompany: '', contactEmail: '', message: '',
}

function toggle(arr: string[], val: string) {
  return arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]
}

// ── Progress bar ───────────────────────────────────────────────────────────
function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-7">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-[#5A6A7A]">Step {step} of {TOTAL_STEPS}</span>
        <span className="text-xs text-[#5A6A7A]">{Math.round((step / TOTAL_STEPS) * 100)}%</span>
      </div>
      <div className="h-1.5 bg-[#F4F7FA] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#2574A7] rounded-full transition-all duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>
    </div>
  )
}

// ── Checkbox ───────────────────────────────────────────────────────────────
function Checkbox({ checked, onChange, label, sub }: { checked: boolean; onChange: () => void; label: string; sub?: string }) {
  return (
    <label
      onClick={onChange}
      className={`flex items-start gap-3 p-3.5 border rounded-[10px] cursor-pointer transition-colors ${
        checked ? 'border-[#2574A7] bg-[#EBF4FA]' : 'border-[#D8E2EA] hover:border-[#2574A7]'
      }`}
    >
      <div className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
        checked ? 'bg-[#2574A7] border-[#2574A7]' : 'border-[#D8E2EA]'
      }`}>
        {checked && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div>
        <div className="text-[13px] text-black font-medium leading-tight">{label}</div>
        {sub && <div className="text-[11px] text-[#5A6A7A] font-light mt-0.5">{sub}</div>}
      </div>
    </label>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function ExpansionPlanForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<PlanFormData>(initial)
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)
  const [costs, setCosts] = useState<{ setup: number; managementFee: number; headcount: number } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const canNext = (): boolean => {
    if (step === 1) return !!(form.companyName && form.industry && form.usTeamSize)
    if (step === 2) return form.profiles.length > 0
    if (step === 3) return form.services.length > 0
    if (step === 4) return !!form.timeline
    if (step === 5) return !!(form.contactName && form.contactEmail)
    return true
  }

  async function handleSubmit() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/expansion-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: form.contactCompany || form.companyName,
          industry: form.industry,
          usTeamSize: form.usTeamSize,
          profiles: form.profiles,
          headcount: form.headcount,
          services: form.services,
          timeline: form.timeline,
          name: form.contactName,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setPlan(data.plan)
      setCosts(data.costs)
      setStep(6)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ── Result view ────────────────────────────────────────────────────────
  if (step === 6 && plan) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-1">Your expansion plan</p>
            <h2 className="text-xl font-bold text-black leading-snug">Here's what your Costa Rica operation looks like</h2>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-[#5A6A7A] hover:text-black text-xl leading-none ml-4 mt-1 shrink-0">✕</button>
          )}
        </div>

        {costs && (
          <div className="grid grid-cols-3 gap-2 mb-5">
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[8px] p-3 text-center">
              <div className="text-[15px] font-bold text-[#2574A7]">${costs.setup.toLocaleString()}</div>
              <div className="text-[10px] text-[#5A6A7A] mt-0.5">Setup</div>
            </div>
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[8px] p-3 text-center">
              <div className="text-[15px] font-bold text-[#2574A7]">${(costs.managementFee / 1000).toFixed(0)}k/yr</div>
              <div className="text-[10px] text-[#5A6A7A] mt-0.5">Management</div>
            </div>
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[8px] p-3 text-center">
              <div className="text-[15px] font-bold text-[#00A79D]">{costs.headcount}</div>
              <div className="text-[10px] text-[#5A6A7A] mt-0.5">Headcount</div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto border-t border-[#F4F7FA] pt-4">
          <MarkdownRenderer text={plan} />
        </div>

        <div className="pt-5 mt-4 border-t border-[#D8E2EA] flex gap-3">
          <Link
            href="/contact"
            className="flex-1 bg-[#2574A7] text-white font-bold text-[13px] py-3 rounded-[8px] text-center hover:bg-[#1f6391] transition-colors"
            onClick={onClose}
          >
            Schedule a call with our team →
          </Link>
          <button
            onClick={() => { setPlan(null); setCosts(null); setStep(1); setForm(initial) }}
            className="px-4 py-3 border border-[#D8E2EA] text-[#5A6A7A] text-[13px] rounded-[8px] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors shrink-0"
          >
            Start over
          </button>
        </div>
      </div>
    )
  }

  // ── Form steps ─────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-1">Expansion Plan Generator</p>
          <h2 className="text-xl font-bold text-black leading-snug">Build your Costa Rica expansion plan</h2>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[#5A6A7A] hover:text-black text-xl leading-none ml-4 mt-1 shrink-0">✕</button>
        )}
      </div>

      <ProgressBar step={step} />

      {/* Step content */}
      <div className="flex-1 overflow-y-auto">

        {/* Step 1 — Company info */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-[14px] font-bold text-black mb-3">Your company</h3>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Company name</label>
              <input type="text" value={form.companyName}
                onChange={e => setForm({ ...form, companyName: e.target.value })}
                placeholder="e.g. Acme Data Inc."
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Industry</label>
              <select value={form.industry}
                onChange={e => setForm({ ...form, industry: e.target.value })}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors bg-white"
              >
                <option value="">Select industry…</option>
                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Current U.S. team size</label>
              <select value={form.usTeamSize}
                onChange={e => setForm({ ...form, usTeamSize: e.target.value })}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors bg-white"
              >
                <option value="">Select size…</option>
                {US_TEAM_SIZES.map(s => <option key={s} value={s}>{s} employees</option>)}
              </select>
            </div>
          </div>
        )}

        {/* Step 2 — Profiles */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-[14px] font-bold text-black mb-3">The team you want to build</h3>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-2">Profiles needed</label>
              <div className="grid grid-cols-1 gap-2">
                {PROFILES.map(p => (
                  <Checkbox key={p} checked={form.profiles.includes(p)}
                    onChange={() => setForm({ ...form, profiles: toggle(form.profiles, p) })}
                    label={p}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-2">
                Number of people: <span className="text-[#2574A7] font-bold">{form.headcount}</span>
              </label>
              <input type="range" min="1" max="50" value={form.headcount}
                onChange={e => setForm({ ...form, headcount: Number(e.target.value) })}
                className="w-full accent-[#2574A7]"
              />
              <div className="flex justify-between text-[11px] text-[#5A6A7A] mt-1">
                <span>1</span><span>25</span><span>50</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — Services */}
        {step === 3 && (
          <div className="space-y-3">
            <h3 className="text-[14px] font-bold text-black mb-3">Services you need</h3>
            {SERVICES.map(s => (
              <Checkbox key={s.id} checked={form.services.includes(s.id)}
                onChange={() => setForm({ ...form, services: toggle(form.services, s.id) })}
                label={s.label} sub={s.sub}
              />
            ))}
          </div>
        )}

        {/* Step 4 — Timeline */}
        {step === 4 && (
          <div className="space-y-3">
            <h3 className="text-[14px] font-bold text-black mb-3">Timeline</h3>
            {TIMELINES.map(t => (
              <label key={t.value}
                onClick={() => setForm({ ...form, timeline: t.value })}
                className={`flex items-center justify-between p-4 border rounded-[10px] cursor-pointer transition-colors ${
                  form.timeline === t.value ? 'border-[#2574A7] bg-[#EBF4FA]' : 'border-[#D8E2EA] hover:border-[#2574A7]'
                }`}
              >
                <div>
                  <div className="text-[14px] font-bold text-black">{t.label}</div>
                  <div className="text-[12px] text-[#5A6A7A] font-light">{t.sub}</div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  form.timeline === t.value ? 'border-[#2574A7] bg-[#2574A7]' : 'border-[#D8E2EA]'
                }`}>
                  {form.timeline === t.value && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </label>
            ))}
          </div>
        )}

        {/* Step 5 — Contact */}
        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-[14px] font-bold text-black mb-1">Your details</h3>
            <p className="text-[12px] text-[#5A6A7A] font-light -mt-1 mb-3">To receive your personalized plan.</p>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Full name</label>
              <input type="text" value={form.contactName}
                onChange={e => setForm({ ...form, contactName: e.target.value })}
                placeholder="Jane Smith"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Company</label>
              <input type="text" value={form.contactCompany || form.companyName}
                onChange={e => setForm({ ...form, contactCompany: e.target.value })}
                placeholder={form.companyName || 'Acme Corp'}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Work email</label>
              <input type="email" value={form.contactEmail}
                onChange={e => setForm({ ...form, contactEmail: e.target.value })}
                placeholder="jane@company.com"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Anything else we should know? <span className="font-normal normal-case">(optional)</span></label>
              <textarea value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="e.g. We need Spanish speakers, we have a specific tech stack…"
                rows={3}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[8px] text-[12px] text-red-600">
            {error}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="pt-5 mt-4 border-t border-[#D8E2EA] flex justify-between items-center">
        {step > 1 ? (
          <button onClick={() => setStep(step - 1)}
            className="text-[13px] text-[#5A6A7A] hover:text-black transition-colors font-medium"
          >
            ← Back
          </button>
        ) : <div />}

        {step < TOTAL_STEPS ? (
          <button onClick={() => setStep(step + 1)} disabled={!canNext()}
            className="bg-[#2574A7] text-white font-bold text-[13px] px-6 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={!canNext() || loading}
            className="bg-[#2574A7] text-white font-bold text-[13px] px-6 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating your plan…
              </>
            ) : 'Get my plan →'}
          </button>
        )}
      </div>
    </div>
  )
}
