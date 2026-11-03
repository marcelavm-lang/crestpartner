'use client'

import Link from 'next/link'
import ClientVoices from '@/components/ClientVoices'
import { useState } from 'react'
import CompanyLogo from '@/components/CompanyLogo'
import { BookCallLink } from '@/components/CtaLinks'
import { localHref } from '@/lib/i18n'

type Tag = 'all' | 'active' | 'exit' | 'data' | 'cloud' | 'talent'

const filters: { label: string; value: Tag }[] = [
  { label: 'Todos los casos', value: 'all' },
  { label: 'Alianzas activas', value: 'active' },
  { label: 'Con exit', value: 'exit' },
  { label: 'Datos e IA', value: 'data' },
  { label: 'Cloud y DevOps', value: 'cloud' },
  { label: 'Talento', value: 'talent' },
]

const cases = [
  {
    name: 'TARGUSinfo',
    slug: 'targusinfo',
    logo: 'targusinfo' as const,
    period: '2001–2007 · antes de Crest',
    badge: 'Operaciones de datos',
    badgeColor: 'bg-[#F4F7FA] text-[#5A6A7A]',
    tagline: 'El caso que creó el modelo de trabajo',
    stats: 'Más de 200 colaboradores · exit de $650M con Neustar',
    tags: ['exit', 'data'] as Tag[],
  },
  {
    name: 'Infutor (hoy Verisk)',
    slug: 'verisk',
    logo: 'verisk' as const,
    period: '2007–2014',
    badge: 'Identidad del consumidor',
    badgeColor: 'bg-[#F4F7FA] text-[#5A6A7A]',
    tagline: 'Primera empresa de inteligencia de datos en CR',
    stats: 'Ingresos 55x · exit de $225M',
    tags: ['exit', 'data'] as Tag[],
  },
  {
    name: '66degrees',
    slug: '66degrees',
    logo: '66degrees' as const,
    period: '2014–actualidad',
    badge: 'Cloud y DevOps',
    badgeColor: 'bg-[#E6F7F6] text-[#00A79D]',
    tagline: 'Google Cloud Partner of the Year for AI 2026',
    stats: 'Más de 11 años · <1% de rotación involuntaria',
    tags: ['active', 'cloud'] as Tag[],
  },
  {
    name: 'LTV Co.',
    slug: 'ltv-co',
    logo: 'ltv-co' as const,
    period: '2015–2025',
    badge: 'Datos del consumidor',
    badgeColor: 'bg-[#EBF4FA] text-[#2574A7]',
    tagline: 'La prueba más completa del modelo',
    stats: 'Exit de $400M · GPTW #1 · hub de 120 personas',
    tags: ['exit', 'data'] as Tag[],
  },
  {
    name: 'Think Unlimited',
    slug: 'think-unlimited',
    logo: 'think-unlimited' as const,
    period: '2023–actualidad',
    badge: 'IA y tecnología de ventas',
    badgeColor: 'bg-[#E6F7F6] text-[#00A79D]',
    tagline: 'Producto 100% construido en CR',
    stats: '10 personas · más de 2.5M de leads calificados al año',
    tags: ['active', 'data'] as Tag[],
  },
  {
    name: 'Strategio',
    slug: 'strategio',
    logo: 'strategio' as const,
    period: '2025–actualidad',
    badge: 'Operaciones de talento',
    badgeColor: 'bg-[#E6F7F6] text-[#00A79D]',
    tagline: 'Una empresa de talento que nos confió su propio equipo',
    stats: '8 colaboradores · Vertical de talento',
    tags: ['active', 'talent'] as Tag[],
  },
]

const impactBand = [
  { value: '2006', label: 'Fundación de Crest Partners', highlight: false },
  { value: '$1B+', label: 'Ingresos combinados de las empresas cliente', highlight: true },
  { value: '8–200+', label: 'Rango de tamaño de los equipos', highlight: false },
  { value: '<1%', label: 'Rotación involuntaria promedio', highlight: true },
  { value: 'GPTW', label: 'Certificación Great Place to Work', highlight: false },
]


export default function CaseStudiesPageEs() {
  const [activeFilter, setActiveFilter] = useState<Tag>('all')

  const filtered = cases.filter(
    (c) => activeFilter === 'all' || c.tags.includes(activeFilter)
  )

  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <p className="eyebrow mb-5">Casos de éxito</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-6">
              Algunas empresas empezaron de cero. Ninguna se quedó ahí.
            </h1>
            <p className="text-[16px] text-[#3E4C59] font-normal leading-relaxed">
              De un exit de $225M en datos al Google Cloud Partner of the Year. De 8 personas a más de 200.
              De una sola persona en el país a un exit de $400M. Empresas distintas, industrias distintas, tamaños distintos —
              y en todos los casos: menos del 1% de rotación involuntaria, la certificación Great Place to Work y equipos
              que se volvieron clave en el crecimiento de esas empresas. No son coincidencias. Este es el modelo.
            </p>
          </div>

          {/* Right column — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {impactBand.map((item, i) => (
              <div
                key={i}
                className={`bg-white border border-[#D8E2EA] rounded-[12px] p-6 ${i === impactBand.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <p className={`text-[32px] font-bold leading-none mb-2 ${item.highlight ? 'text-[#00A79D]' : 'text-[#2574A7]'}`}>
                  {item.value}
                </p>
                <p className="text-[13px] text-[#5A6A7A] font-normal leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Case: LTV Co. ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[12px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px]">
                Caso emblemático
              </span>
              <span className="text-[13px] text-[#5A6A7A]">2015–2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-snug">
              De $30M a $400M — con Costa Rica en el centro.
            </h2>
            <p className="text-[16px] text-[#3E4C59] font-normal leading-relaxed mb-8">
              LTV Co. llegó a Costa Rica con una persona y una visión. Diez años después tuvo un exit
              de $400M, con un hub de ingeniería y datos de 120 personas.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Ingresos 13x', 'Certificación GPTW', 'Hub de 120 personas'].map((m) => (
                <span key={m} className="text-[13px] font-bold text-[#2574A7] bg-[#EBF4FA] px-3 py-1.5 rounded-[6px]">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="bg-[#F4F7FA] rounded-[12px] p-8 border border-[#D8E2EA]">
            <div className="bg-white border border-[#D8E2EA] rounded-[10px] p-5 mb-5">
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-3">GPTW</p>
              <p className="text-[14px] text-black font-normal leading-relaxed">
                LTV Co. ocupó el{' '}
                <strong>#1 como Mejor Empresa para Jóvenes Profesionales en CR</strong>
              </p>
            </div>
            <div className="bg-white border border-[#D8E2EA] rounded-[10px] p-5 mb-5">
              <p className="text-[#3E4C59] font-normal italic leading-relaxed mb-3 text-[16px]">
                “Watching her scale that office into the large, thriving organization it is today has been one of my favorite professional and personal experiences.”
              </p>
              <p className="text-[13px] font-bold text-black">— Joshua Levy, CEO and Co-Founder, LTV Co.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '$400M', label: 'exit' },
                { val: '<1%', label: 'rotación involuntaria' },
                { val: '#1', label: 'GPTW' },
                { val: '2 de 2', label: 'oficinas globales en CR' },
              ].map((s) => (
                <div key={s.val} className="bg-white border border-[#D8E2EA] rounded-[8px] p-4">
                  <p className="text-[20px] font-bold text-[#2574A7] leading-none mb-1">{s.val}</p>
                  <p className="text-[12px] text-[#5A6A7A] font-normal">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cases Grid ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`text-[13px] font-bold px-4 py-2 rounded-full border transition-colors ${
                  activeFilter === f.value
                    ? 'bg-[#2574A7] text-white border-[#2574A7]'
                    : 'bg-white text-black border-[#D8E2EA] hover:border-[#2574A7] hover:text-[#2574A7]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filtered.map((c) => (
              <Link key={c.name} href={`/case-studies/${c.slug}`} className="bg-white border border-[#D8E2EA] rounded-[10px] p-7 hover:border-[#2574A7] transition-colors block">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[12px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                  <span className="text-[13px] text-[#5A6A7A]">{c.period}</span>
                </div>
                <div className="mb-4 h-12 flex items-center">
                  <CompanyLogo company={c.logo} variant="card" />
                </div>
                <p className="text-[14px] text-[#5A6A7A] font-normal mb-3">{c.stats}</p>
                <p className="text-[13px] text-[#00A79D] font-bold italic">"{c.tagline}"</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientVoices locale="es" />

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            ¿Listo para escribir su propia historia?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors">
              Agende una llamada de 30 min
            </BookCallLink>
            <Link
              href={localHref('/services', 'es')}
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              Vea nuestros servicios →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
