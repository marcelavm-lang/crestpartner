'use client'

import { useState } from 'react'

function MarkdownRenderer({ text }: { text: string }) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let listBuffer: string[] = []

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc pl-5 space-y-1 mb-3">
          {listBuffer.map((item, i) => (
            <li key={i} className="text-[13px] text-[#5A6A7A] font-light leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      )
      listBuffer = []
    }
  }

  const renderInline = (str: string) => {
    const parts = str.split(/(\*\*[^*]+\*\*)/)
    return parts.map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={i} className="font-bold text-black">{part.slice(2, -2)}</strong>
        : part
    )
  }

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      flushList()
      elements.push(<h2 key={i} className="text-[15px] font-bold text-black mt-5 mb-2">{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      flushList()
      elements.push(<h3 key={i} className="text-[13px] font-bold text-black mt-4 mb-1.5">{line.slice(4)}</h3>)
    } else if (line.match(/^[-*] /)) {
      listBuffer.push(line.slice(2))
    } else if (line.trim() === '') {
      flushList()
    } else {
      flushList()
      elements.push(<p key={i} className="text-[13px] text-[#5A6A7A] font-light leading-relaxed mb-2">{renderInline(line)}</p>)
    }
  })
  flushList()
  return <>{elements}</>
}

const INDUSTRIES = ['Tech', 'Data & Analytics', 'AI', 'Cloud', 'SaaS', 'Other']
const PROFILES = [
  'Software Engineers',
  'Data Engineers',
  'DevOps & Cloud',
  'QA Engineers',
  'Product Managers',
  'Engineering Leadership',
  'Other',
]
const SERVICES = [
  'Launch legal entity',
  'Build the team',
  'Run back office',
  'All of the above',
]
const TIMELINES = [
  { value: 'ASAP — 30 days', label: 'ASAP', sub: '30 days' },
  { value: '3 months', label: '3 months', sub: 'Planned expansion' },
  { value: '6 months', label: '6 months', sub: 'Strategic timeline' },
  { value: 'Still exploring', label: 'Still exploring', sub: 'Just researching' },
]

interface FormData {
  companyName: string
  industry: string
  teamSize: string
  profiles: string[]
  headcount: number
  services: string[]
  timeline: string
  contactName: string
  contactCompany: string
  contactEmail: string
}

const initial: FormData = {
  companyName: '',
  industry: '',
  teamSize: '',
  profiles: [],
  headcount: 5,
  services: [],
  timeline: '',
  contactName: '',
  contactCompany: '',
  contactEmail: '',
}

function StepDot({ n, current }: { n: number; current: number }) {
  const done = n < current
  const active = n === current
  return (
    <div className="flex items-center gap-1">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
          done
            ? 'bg-[#00A79D] text-white'
            : active
            ? 'bg-[#2574A7] text-white'
            : 'bg-[#F4F7FA] text-[#5A6A7A] border border-[#D8E2EA]'
        }`}
      >
        {done ? '✓' : n}
      </div>
    </div>
  )
}

export default function ExpansionPlanForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(initial)
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const totalSteps = 5

  function toggle(arr: string[], val: string) {
    return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
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
          teamSize: form.teamSize,
          profiles: form.profiles,
          headcount: form.headcount,
          services: form.services,
          timeline: form.timeline,
          contactName: form.contactName,
          contactEmail: form.contactEmail,
        }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setPlan(data.plan)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const canNext = () => {
    if (step === 1) return form.companyName && form.industry && form.teamSize
    if (step === 2) return form.profiles.length > 0
    if (step === 3) return form.services.length > 0
    if (step === 4) return form.timeline
    if (step === 5) return form.contactName && form.contactEmail
    return true
  }

  if (plan) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-1">Your expansion plan</p>
            <h2 className="text-xl font-bold text-black">Here's what your Costa Rica operation looks like</h2>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-[#5A6A7A] hover:text-black text-xl leading-none ml-4">✕</button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="text-[#1a1a1a]">
            <MarkdownRenderer text={plan} />
          </div>
        </div>
        <div className="pt-5 mt-5 border-t border-[#D8E2EA] flex gap-3">
          <a
            href="/contact"
            className="flex-1 bg-[#2574A7] text-white font-bold text-[13px] py-3 rounded-[8px] text-center hover:bg-[#1f6391] transition-colors"
          >
            Talk to our team →
          </a>
          <button
            onClick={() => { setPlan(null); setStep(1); setForm(initial) }}
            className="px-4 py-3 border border-[#D8E2EA] text-[#5A6A7A] text-[13px] rounded-[8px] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors"
          >
            Start over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-1">Expansion Plan Generator</p>
          <h2 className="text-xl font-bold text-black leading-snug">Build your Costa Rica expansion plan</h2>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[#5A6A7A] hover:text-black text-xl leading-none ml-4 mt-1">✕</button>
        )}
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <StepDot n={i + 1} current={step} />
            {i < totalSteps - 1 && (
              <div className={`w-8 h-px mx-1 ${i + 1 < step ? 'bg-[#00A79D]' : 'bg-[#D8E2EA]'}`} />
            )}
          </div>
        ))}
        <span className="text-xs text-[#5A6A7A] ml-2">Step {step} of {totalSteps}</span>
      </div>

      {/* Step content */}
      <div className="flex-1 overflow-y-auto">

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-black mb-4">Company information</h3>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Company name</label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                placeholder="e.g. Acme Data Inc."
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Industry</label>
              <select
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors bg-white"
              >
                <option value="">Select industry...</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Current U.S. team size</label>
              <input
                type="number"
                value={form.teamSize}
                onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                placeholder="e.g. 25"
                min="1"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-5">
            <h3 className="text-[15px] font-bold text-black mb-4">The team you want to build</h3>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-3">Profiles needed</label>
              <div className="space-y-2">
                {PROFILES.map((p) => (
                  <label key={p} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      onClick={() => setForm({ ...form, profiles: toggle(form.profiles, p) })}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors cursor-pointer ${
                        form.profiles.includes(p)
                          ? 'bg-[#2574A7] border-[#2574A7]'
                          : 'border-[#D8E2EA] group-hover:border-[#2574A7]'
                      }`}
                    >
                      {form.profiles.includes(p) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[14px] text-black font-light">{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-3">
                Number of people: <span className="text-[#2574A7]">{form.headcount}</span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={form.headcount}
                onChange={(e) => setForm({ ...form, headcount: Number(e.target.value) })}
                className="w-full accent-[#2574A7]"
              />
              <div className="flex justify-between text-xs text-[#5A6A7A] mt-1">
                <span>1</span><span>25</span><span>50</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h3 className="text-[15px] font-bold text-black mb-4">Services you need</h3>
            <div className="space-y-3">
              {SERVICES.map((s) => (
                <label
                  key={s}
                  onClick={() => setForm({ ...form, services: toggle(form.services, s) })}
                  className={`flex items-center gap-4 p-4 border rounded-[10px] cursor-pointer transition-colors ${
                    form.services.includes(s)
                      ? 'border-[#2574A7] bg-[#EBF4FA]'
                      : 'border-[#D8E2EA] hover:border-[#2574A7]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                      form.services.includes(s) ? 'bg-[#2574A7] border-[#2574A7]' : 'border-[#D8E2EA]'
                    }`}
                  >
                    {form.services.includes(s) && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[14px] text-black font-medium">{s}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <h3 className="text-[15px] font-bold text-black mb-4">Timeline</h3>
            <div className="space-y-3">
              {TIMELINES.map((t) => (
                <label
                  key={t.value}
                  onClick={() => setForm({ ...form, timeline: t.value })}
                  className={`flex items-center justify-between p-4 border rounded-[10px] cursor-pointer transition-colors ${
                    form.timeline === t.value
                      ? 'border-[#2574A7] bg-[#EBF4FA]'
                      : 'border-[#D8E2EA] hover:border-[#2574A7]'
                  }`}
                >
                  <div>
                    <div className="text-[14px] font-bold text-black">{t.label}</div>
                    <div className="text-[12px] text-[#5A6A7A] font-light">{t.sub}</div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      form.timeline === t.value ? 'border-[#2574A7] bg-[#2574A7]' : 'border-[#D8E2EA]'
                    }`}
                  >
                    {form.timeline === t.value && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-black mb-4">Contact details</h3>
            <p className="text-[13px] text-[#5A6A7A] font-light -mt-2 mb-4">We'll send your personalized plan to this email.</p>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Your name</label>
              <input
                type="text"
                value={form.contactName}
                onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                placeholder="Jane Smith"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Company</label>
              <input
                type="text"
                value={form.contactCompany}
                onChange={(e) => setForm({ ...form, contactCompany: e.target.value })}
                placeholder="Acme Corp"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-wide uppercase text-[#5A6A7A] block mb-1.5">Email</label>
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                placeholder="jane@company.com"
                className="w-full border border-[#D8E2EA] rounded-[8px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#2574A7] transition-colors"
              />
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[8px] text-[13px] text-red-600">
            {error}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="pt-5 mt-5 border-t border-[#D8E2EA] flex justify-between items-center">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="text-[13px] text-[#5A6A7A] hover:text-black transition-colors font-medium"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canNext()}
            className="bg-[#2574A7] text-white font-bold text-[13px] px-6 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canNext() || loading}
            className="bg-[#2574A7] text-white font-bold text-[13px] px-6 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating plan...
              </>
            ) : (
              'Generate my plan →'
            )}
          </button>
        )}
      </div>
    </div>
  )
}
