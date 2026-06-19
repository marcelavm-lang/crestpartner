'use client'

import React, { useState } from 'react'
import Link from 'next/link'
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
    <h3 className="text-[13px] font-bold text-gray-900 mt-4 mb-1">{children}</h3>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  p: ({ children }: any) => (
    <p className="text-[13px] text-[#5A6A7A] leading-relaxed mb-3 font-light">{children}</p>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  li: ({ children }: any) => (
    <li className="text-[13px] text-[#5A6A7A] leading-relaxed mb-1 font-light">{children}</li>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ul: ({ children }: any) => <ul className="list-disc pl-5 mb-3 space-y-0.5">{children}</ul>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  strong: ({ children }: any) => <strong className="font-bold text-black">{children}</strong>,
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

// avg = (baseMin + baseMax) / 2 * 1.34 * 12  →  annual all-in cost (incl. 34% CR social charges)
const POSITION_LEVELS = [
  // Engineering
  { key: 'devMgr',      label: 'Engineering Manager',          group: 'Engineering',        years: '10+ yrs',  annualRange: '$112,560 – $160,800', avg: 136680, color: 'text-[#D4890A]' },
  { key: 'srLead',      label: 'Staff Engineer',               group: 'Engineering',        years: '5–10 yrs', annualRange: '$80,400 – $112,560',  avg: 96480,  color: 'text-[#6C5CE7]' },
  { key: 'techLead',    label: 'Tech Lead',                    group: 'Engineering',        years: '3–5 yrs',  annualRange: '$64,320 – $96,480',   avg: 80400,  color: 'text-[#2574A7]' },
  { key: 'srDev',       label: 'Senior Software Engineer',     group: 'Engineering',        years: '5+ yrs',   annualRange: '$64,320 – $104,520',  avg: 84420,  color: 'text-[#00A79D]' },
  { key: 'midDev',      label: 'Mid-Level Software Engineer',  group: 'Engineering',        years: '2–4 yrs',  annualRange: '$33,768 – $56,280',   avg: 45024,  color: 'text-[#2574A7]' },
  { key: 'jrDev',       label: 'Junior Software Engineer',     group: 'Engineering',        years: '1–2 yrs',  annualRange: '$20,904 – $32,160',   avg: 26532,  color: 'text-[#5A6A7A]' },
  { key: 'intern',      label: 'Software Engineering Intern',  group: 'Engineering',        years: '0–1 yrs',  annualRange: '$14,472 – $17,688',   avg: 16080,  color: 'text-[#5A6A7A]' },
  // QA
  { key: 'srQaMgr',     label: 'Senior QA Manager',            group: 'QA',                years: '10+ yrs',  annualRange: '$64,320 – $88,440',   avg: 76380,  color: 'text-[#D4890A]' },
  { key: 'srQa',        label: 'Senior QA Engineer',           group: 'QA',                years: '5+ yrs',   annualRange: '$45,024 – $61,104',   avg: 53064,  color: 'text-[#00A79D]' },
  { key: 'midQa',       label: 'Mid-Level QA Engineer',        group: 'QA',                years: '2–4 yrs',  annualRange: '$32,160 – $43,416',   avg: 37836,  color: 'text-[#2574A7]' },
  { key: 'jrQa',        label: 'Junior QA Engineer',           group: 'QA',                years: '0–2 yrs',  annualRange: '$16,080 – $30,552',   avg: 23316,  color: 'text-[#5A6A7A]' },
  // Data Engineering
  { key: 'srDataEng',   label: 'Senior Data Engineer',         group: 'Data Engineering',  years: '5+ yrs',   annualRange: '$64,320 – $104,520',  avg: 84420,  color: 'text-[#6C5CE7]' },
  { key: 'midDataEng',  label: 'Mid-Level Data Engineer',      group: 'Data Engineering',  years: '2–4 yrs',  annualRange: '$40,200 – $64,320',   avg: 52260,  color: 'text-[#6C5CE7]' },
  { key: 'jrDataEng',   label: 'Junior Data Engineer',         group: 'Data Engineering',  years: '1–2 yrs',  annualRange: '$24,120 – $40,200',   avg: 32160,  color: 'text-[#6C5CE7]' },
  // DevOps & Cloud
  { key: 'srDevOps',    label: 'Senior DevOps/Cloud Engineer', group: 'DevOps & Cloud',    years: '5+ yrs',   annualRange: '$64,320 – $112,560',  avg: 88440,  color: 'text-[#27AE60]' },
  { key: 'midDevOps',   label: 'Mid-Level DevOps/Cloud Eng.',  group: 'DevOps & Cloud',    years: '2–4 yrs',  annualRange: '$40,200 – $72,360',   avg: 56280,  color: 'text-[#27AE60]' },
  { key: 'jrDevOps',    label: 'Junior DevOps/Cloud Engineer', group: 'DevOps & Cloud',    years: '1–2 yrs',  annualRange: '$24,120 – $40,200',   avg: 32160,  color: 'text-[#27AE60]' },
  // Product Management
  { key: 'srPM',        label: 'Senior Product Manager',       group: 'Product',           years: '5+ yrs',   annualRange: '$64,320 – $104,520',  avg: 84420,  color: 'text-[#D4890A]' },
  { key: 'pm',          label: 'Product Manager',              group: 'Product',           years: '2–5 yrs',  annualRange: '$40,200 – $64,320',   avg: 52260,  color: 'text-[#D4890A]' },
  { key: 'assocPM',     label: 'Associate Product Manager',    group: 'Product',           years: '0–2 yrs',  annualRange: '$28,944 – $45,024',   avg: 36984,  color: 'text-[#D4890A]' },
  // UI/UX Design
  { key: 'srUX',        label: 'Senior UI/UX Designer',        group: 'UI/UX Design',      years: '5+ yrs',   annualRange: '$48,240 – $80,400',   avg: 64320,  color: 'text-[#E91E8C]' },
  { key: 'midUX',       label: 'Mid-Level UI/UX Designer',     group: 'UI/UX Design',      years: '2–4 yrs',  annualRange: '$32,160 – $56,280',   avg: 44220,  color: 'text-[#E91E8C]' },
  { key: 'jrUX',        label: 'Junior UI/UX Designer',        group: 'UI/UX Design',      years: '0–2 yrs',  annualRange: '$19,296 – $32,160',   avg: 25728,  color: 'text-[#E91E8C]' },
  // Data Science
  { key: 'srDS',        label: 'Senior Data Scientist',        group: 'Data Science',      years: '5+ yrs',   annualRange: '$72,360 – $112,560',  avg: 92460,  color: 'text-[#E24B4A]' },
  { key: 'ds',          label: 'Data Scientist',               group: 'Data Science',      years: '2–5 yrs',  annualRange: '$45,024 – $72,360',   avg: 58692,  color: 'text-[#E24B4A]' },
  { key: 'jrDS',        label: 'Junior Data Scientist',        group: 'Data Science',      years: '1–2 yrs',  annualRange: '$28,944 – $45,024',   avg: 36984,  color: 'text-[#E24B4A]' },
  // Business Analysis
  { key: 'srBA',        label: 'Senior Business Analyst',      group: 'Business Analysis', years: '5+ yrs',   annualRange: '$48,240 – $72,360',   avg: 60300,  color: 'text-[#5A6A7A]' },
  { key: 'ba',          label: 'Business Analyst',             group: 'Business Analysis', years: '2–4 yrs',  annualRange: '$32,160 – $48,240',   avg: 40200,  color: 'text-[#5A6A7A]' },
  { key: 'jrBA',        label: 'Junior Business Analyst',      group: 'Business Analysis', years: '0–2 yrs',  annualRange: '$19,296 – $32,160',   avg: 25728,  color: 'text-[#5A6A7A]' },
] as const

const GROUPS = ['Engineering', 'QA', 'Data Engineering', 'DevOps & Cloud', 'Product', 'UI/UX Design', 'Data Science', 'Business Analysis'] as const
const GROUP_COLORS: Record<string, string> = {
  'Engineering':        'text-[#2574A7]',
  'QA':                'text-[#00A79D]',
  'Data Engineering':  'text-[#6C5CE7]',
  'DevOps & Cloud':    'text-[#27AE60]',
  'Product':           'text-[#D4890A]',
  'UI/UX Design':      'text-[#E91E8C]',
  'Data Science':      'text-[#E24B4A]',
  'Business Analysis': 'text-[#5A6A7A]',
}

type PositionKey = typeof POSITION_LEVELS[number]['key']
type PositionCount = { [K in PositionKey]: number }

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

const EMPTY_POSITIONS: PositionCount = {
  devMgr: 0, srLead: 0, techLead: 0, srDev: 0, midDev: 0, jrDev: 0, intern: 0,
  srQaMgr: 0, srQa: 0, midQa: 0, jrQa: 0,
  srDataEng: 0, midDataEng: 0, jrDataEng: 0,
  srDevOps: 0, midDevOps: 0, jrDevOps: 0,
  srPM: 0, pm: 0, assocPM: 0,
  srUX: 0, midUX: 0, jrUX: 0,
  srDS: 0, ds: 0, jrDS: 0,
  srBA: 0, ba: 0, jrBA: 0,
}

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

function totalHeadcount(s: PositionCount): number {
  return (Object.values(s) as number[]).reduce((a, b) => a + b, 0)
}

function estimatedSalaries(s: PositionCount): number {
  return POSITION_LEVELS.reduce((total, level) => {
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

// ── Counter row ─────────────────────────────────────────────────────────────
function CounterRow({ label, years, color, value, onDec, onInc }: {
  label: string; years: string; color: string; value: number
  onDec: () => void; onInc: () => void
}) {
  return (
    <div className="flex items-center justify-between p-3 border border-[#D8E2EA] rounded-[8px] bg-white">
      <div>
        <span className={`text-[13px] font-bold ${color}`}>{label}</span>
        <span className="text-[11px] text-[#5A6A7A] font-light ml-2">{years}</span>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={onDec}
          className="w-7 h-7 rounded-full border border-[#D8E2EA] flex items-center justify-center text-[#5A6A7A] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors text-lg leading-none"
        >−</button>
        <span className="text-[15px] font-bold text-black w-5 text-center">{value}</span>
        <button type="button" onClick={onInc}
          className="w-7 h-7 rounded-full border border-[#D8E2EA] flex items-center justify-center text-[#5A6A7A] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors text-lg leading-none"
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

  const canNext = (): boolean => {
    if (step === 1) return !!(form.companyName && form.industry && form.usTeamSize)
    if (step === 2) return form.profiles.length > 0 && totalHeadcount(form.seniority) > 0
    if (step === 3) return form.services.length > 0
    if (step === 4) return !!form.timeline
    if (step === 5) return !!(form.contactName && form.contactEmail)
    return true
  }

  function adjustPosition(key: PositionKey, delta: number) {
    setForm(f => ({
      ...f,
      seniority: { ...f.seniority, [key]: Math.max(0, f.seniority[key] + delta) }
    }))
  }

  async function handleSubmit() {
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
            <h2 className="text-xl font-bold text-black leading-snug">Here&apos;s what your Costa Rica operation looks like</h2>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-[#5A6A7A] hover:text-black text-xl leading-none ml-4 mt-1 shrink-0">✕</button>
          )}
        </div>

        {costs && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-blue-600">${costs.setup.toLocaleString()}</div>
              <div className="text-xs text-gray-500 mt-1">One-time setup</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-blue-600">${costs.managementFee.toLocaleString()}/yr</div>
              <div className="text-xs text-gray-500 mt-1">Management fee</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-teal-500">${costs.recruitingFee.toLocaleString()}</div>
              <div className="text-xs text-gray-500 mt-1">Recruiting fees</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-blue-600">${costs.totalSalaries.toLocaleString()}</div>
              <div className="text-xs text-gray-500 mt-1">Est. total comp</div>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center col-span-2 md:col-span-1">
              <div className="text-lg font-bold text-teal-600">${costs.totalYear1.toLocaleString()}</div>
              <div className="text-xs text-teal-600 mt-1 font-bold">Total Year 1</div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto border-t border-[#F4F7FA] pt-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {plan}
          </ReactMarkdown>
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

        {/* Step 2 — Profiles + Team composition */}
        {step === 2 && (
          <div className="space-y-5">
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
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1">Team composition &amp; headcount</label>
              <p className="text-[11px] text-[#5A6A7A] font-light mb-3">Select how many professionals you need at each level.</p>

              {/* Salary reference table — all groups */}
              <div className="bg-[#F4F7FA] rounded-[10px] p-4 mb-4 border border-[#D8E2EA]">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-3">Salary reference · Costa Rica (USD/year, all social charges included)</p>
                {GROUPS.map((group, gi) => (
                  <div key={group} className={gi < GROUPS.length - 1 ? 'mb-4' : ''}>
                    <p className={`text-[9px] font-bold tracking-widest uppercase ${GROUP_COLORS[group]} mb-1.5`}>{group}</p>
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="text-[#5A6A7A] border-b border-[#D8E2EA]">
                          <th className="text-left font-bold pb-1.5 pr-2">Position</th>
                          <th className="text-left font-bold pb-1.5 pr-2">Exp.</th>
                          <th className="text-right font-bold pb-1.5">Annual (all-in)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {POSITION_LEVELS.filter(l => l.group === group).map(l => (
                          <tr key={l.key} className="border-b border-[#EAEEF2] last:border-0">
                            <td className={`py-1.5 pr-2 font-bold ${l.color}`}>{l.label}</td>
                            <td className="py-1.5 pr-2 text-[#5A6A7A] whitespace-nowrap">{l.years}</td>
                            <td className="py-1.5 text-right font-bold text-black whitespace-nowrap">{l.annualRange}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>

              {/* Counters — all groups */}
              {GROUPS.map(group => (
                <div key={group} className="mb-4">
                  <p className={`text-[10px] font-bold tracking-widest uppercase ${GROUP_COLORS[group]} mb-2`}>{group}</p>
                  <div className="space-y-2">
                    {POSITION_LEVELS.filter(l => l.group === group).map(l => (
                      <CounterRow
                        key={l.key}
                        label={l.label}
                        years={l.years}
                        color={l.color}
                        value={form.seniority[l.key as PositionKey]}
                        onDec={() => adjustPosition(l.key as PositionKey, -1)}
                        onInc={() => adjustPosition(l.key as PositionKey, 1)}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Totals */}
              {totalHeadcount(form.seniority) > 0 && (
                <div className="mt-2 pt-3 border-t border-[#D8E2EA] space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] font-bold text-[#5A6A7A]">Total headcount</span>
                    <span className="text-[20px] font-bold text-[#2574A7]">{totalHeadcount(form.seniority)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-[#5A6A7A] font-light">Est. annual cost (incl. 34% CR social charges)</span>
                    <span className="text-[13px] font-bold text-[#00A79D]">${estimatedSalaries(form.seniority).toLocaleString()}/yr</span>
                  </div>
                </div>
              )}
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
              <label className="text-[11px] font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">
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
