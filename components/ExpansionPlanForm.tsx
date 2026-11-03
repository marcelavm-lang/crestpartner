'use client'

import React, { useState } from 'react'
import { BookCallLink } from '@/components/CtaLinks'
import { trackEvent } from '@/lib/analytics'
import { POSITIONS, GROUPS, GROUP_TO_PROFILE, EMPLOYER_COST_PCT, type PositionKey } from '@/lib/positions'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ReactMarkdown = require('react-markdown').default
// eslint-disable-next-line @typescript-eslint/no-require-imports
const remarkGfm = require('remark-gfm').default

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mdComponents: Record<string, any> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: ({ children }: any) => (
    <table className="w-full border-collapse border border-gray-200 my-4 text-sm">{children}</table>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thead: ({ children }: any) => <thead className="bg-gray-50">{children}</thead>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tbody: ({ children }: any) => <tbody>{children}</tbody>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tr: ({ children }: any) => <tr>{children}</tr>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  th: ({ children }: any) => (
    <th className="border border-gray-200 bg-gray-50 px-4 py-2 text-left font-bold text-gray-700">{children}</th>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  td: ({ children }: any) => (
    <td className="border border-gray-200 px-4 py-2 text-gray-600">{children}</td>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h2: ({ children }: any) => (
    <h2 className="text-[15px] font-bold text-gray-900 mt-6 mb-2">{children}</h2>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h3: ({ children }: any) => (
    <h3 className="text-[14px] font-bold text-gray-900 mt-4 mb-1">{children}</h3>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  p: ({ children }: any) => (
    <p className="text-[#3E4C59] leading-relaxed mb-3 font-normal text-[16px]">{children}</p>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  li: ({ children }: any) => (
    <li className="text-[#3E4C59] leading-relaxed mb-1 font-normal text-[16px]">{children}</li>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ul: ({ children }: any) => <ul className="list-disc pl-5 mb-3 space-y-0.5">{children}</ul>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  strong: ({ children }: any) => <strong className="font-bold text-black">{children}</strong>,
}

// ── Constants ──────────────────────────────────────────────────────────────
const INDUSTRIES = ['Tech', 'Data & Analytics', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS', 'E-commerce', 'Other']
const US_TEAM_SIZES = ['1–10', '11–50', '51–200', '200+']
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

type PositionCount = Record<PositionKey, number>

const TOTAL_STEPS = 5

// ── Form state ─────────────────────────────────────────────────────────────
interface PlanFormData {
  companyName: string
  industry: string
  usTeamSize: string
  profiles: string[]
  seniority: PositionCount
  services: string[]
  timeline: string
  contactName: string
  contactCompany: string
  contactEmail: string
  message: string
}

const EMPTY_POSITIONS = Object.fromEntries(POSITIONS.map((p) => [p.key, 0])) as PositionCount

const initial: PlanFormData = {
  companyName: '', industry: '', usTeamSize: '',
  profiles: [],
  seniority: { ...EMPTY_POSITIONS },
  services: [], timeline: '',
  contactName: '', contactCompany: '', contactEmail: '', message: '',
}

function toggle(arr: string[], val: string) {
  return arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]
}

const SERVICE_PARTS = ['launch', 'build', 'operate']

// "All of the above" selects/clears every service; picking all three individually also ticks it.
function toggleService(selected: string[], id: string): string[] {
  if (id === 'all') return selected.includes('all') ? [] : [...SERVICE_PARTS, 'all']
  const parts = toggle(selected.filter(x => x !== 'all'), id)
  return SERVICE_PARTS.every(p => parts.includes(p)) ? [...parts, 'all'] : parts
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function totalHeadcount(s: PositionCount): number {
  return (Object.values(s) as number[]).reduce((a, b) => a + b, 0)
}

function estimatedSalaries(s: PositionCount): number {
  return POSITIONS.reduce((total, level) => {
    return total + s[level.key as PositionKey] * level.avg
  }, 0)
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
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={`w-full text-left flex items-start gap-3 p-3.5 border rounded-[10px] cursor-pointer transition-colors ${
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
        <div className="text-[14px] text-black font-medium leading-tight">{label}</div>
        {sub && <div className="text-[12px] text-[#5A6A7A] font-normal mt-0.5">{sub}</div>}
      </div>
    </button>
  )
}

// ── Counter row ─────────────────────────────────────────────────────────────
function CounterRow({ label, years, value, onDec, onInc, annualRange }: {
  label: string; years: string; value: number
  onDec: () => void; onInc: () => void
  annualRange?: string
}) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-[8px] transition-colors bg-white ${
      value > 0 ? 'border border-[#2574A7]' : 'border border-[#D8E2EA]'
    }`}>
      <div className="flex-1 min-w-0">
        <span className="text-[14px] font-medium text-black">{label}</span>
        <span className="text-[12px] text-[#5A6A7A] font-normal ml-2">{years}</span>
        {annualRange && (
          <div className="text-[12px] text-[#5A6A7A] mt-0.5">{annualRange}/yr</div>
        )}
      </div>
      <div className="flex items-center gap-3 ml-3 shrink-0">
        <button type="button" onClick={onDec}
          className="w-7 h-7 rounded-full border border-[#D8E2EA] flex items-center justify-center text-[#5A6A7A] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors text-lg leading-none bg-white"
        >−</button>
        <span className="text-[15px] font-bold text-black w-5 text-center">{value}</span>
        <button type="button" onClick={onInc}
          className="w-7 h-7 rounded-full border border-[#D8E2EA] flex items-center justify-center text-[#5A6A7A] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors text-lg leading-none bg-white"
        >+</button>
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function ExpansionPlanForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<PlanFormData>(initial)
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)
  const [costs, setCosts] = useState<{ setup: number; managementFee: number; recruitingFee: number; totalSalaries: number; totalYear1: number; headcount: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set())

  const [showErrors, setShowErrors] = useState(false)

  // What is still missing on the current step (empty = ready to continue).
  const missing = (): string[] => {
    const m: string[] = []
    if (step === 1) {
      if (!form.companyName.trim()) m.push('your company name')
      if (!form.industry) m.push('an industry')
      if (!form.usTeamSize) m.push('your current U.S. team size')
    }
    if (step === 2 && totalHeadcount(form.seniority) === 0) m.push('at least one position')
    if (step === 3 && form.services.length === 0) m.push('at least one service')
    if (step === 4 && !form.timeline) m.push('a timeline')
    if (step === 5) {
      if (!form.contactName.trim()) m.push('your full name')
      if (!form.contactEmail.trim()) m.push('your work email')
      else if (!EMAIL_RE.test(form.contactEmail.trim())) m.push('a valid email address')
    }
    return m
  }

  function goNext() {
    if (missing().length) { setShowErrors(true); return }
    setShowErrors(false)
    if (step === 4 && !form.contactCompany) setForm(f => ({ ...f, contactCompany: f.companyName }))
    setStep(step + 1)
  }

  function goBack() {
    setShowErrors(false)
    setError(null)
    setStep(step - 1)
  }

  function toggleGroup(group: string) {
    setOpenGroups(prev => {
      const s = new Set(prev)
      if (s.has(group)) s.delete(group)
      else s.add(group)
      return s
    })
  }

  function adjustPosition(key: PositionKey, delta: number) {
    setForm(f => {
      const newSeniority = { ...f.seniority, [key]: Math.max(0, f.seniority[key] + delta) }
      const level = POSITIONS.find(l => l.key === key)
      const group = level?.group || ''
      const groupProfiles = level ? GROUP_TO_PROFILE[level.group] : []
      const groupLevels = POSITIONS.filter(l => l.group === group)
      const groupHasHeadcount = groupLevels.some(l => newSeniority[l.key as PositionKey] > 0)
      let newProfiles = [...f.profiles]
      if (groupHasHeadcount) {
        groupProfiles.forEach(p => { if (!newProfiles.includes(p)) newProfiles.push(p) })
      } else {
        newProfiles = newProfiles.filter(p => !groupProfiles.includes(p))
      }
      return { ...f, seniority: newSeniority, profiles: newProfiles }
    })
  }

  async function handleSubmit() {
    if (missing().length) { setShowErrors(true); return }
    setShowErrors(false)
    setLoading(true)
    setError(null)
    const hc = totalHeadcount(form.seniority)
    const salaries = estimatedSalaries(form.seniority)
    try {
      const res = await fetch('/api/expansion-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: form.contactCompany || form.companyName,
          industry: form.industry,
          usTeamSize: form.usTeamSize,
          profiles: form.profiles,
          headcount: hc,
          seniority: form.seniority,
          estimatedSalaries: salaries,
          services: form.services,
          timeline: form.timeline,
          name: form.contactName.trim(),
          email: form.contactEmail.trim(),
          contactCompany: form.contactCompany,
          message: form.message,
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data || data.error || !data.plan) {
        throw new Error('We couldn\u2019t generate your plan right now. Please try again in a minute, or book a call and a founder will walk you through it.')
      }
      setPlan(data.plan)
      setCosts(data.costs)
      trackEvent('expansion_plan_completed', { headcount: hc, timeline: form.timeline || null })
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
            <h2 className="text-xl font-bold text-black leading-snug">Here&apos;s what your Costa Rica operation looks like</h2>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-[#5A6A7A] hover:text-black text-xl leading-none ml-4 mt-1 shrink-0">✕</button>
          )}
        </div>

        {costs && (
          <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 ${onClose ? '' : 'xl:grid-cols-5'}`}>
            {[
              { value: `$${costs.setup.toLocaleString()}`, label: 'One-time setup', tone: 'text-[#2574A7]' },
              { value: `$${costs.managementFee.toLocaleString()}`, label: 'Management fee / yr', tone: 'text-[#2574A7]' },
              { value: `$${costs.recruitingFee.toLocaleString()}`, label: 'Recruiting fees', tone: 'text-[#00A79D]' },
              { value: `$${costs.totalSalaries.toLocaleString()}`, label: 'Est. total comp / yr', tone: 'text-[#2574A7]' },
            ].map((c) => (
              <div key={c.label} className="min-w-0 bg-gray-50 border border-gray-200 rounded-lg px-2 py-4 text-center">
                <div className={`text-[16px] sm:text-[17px] font-bold leading-tight tabular-nums ${c.tone}`}>{c.value}</div>
                <div className="text-xs text-[#5A6A7A] mt-1">{c.label}</div>
              </div>
            ))}
            <div className={`min-w-0 bg-teal-50 border border-teal-200 rounded-lg px-2 py-4 text-center col-span-2 ${onClose ? '' : 'xl:col-span-1'}`}>
              <div className="text-[16px] sm:text-[17px] font-bold leading-tight tabular-nums text-[#00A79D]">${costs.totalYear1.toLocaleString()}</div>
              <div className="text-xs text-[#00A79D] mt-1 font-bold">Total Year 1</div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto border-t border-[#F4F7FA] pt-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {plan}
          </ReactMarkdown>
        </div>

        <div className="pt-5 mt-4 border-t border-[#D8E2EA] flex gap-3">
          <BookCallLink
            className="flex-1 bg-[#2574A7] text-white font-bold text-[14px] py-3 rounded-[8px] text-center hover:bg-[#1f6391] transition-colors"
          >
            Book a 30-min call →
          </BookCallLink>
          <button
            onClick={() => { setPlan(null); setCosts(null); setStep(1); setForm(initial) }}
            className="px-4 py-3 border border-[#D8E2EA] text-[#5A6A7A] text-[14px] rounded-[8px] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors shrink-0"
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
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-1">Expansion Plan Generator</p>
          {/* In the modal this is the only heading; on /expansion-plan the page H1 already says it. */}
          {onClose && (
            <h2 className="text-xl font-bold text-black leading-snug">Build your Costa Rica expansion plan</h2>
          )}
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[#5A6A7A] hover:text-black text-xl leading-none ml-4 mt-1 shrink-0">✕</button>
        )}
      </div>

      <ProgressBar step={step} />

      <div className="flex-1 overflow-y-auto">

        {/* Step 1 — Company info */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-[14px] font-bold text-black mb-3">Your company</h3>
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Company name</label>
              <input type="text" value={form.companyName}
                onChange={e => setForm({ ...form, companyName: e.target.value })}
                placeholder="e.g. Acme Data Inc."
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Industry</label>
              <select value={form.industry}
                onChange={e => setForm({ ...form, industry: e.target.value })}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors bg-white"
              >
                <option value="">Select industry…</option>
                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Current U.S. team size</label>
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

        {/* Step 2 — Team composition accordion */}
        {step === 2 && (
          <div className="space-y-3">
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1">Team composition</label>
              <p className="text-[12px] text-[#5A6A7A] font-normal mb-3">Expand a category and select how many professionals you need at each level. Costs shown in USD/yr, all-in: salary plus ~{EMPLOYER_COST_PCT}% Costa Rica employer costs.</p>
            </div>

            {/* Accordion groups */}
            <div className="space-y-2">
              {GROUPS.map(group => {
                const levels = POSITIONS.filter(l => l.group === group)
                const groupCount = levels.reduce((sum, l) => sum + form.seniority[l.key as PositionKey], 0)
                const isOpen = openGroups.has(group)

                return (
                  <div key={group} className={`border rounded-[10px] overflow-hidden transition-all ${
                    groupCount > 0 ? 'border-[#2574A7]' : 'border-[#D8E2EA]'
                  }`}>
                    {/* Header */}
                    <button
                      type="button"
                      onClick={() => toggleGroup(group)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors ${
                        groupCount > 0 ? 'bg-[#EBF4FA]' : 'bg-white hover:bg-[#F4F7FA]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[15px] font-medium text-black">{group}</span>
                        {groupCount > 0 && (
                          <span className="bg-[#2574A7] text-white text-[12px] font-bold px-2 py-0.5 rounded-full leading-none">
                            {groupCount} {groupCount === 1 ? 'person' : 'people'}
                          </span>
                        )}
                      </div>
                      <svg
                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                        className={`shrink-0 transition-transform duration-200 text-[#5A6A7A] ${isOpen ? 'rotate-180' : ''}`}
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <path d="M3 5L7 9L11 5"/>
                      </svg>
                    </button>

                    {/* Expanded counters */}
                    {isOpen && (
                      <div className="px-3 pb-3 pt-2 space-y-2 border-t border-[#D8E2EA] bg-[#FAFCFE]">
                        {levels.map(l => (
                          <CounterRow
                            key={l.key}
                            label={l.label}
                            years={l.years}
                            annualRange={l.annualRange}
                            value={form.seniority[l.key as PositionKey]}
                            onDec={() => adjustPosition(l.key as PositionKey, -1)}
                            onInc={() => adjustPosition(l.key as PositionKey, 1)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Totals */}
            {totalHeadcount(form.seniority) > 0 && (
              <div className="mt-1 pt-3 border-t border-[#D8E2EA] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-bold text-[#5A6A7A]">Total headcount</span>
                  <span className="text-[20px] font-bold text-[#2574A7]">{totalHeadcount(form.seniority)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-[#5A6A7A] font-normal">Est. annual cost (incl. {EMPLOYER_COST_PCT}% CR employer costs)</span>
                  <span className="text-[14px] font-bold text-[#00A79D]">${estimatedSalaries(form.seniority).toLocaleString()}/yr</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3 — Services */}
        {step === 3 && (
          <div className="space-y-3">
            <h3 className="text-[14px] font-bold text-black mb-3">Services you need</h3>
            {SERVICES.map(s => (
              <Checkbox key={s.id} checked={form.services.includes(s.id)}
                onChange={() => { setShowErrors(false); setForm({ ...form, services: toggleService(form.services, s.id) }) }}
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
              <button type="button" key={t.value} role="radio" aria-checked={form.timeline === t.value}
                onClick={() => { setShowErrors(false); setForm({ ...form, timeline: t.value }) }}
                className={`w-full text-left flex items-center justify-between p-4 border rounded-[10px] cursor-pointer transition-colors ${
                  form.timeline === t.value ? 'border-[#2574A7] bg-[#EBF4FA]' : 'border-[#D8E2EA] hover:border-[#2574A7]'
                }`}
              >
                <div>
                  <div className="text-[14px] font-bold text-black">{t.label}</div>
                  <div className="text-[13px] text-[#5A6A7A] font-normal">{t.sub}</div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  form.timeline === t.value ? 'border-[#2574A7] bg-[#2574A7]' : 'border-[#D8E2EA]'
                }`}>
                  {form.timeline === t.value && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step 5 — Contact */}
        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-[14px] font-bold text-black mb-1">Your details</h3>
            <p className="text-[13px] text-[#5A6A7A] font-normal -mt-1 mb-3">To receive your personalized plan.</p>
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Full name</label>
              <input type="text" value={form.contactName}
                onChange={e => setForm({ ...form, contactName: e.target.value })}
                placeholder="Jane Smith"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Company</label>
              <input type="text" value={form.contactCompany}
                onChange={e => setForm({ ...form, contactCompany: e.target.value })}
                placeholder={form.companyName || 'Acme Corp'}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Work email</label>
              <input type="email" value={form.contactEmail}
                onChange={e => setForm({ ...form, contactEmail: e.target.value })}
                placeholder="jane@company.com"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-[12px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">
                Anything else we should know? <span className="font-normal normal-case">(optional)</span>
              </label>
              <textarea value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="e.g. We need Spanish speakers, we have a specific tech stack…"
                rows={3}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {showErrors && missing().length > 0 && (
          <div role="alert" className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-[8px] text-[13px] text-amber-800">
            Please add {missing().join(', ').replace(/, ([^,]*)$/, ' and $1')} to continue.
          </div>
        )}

        {loading && (
          <p className="mt-4 text-[13px] text-[#5A6A7A]" aria-live="polite">
            We’re preparing your plan — this usually takes 20–30 seconds.
          </p>
        )}

        {error && (
          <div role="alert" className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[8px] text-[13px] text-red-600">
            {error}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="pt-5 mt-4 border-t border-[#D8E2EA] flex justify-between items-center">
        {step > 1 ? (
          <button type="button" onClick={goBack} disabled={loading}
            className="text-[14px] text-[#5A6A7A] hover:text-black transition-colors font-medium"
          >
            ← Back
          </button>
        ) : <div />}

        {step < TOTAL_STEPS ? (
          <button type="button" onClick={goNext}
            className={`bg-[#2574A7] text-white font-bold text-[14px] px-6 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors ${missing().length ? 'opacity-60' : ''}`}
          >
            Continue →
          </button>
        ) : (
          <button type="button" onClick={handleSubmit} disabled={loading}
            className={`bg-[#2574A7] text-white font-bold text-[14px] px-6 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors disabled:cursor-wait flex items-center gap-2 ${missing().length && !loading ? 'opacity-60' : ''}`}
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
