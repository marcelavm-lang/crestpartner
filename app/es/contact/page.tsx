'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'
import { trackEvent } from '@/lib/analytics'
import { BookCallLink, WhatsAppLink } from '@/components/CtaLinks'

const trustSignals = [
  {
    icon: '⏱',
    title: 'Respuesta en menos de 24 horas',
    text: 'Siempre de un fundador, nunca de un vendedor.',
  },
  {
    icon: '💬',
    title: 'Una conversación real',
    text: 'Le preguntaremos por su equipo, su stack tecnológico y sus objetivos.',
  },
  {
    icon: '📋',
    title: 'Un plan de expansión a la medida',
    text: 'Específico para su empresa, no una plantilla.',
  },
  {
    icon: '🤝',
    title: 'Sin compromiso',
    text: 'Solo la información que necesita para tomar una decisión.',
  },
]

const buildOptions = [
  { value: '', label: '¿Qué busca construir?' },
  { value: 'launch', label: 'Lanzar desde cero' },
  { value: 'build', label: 'Construir un equipo tecnológico' },
  { value: 'operate', label: 'Delegar el back office' },
  { value: 'all', label: 'Todo lo anterior' },
  { value: 'notsure', label: 'Aún no lo sé' },
]

export default function ContactPageEs() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    goal: '',
    message: '',
    website: '', // honeypot
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setFailed(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.status === 200) {
        trackEvent('contact_form_submitted', { goal: form.goal })
        setSubmitted(true)
      } else {
        setFailed(true)
      }
    } catch {
      setFailed(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ── Left column ── */}
          <div>
            <p className="eyebrow mb-5">Empecemos</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-5 max-w-sm">
              Hablemos de cómo construir su equipo en Costa Rica.
            </h1>
            <p className="text-[16px] text-[#3E4C59] font-normal mb-10">
              Cuéntenos sobre su empresa — le responderemos en menos de 24 horas. Sin compromiso.
            </p>

            {/* Contact option cards */}
            <div className="space-y-3 mb-10">
              {/* Agende una llamada de 30 min */}
              <BookCallLink className="border border-[#D8E2EA] rounded-[10px] p-5 flex items-start gap-4 hover:border-[#2574A7] transition-colors cursor-pointer group">
                <div className="w-9 h-9 rounded-[8px] bg-[#EBF4FA] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="12" rx="2" stroke="#2574A7" strokeWidth="1.5" />
                    <path d="M5 1v4M11 1v4M1 7h14" stroke="#2574A7" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black group-hover:text-[#2574A7] transition-colors">Agende una llamada de 30 min</p>
                  <p className="text-[13px] text-[#5A6A7A] font-normal">Elija el horario que mejor le convenga</p>
                </div>
                <span className="ml-auto text-[#5A6A7A] group-hover:text-[#2574A7] transition-colors">→</span>
              </BookCallLink>

              {/* WhatsApp */}
              <WhatsAppLink className="border border-[#D8E2EA] rounded-[10px] p-5 flex items-start gap-4 hover:border-[#00A79D] transition-colors group block">
                <div className="w-9 h-9 rounded-[8px] bg-[#E6F7F6] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C4.13 1 1 4.13 1 8c0 1.25.33 2.43.9 3.44L1 15l3.65-.87A7 7 0 1 0 8 1z" stroke="#00A79D" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M6 6.5c.2.6.6 1.2 1.1 1.7.5.5 1.1.9 1.7 1.1l.7-.7c.2-.2.5-.2.7-.1l1.5.6c.2.1.3.3.3.5v1.2c0 .3-.2.5-.5.5C7.1 11.3 4.7 8.9 4.7 5.7c0-.3.2-.5.5-.5h1.2c.2 0 .4.1.5.3l.6 1.5c.1.2.1.5-.1.7l-.7.7-.7.1z" fill="#00A79D" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black group-hover:text-[#00A79D] transition-colors">WhatsApp</p>
                  <p className="text-[13px] text-[#5A6A7A] font-normal">{SITE.whatsappDisplay}</p>
                </div>
                <span className="ml-auto text-[#5A6A7A] group-hover:text-[#00A79D] transition-colors">→</span>
              </WhatsAppLink>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                className="border border-[#D8E2EA] rounded-[10px] p-5 flex items-start gap-4 hover:border-[#2574A7] transition-colors group block"
              >
                <div className="w-9 h-9 rounded-[8px] bg-[#EBF4FA] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#2574A7" strokeWidth="1.5" />
                    <path d="M1 5l7 5 7-5" stroke="#2574A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black group-hover:text-[#2574A7] transition-colors">Correo electrónico</p>
                  <p className="text-[13px] text-[#5A6A7A] font-normal">{SITE.email}</p>
                </div>
                <span className="ml-auto text-[#5A6A7A] group-hover:text-[#2574A7] transition-colors">→</span>
              </a>

              {/* Office */}
              <div className="border border-[#D8E2EA] rounded-[10px] p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-[8px] bg-[#EBF4FA] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 15s5-4.6 5-8.5A5 5 0 0 0 3 6.5C3 10.4 8 15 8 15z" stroke="#2574A7" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="8" cy="6.5" r="1.8" stroke="#2574A7" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Oficina</p>
                  <p className="text-[13px] text-[#5A6A7A] font-normal">{SITE.address.display}</p>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="space-y-4">
              {trustSignals.map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-2 shrink-0" />
                  <div>
                    <p className="text-[14px] font-bold text-black">{t.title}</p>
                    <p className="text-[13px] text-[#5A6A7A] font-normal">{t.text}</p>
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
                <h2 className="text-[22px] font-bold text-black mb-2">¡Mensaje enviado!</h2>
                <p className="text-[14px] text-[#5A6A7A] font-normal">
                  Le responderemos en menos de 24 horas — un fundador, no un vendedor.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-[20px] font-bold text-black mb-6">Cuéntenos sobre su empresa</h2>
                <form onSubmit={handleSubmit} className="space-y-4 relative">
                  {/* Honeypot — hidden from people; bots fill it in */}
                  <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                    <label>
                      Website
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
                    </label>
                  </div>

                  {/* First + Last name */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[12px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                        placeholder="María"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                        placeholder="Rodríguez"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[12px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                      placeholder="Empresa S.A."
                    />
                  </div>

                  {/* Work email */}
                  <div>
                    <label className="block text-[12px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      Correo corporativo
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors"
                      placeholder="maria@empresa.com"
                    />
                  </div>

                  {/* What are you looking to build */}
                  <div>
                    <label className="block text-[12px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      ¿Qué busca construir?
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
                    <label className="block text-[12px] font-bold tracking-wide text-[#5A6A7A] mb-1.5">
                      Cuéntenos más
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={5000}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-[#D8E2EA] rounded-[8px] px-3.5 py-2.5 text-[14px] text-black bg-white focus:outline-none focus:border-[#2574A7] transition-colors resize-none"
                      placeholder="Cuéntenos sobre el tamaño de su equipo, su stack tecnológico, sus plazos..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    aria-busy={sending}
                    className="w-full bg-[#2574A7] text-white font-bold text-[14px] tracking-widest py-3.5 rounded-[8px] hover:bg-[#1f6391] transition-colors uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Enviando…' : 'Enviar mensaje →'}
                  </button>

                  {failed && (
                    <p role="alert" className="text-[14px] text-[#B42318] bg-[#FEF3F2] border border-[#FECDCA] rounded-[8px] px-4 py-3">
                      Algo salió mal. Escríbanos a{' '}
                      <a href={`mailto:${SITE.email}`} className="font-bold underline">{SITE.email}</a>{' '}
                      o envíenos un mensaje por{' '}
                      <WhatsAppLink className="font-bold underline">WhatsApp</WhatsAppLink>.
                    </p>
                  )}

                  <p className="text-[12px] text-center text-[#5A6A7A] font-normal">
                    Un fundador responde en menos de 24 horas — nunca un vendedor.
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
