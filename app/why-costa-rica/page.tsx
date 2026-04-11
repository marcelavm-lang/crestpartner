import Link from 'next/link'

const heroStats = [
  { value: '75+', label: 'years of uninterrupted democracy' },
  { value: 'CST', label: 'same time zone as Chicago' },
  { value: '#1', label: 'English proficiency in Central America' },
  { value: 'No', label: 'Military since 1948 — budget invested in education instead' },
]

const valueCards = [
  {
    val: '<1%',
    title: 'Involuntary turnover',
    text: 'Replacing a senior engineer costs 50–200% of annual salary. Less than 1% turnover is a compounding financial advantage.',
    color: 'text-[#2574A7]',
  },
  {
    val: '10+',
    title: 'Years average partnership',
    text: 'When a team stays, institutional knowledge compounds. The engineers who built your system are still there to scale it.',
    color: 'text-[#00A79D]',
  },
  {
    val: '0',
    title: 'Time zone gap with U.S.',
    text: 'Same working hours as your U.S. team. No async delays, no overnight handoffs. Real collaboration.',
    color: 'text-[#2574A7]',
  },
]

const reasons = [
  {
    num: '01',
    title: 'Political & economic stability',
    text: '75+ years of democratic continuity — one of the most stable countries in Latin America.',
  },
  {
    num: '02',
    title: 'Full English proficiency',
    text: '#1 in Central America. Engineers who communicate clearly, collaborate fluently and integrate seamlessly.',
  },
  {
    num: '03',
    title: 'World-class universities',
    text: 'UCR, TEC, ULACIT — we\'ve been recruiting from these institutions for 24 years.',
  },
  {
    num: '04',
    title: 'Same time zone',
    text: 'CST, full overlap with U.S. business hours. Real-time collaboration, every day.',
  },
  {
    num: '05',
    title: 'Favorable legal framework',
    text: 'Chambers-ranked legal infrastructure. Clear entity setup, labor law and IP protections.',
  },
  {
    num: '06',
    title: 'Professional work culture',
    text: 'Creative, resourceful, resilient, committed. Costa Rican professionals don\'t just fill a role — they own it.',
  },
]

const comparisonRows = [
  { factor: 'Time zone alignment', cr: 'Full overlap', other: '6–12 hr gap' },
  { factor: 'English proficiency', cr: 'High', other: 'Varies widely' },
  { factor: 'Political stability', cr: '75+ yrs', other: 'Variable' },
  { factor: 'Legal framework', cr: 'Clear & proven', other: 'Complex' },
  { factor: 'Cultural alignment', cr: 'Very high', other: 'Moderate' },
  { factor: 'Talent retention', cr: '<1% turnover*', other: '13–25% avg' },
]

const talentProfiles = [
  'Software Engineers — Full-stack, backend, frontend',
  'Data Engineers & Scientists — ETL, pipelines, ML, analytics',
  'DevOps & Cloud Engineers — Kubernetes, CI/CD, GCP, AWS',
  'QA & Automation Engineers — Selenium, Cypress',
  'Product & Project Managers — Agile, Scrum, bilingual',
  'Engineering Leadership — Tech leads, directors, VPs',
]

const fundamentals = [
  { val: '75+', label: 'Years of democracy' },
  { val: '99%', label: 'Renewable energy' },
  { val: 'Free', label: 'Public university system' },
  { val: 'Strong', label: 'IP & legal protections' },
]

export default function WhyCostaRicaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-5">Why Costa Rica</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-5">
              A proven market. A proven model. Built for the long term.
            </h1>
            <p className="text-[16px] text-[#5A6A7A] font-light leading-relaxed">
              The professionals here are built differently — creative, resourceful, resilient, committed.
              They don't just fill a role. They own it. That's the product of a country that chose
              education and stability over everything else, for generations. Our clients don't outsource
              to Costa Rica. They build here. They come for the talent. They stay because Costa Rica
              becomes part of how they operate — not an extension of it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 self-center">
            {heroStats.map((s) => (
              <div key={s.value} className="border border-[#D8E2EA] rounded-[10px] p-5">
                <p className="text-[26px] font-bold text-[#2574A7] leading-none mb-1.5">{s.value}</p>
                <p className="text-[12px] text-[#5A6A7A] font-light leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Section (black) ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">The real return on talent</p>
          <h2 className="text-3xl font-bold text-white mb-4 max-w-2xl">
            The question isn't what a developer costs per hour. It's what your operation delivers over time.
          </h2>
          <p className="text-[15px] text-white/60 font-light max-w-2xl mb-12">
            When you factor in retention, recruiting cycles, onboarding time, communication alignment and
            operational continuity — the total return of building in the right market compounds significantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((c) => (
              <div key={c.val} className="border border-white/10 rounded-[10px] p-7">
                <p className={`text-[40px] font-bold leading-none mb-3 ${c.color}`}>{c.val}</p>
                <p className="text-[15px] font-bold text-white mb-3">{c.title}</p>
                <p className="text-[13px] text-white/60 font-light leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Works ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Why it works</p>
        <h2 className="text-3xl font-bold text-black mb-12 max-w-xl">
          Six reasons that consistently tip the decision.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.num} className="border border-[#D8E2EA] rounded-[10px] p-7 hover:border-[#2574A7] transition-colors">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{r.num}</p>
              <h3 className="text-[16px] font-bold text-black mb-2">{r.title}</h3>
              <p className="text-[13px] text-[#5A6A7A] font-light leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-black mb-5">
                The factors that matter most when choosing where to build.
              </h2>
              <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
                Every market has trade-offs. After 24 years helping U.S. companies choose where to
                build, these are the factors that consistently tip the decision.
              </p>
            </div>
            <div className="bg-white border border-[#D8E2EA] rounded-[12px] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#F4F7FA] border-b border-[#D8E2EA]">
                <div className="p-4 col-span-1">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A]">Factor</p>
                </div>
                <div className="p-4 border-l border-[#D8E2EA]">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#2574A7]">Costa Rica</p>
                </div>
                <div className="p-4 border-l border-[#D8E2EA]">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A]">Other markets</p>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? 'border-b border-[#D8E2EA]' : ''}`}>
                  <div className="p-4">
                    <p className="text-[13px] text-black font-light">{row.factor}</p>
                  </div>
                  <div className="p-4 border-l border-[#D8E2EA] bg-[#F9FEFE]">
                    <p className="text-[13px] text-[#00A79D] font-bold">{row.cr}</p>
                  </div>
                  <div className="p-4 border-l border-[#D8E2EA]">
                    <p className="text-[13px] text-[#5A6A7A] font-light">{row.other}</p>
                  </div>
                </div>
              ))}
              <div className="px-4 py-3 bg-[#F4F7FA] border-t border-[#D8E2EA]">
                <p className="text-[11px] text-[#5A6A7A] font-light">*With the right operator and culture model</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Talent Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-black mb-5">
              Engineers, data professionals and operators — built and retained for the long term.
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { val: '24 yrs', label: 'recruiting in CR' },
                { val: '400+', label: 'professionals placed' },
                { val: '<1%', label: 'turnover' },
                { val: '11 yrs', label: 'longest partnership' },
              ].map((s) => (
                <div key={s.val} className="border border-[#D8E2EA] rounded-[10px] p-4">
                  <p className="text-[22px] font-bold text-[#2574A7] leading-none mb-1">{s.val}</p>
                  <p className="text-[11px] text-[#5A6A7A] font-light">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-5">Talent profiles</p>
            <ul className="space-y-0">
              {talentProfiles.map((p) => (
                <li key={p} className="flex items-center gap-3 py-3.5 border-b border-[#D8E2EA] last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A79D] shrink-0" />
                  <span className="text-[14px] text-black font-light">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Country Fundamentals ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-8">Country fundamentals</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {fundamentals.map((f) => (
              <div key={f.val} className="bg-white border border-[#D8E2EA] rounded-[10px] p-6">
                <p className="text-[32px] font-bold text-[#2574A7] leading-none mb-2">{f.val}</p>
                <p className="text-[13px] text-[#5A6A7A] font-light">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to build here?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors"
            >
              Talk to our team
            </Link>
            <Link
              href="/case-studies"
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              See case studies →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
