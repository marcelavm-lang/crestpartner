'use client'

import Link from 'next/link'
import { useState } from 'react'
import CompanyLogo from '@/components/CompanyLogo'

type Tag = 'all' | 'active' | 'exit' | 'data' | 'cloud' | 'talent'

const filters: { label: string; value: Tag }[] = [
  { label: 'All cases', value: 'all' },
  { label: 'Active partnerships', value: 'active' },
  { label: 'Successful exits', value: 'exit' },
  { label: 'Data & AI', value: 'data' },
  { label: 'Cloud & DevOps', value: 'cloud' },
  { label: 'Talent', value: 'talent' },
]

const cases = [
  {
    name: 'TargusInfo',
    slug: 'targusinfo',
    logo: 'targusinfo' as const,
    period: '2001–2007',
    badge: 'Data Operations',
    badgeColor: 'bg-[#F4F7FA] text-[#5A6A7A]',
    tagline: 'The case that built the playbook',
    stats: '200+ collaborators · $650M Neustar exit',
    tags: ['exit', 'data'] as Tag[],
  },
  {
    name: 'Verisk Marketing Solutions',
    slug: 'verisk',
    logo: 'verisk' as const,
    period: '2007–2013',
    badge: 'Consumer Identity',
    badgeColor: 'bg-[#F4F7FA] text-[#5A6A7A]',
    tagline: 'First data intelligence company in CR',
    stats: '55x revenue · $250M exit',
    tags: ['exit', 'data'] as Tag[],
  },
  {
    name: '66degrees',
    slug: '66degrees',
    logo: '66degrees' as const,
    period: '2014–present',
    badge: 'Cloud & DevOps',
    badgeColor: 'bg-[#E6F7F6] text-[#00A79D]',
    tagline: 'Google Cloud Partner of the Year 2024 & 2025',
    stats: '11+ years · 0% turnover',
    tags: ['active', 'cloud'] as Tag[],
  },
  {
    name: 'LTV Co.',
    slug: 'ltv-co',
    logo: 'ltv-co' as const,
    period: '2015–2025',
    badge: 'Consumer Data',
    badgeColor: 'bg-[#EBF4FA] text-[#2574A7]',
    tagline: 'The most comprehensive proof of the model',
    stats: '$400M exit · GPTW #1 · 120-person hub',
    tags: ['exit', 'data'] as Tag[],
  },
  {
    name: 'Think Unlimited',
    slug: 'think-unlimited',
    logo: 'think-unlimited' as const,
    period: '2023–present',
    badge: 'AI & Sales Tech',
    badgeColor: 'bg-[#E6F7F6] text-[#00A79D]',
    tagline: '100% product built in CR',
    stats: '10 people · 2.5M+ leads scored annually',
    tags: ['active', 'data'] as Tag[],
  },
  {
    name: 'Strategio',
    slug: 'strategio',
    logo: 'strategio' as const,
    period: '2025–present',
    badge: 'Talent Operations',
    badgeColor: 'bg-[#E6F7F6] text-[#00A79D]',
    tagline: 'A talent company that trusted us with their own team',
    stats: '8 professionals · Talent vertical',
    tags: ['active', 'talent'] as Tag[],
  },
]

const impactBand = [
  { value: '2001', label: 'Year of our first partnership', highlight: false },
  { value: '$1B+', label: 'Combined client revenue', highlight: true },
  { value: '8–200+', label: 'Team size range', highlight: false },
  { value: '<1%', label: 'Average involuntary turnover', highlight: true },
  { value: 'GPTW', label: 'Great Place to Work certified', highlight: false },
]

const testimonials = [
  {
    quote: 'She built a world-class engineering hub from scratch. We would never have accomplished our goals without her.',
    author: 'Co-founder & Executive, LTV Co.',
    sub: '$400M exit',
  },
  {
    quote: 'Across the entire company, there is not a more respected leader than Marcela Villalta.',
    author: 'Gary Walter, CEO · Infutor',
    sub: '$250M exit',
  },
]

export default function CaseStudiesPage() {
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
            <p className="eyebrow mb-5">Case studies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-6">
              Every company started at zero. None of them stayed there.
            </h1>
            <p className="text-[16px] text-[#5A6A7A] font-light leading-relaxed">
              From a $250M data exit to the Google Cloud Partner of the Year. From 8 people to 200+.
              From $1M to $400M in revenue. Different companies, different industries, different sizes —
              and in every case: less than 1% turnover, a Great Place to Work certification, and teams
              that became core to how those companies grew. These are not coincidences. This is the model.
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
                <p className="text-[12px] text-[#5A6A7A] font-light leading-snug">{item.label}</p>
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
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px]">
                Flagship case
              </span>
              <span className="text-[12px] text-[#5A6A7A]">2015–2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-snug">
              From $30M to $400M — and Costa Rica was at the center of it.
            </h2>
            <p className="text-[16px] text-[#5A6A7A] font-light leading-relaxed mb-8">
              LTV Co. arrived in Costa Rica with one person and a vision. Ten years later they exited
              at $400M with a 120-person engineering and data hub.
            </p>
            <div className="flex flex-wrap gap-4">
              {['13x revenue', 'GPTW certified', '120+ team'].map((m) => (
                <span key={m} className="text-[12px] font-bold text-[#2574A7] bg-[#EBF4FA] px-3 py-1.5 rounded-[6px]">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="bg-[#F4F7FA] rounded-[12px] p-8 border border-[#D8E2EA]">
            <div className="bg-white border border-[#D8E2EA] rounded-[10px] p-5 mb-5">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-3">GPTW</p>
              <p className="text-[13px] text-black font-light leading-relaxed">
                Score so high that auditors asked to verify — LTV Co. ranked{' '}
                <strong>#1 Best Company for Young Professionals in CR</strong>
              </p>
            </div>
            <div className="bg-white border border-[#D8E2EA] rounded-[10px] p-5 mb-5">
              <p className="text-[13px] text-[#5A6A7A] font-light italic leading-relaxed mb-3">
                "We would never have accomplished our goals without her."
              </p>
              <p className="text-[12px] font-bold text-black">— Co-founder & Executive, LTV Co.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '$400M', label: 'exit' },
                { val: '0%', label: 'turnover' },
                { val: '#1', label: 'GPTW' },
                { val: '2 of 2', label: 'global offices in CR' },
              ].map((s) => (
                <div key={s.val} className="bg-white border border-[#D8E2EA] rounded-[8px] p-4">
                  <p className="text-[20px] font-bold text-[#2574A7] leading-none mb-1">{s.val}</p>
                  <p className="text-[11px] text-[#5A6A7A] font-light">{s.label}</p>
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
                className={`text-[12px] font-bold px-4 py-2 rounded-full border transition-colors ${
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
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                  <span className="text-[12px] text-[#5A6A7A]">{c.period}</span>
                </div>
                <div className="mb-4 h-12 flex items-center">
                  <CompanyLogo company={c.logo} variant="card" />
                </div>
                <p className="text-[13px] text-[#5A6A7A] font-light mb-3">{c.stats}</p>
                <p className="text-[12px] text-[#00A79D] font-bold italic">"{c.tagline}"</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-white/10 rounded-[10px] p-8">
                <p className="text-[18px] text-white font-light italic leading-relaxed mb-6">
                  {t.quote}"
                </p>
                <p className="text-[13px] font-bold text-[#00A79D]">{t.author}</p>
                <p className="text-[12px] text-white/50 font-light">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to write your own story?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bw-gray-50 transition-colors"
            >
              Talk to our team
            </Link>
            <Link
              href="/services"
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              See our services →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
