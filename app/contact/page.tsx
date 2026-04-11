'use client'

import { useState } from 'react'

const trustSignals = [
  {
    icon: '⏱',
    title: 'Response within 24 hours',
    text: 'Always from a founder, never from a sales rep.',
  },
  {
    icon: '💬',
    title: 'A real conversation',
    text: 'We\'ll ask about your team, your stack and your goals.',
  },
  {
    icon: '📋',
    title: 'A custom expansion plan',
    text: 'Specific to your company, not a template.',
  },
  {
    icon: '🤝',
    title: 'No commitment required',
    text: 'Just the information you need to make a decision.',
  },
]

const buildOptions = [
  { value: '', label: 'What are you looking to build?' },
  { value: 'launch', label: 'Launch from scratch' },
  { value: 'build', label: 'Build a tech team' },
  { value: 'operate', label: 'Delegate back office' },
  { value: 'all', label: 'All of the above' },
  { value: 'notsure', label: 'Not sure yet' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    goal: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ── Left column ── */}
          <div>
            <p className="eyebrow mb-5">Get started</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-5 max-w-sm">
              Let's talk about building your team in Costa Rica.
            </h1>
            <p className="text-[16px] text-[#5A6A7A] font-light mb-10">
              Tell us about your company — we'll get back to you within 24 hours. No commitment required.
            </p>

            {/* Contact option cards */}
            <div className="space-y-3 mb-10">
              {/* Schedule a call */}
              <div className="border border-[#D8E2EA] rounded-[10px] p-5 flex items-start gap-4 hover:border-[#2574A7] transition-colors cursor-pointer group">
                <div className="w-9 h-9 rounded-[8px] bg-[#EBF4FA] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="12" rx="2" stroke="#2574A7" strokeWidth="1.5" />
                    <path d="M5 1v4M11 1v4M1 7h14" stroke="#2574A7" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black group-hover:text-[#2574A7] transition-colors">Schedule a call</p>
                  <p className="text-[12px] text-[#5A6A7A] font-light">Pick a time that works for you</p>
                </div>
                <span className="ml-auto text-[#5A6A7A] group-hover:text-[#2574A7] transition-colors">→</span>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/50688911344"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D8E2EA] rounded-[10px] p-5 flex items-start gap-4 hover:border-[#00A79D] transition-colors group block"
              >
                <div className="w-9 h-9 rounded-[8px] bg-[#E6F7F6] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C4.13 1 1 4.13 1 8c0 1.25.33 2.43.9 3.44L1 15l3.65-.87A7 7 0 1 0 8 1z" stroke="#00A79D" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M6 6.5c.2.6.6 1.2 1.1 1.7.5.5 1.1.9 1.7 1.1l.7-.7c.2-.2.5-.2.7-.1l1.5.6c.2.1.3.3.3.5v1.2c0 .3-.2.5-.5.5C7.1 11.3 4.7 8.9 4.7 5.7c0-.3.2-.5.5-.5h1.2c.2 0 .4.1.5.3l.6 1.5c.1.2.1.5-.1.7l-.7.7-.7.1z" fill="#00A79D" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black group-hover:text-[#00A79D] transition-colors">WhatsApp</p>
                  <p className="text-[12px] text-[#5A6A7A] font-light">+506 8891-3444</p>
                </div>
                <span className="ml-auto text-[#5A6A7A] group-hover:text-[#00A79D] transition-colors">→</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@techcollective.com"
                className="border border-[#D8E2EA] rounded-[10px] p-5 flex items-start gap-4 hover:border-[#2574A7] transition-colors group block"
              >
                <div className="w-9 h-9 rounded-[8px] bg-[#EBF4FA] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#2574A7" strokeWidth="1.5" />
                    <path d="M1 5l7 5 7-5" stroke="#2574A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black group-hover:text-[#2574A7] transition-colors">Email</p>
                  <p className="text-[12px] text-[#5A6A7A] font-light">info@techcollective.com</p>
                </div>
                <span className="ml-auto text-[#5A6A7A] group-hover:text-[#2574A7] transition-colors">→</span>
              </a>
            </div>

            {/* Trust signals */}
            <div className="space-y-4">
              {trustSignals.map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-2 shrink-0" />
                  <div>
                    <p className="text-[13px] font-bold text-black">{t.title}</p>
                    <p className="text-[12px] text-[#5A6A7A] font-light">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Form ── */}
          <div className="bg-[#F4F7FA] rounded-[12px] p-8 border border-[#D8E2EA]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[#E6F7F6] flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path d="M2 9L9 16L22 2" stroke="#00A79D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[22px] font-bold text-black mb-2">Message sent!</h2>
                <p className="text-[14px] text-[#5A6A7A] font-light">
                  We'll get back to you within 24 hours — from a founder, not a sales rep.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-[20px] font-bold text-black mb-6">Tell us about your company</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First + Last name */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                        placeholder="Marcela"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                        placeholder="Villalta"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>

                  {/* Work email */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      Work email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                      placeholder="marcela@company.com"
                    />
                  </div>

                  {/* What are you looking to build */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      What are you looking to build?
                    </label>
                    <select
                      name="goal"
                      required
                      value={form.goal}
                      onChange={handleChange}
                      className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors appearance-none"
                    >
                      {buildOptions.map((o) => (
                        <option key={o.value} value={o.value} disabled={o.value === ''}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tell us more */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      Tell us more
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors resize-none"
                      placeholder="Tell us about your team size, tech stack, timeline..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#2574A7] text-white font-bold text-[13px] tracking-widest py-3.5 rounded-[8px] hover:bg-[#1f6391] transition-colors uppercase"
                  >
                    Send message →
                  </button>

                  <p className="text-[11px] text-center text-[#5A6A7A] font-light">
                    We respond within 24 hours — always from a founder, never from a sales rep.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
