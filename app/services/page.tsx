import Link from 'next/link'

const trustBar = [
  { value: '24+', label: 'years in Costa Rica\'s tech market' },
  { value: '<1%', label: 'turnover across all partnerships' },
  { value: '6', label: 'companies with full operations built from zero' },
  { value: '30', label: 'days average time to fully operational' },
]

const launchChecklist = [
  'Legal entity creation — registration, structure and documentation',
  'Employer of record — full Costa Rican labor law compliance from day one',
  'Accounting & financial setup — bookkeeping, tax compliance and reporting',
  'Office setup — facilities, equipment and operational infrastructure',
  'Regulatory compliance — ongoing monitoring and legal updates',
]

const buildChecklist = [
  'Custom job descriptions and recruiting strategy aligned with your stack',
  'Technical & cultural assessments — no shortcuts on quality, ever',
  'Onboarding & cultural integration into your company and values',
  'Payroll, benefits & HR managed end-to-end on your behalf',
  'Retention programs — culture, growth and engagement built in',
]

const operateChecklist = [
  'Monthly accounting — bookkeeping, financial statements and tax filings',
  'Ongoing legal compliance — regulatory monitoring and labor law updates',
  'HR administration — employee relations, benefits and performance',
  'Office & facilities management — day-to-day operations and vendor relations',
  'Reporting & visibility — regular updates so you always know what\'s happening',
]

const proofCards = [
  { company: 'LTV Co.', result: '$400M exit', note: '120-person engineering hub · 98/100 eNPS · 0% turnover' },
  { company: '66degrees', result: '0% turnover', note: 'Google Cloud Partner of the Year 2024 & 2025 · 11+ years' },
  { company: 'Verisk / Infutor', result: '55x revenue growth', note: '$250M exit · First data intelligence company in CR' },
]

const steps = [
  { num: '01', title: 'Discovery call', sub: '48 hours', desc: 'We get on a call, understand your goals, your stack and your timeline.' },
  { num: '02', title: 'Custom expansion plan', sub: 'Tailored to you', desc: 'We design your Costa Rica operation from scratch — structure, timeline, costs.' },
  { num: '03', title: 'Launch & hire', sub: 'Day 1–30', desc: 'Legal entity, back office, first hires — all running within 30 days.' },
  { num: '04', title: 'Ongoing operations', sub: 'Continuous', desc: 'HR, accounting, compliance, culture — we run it so you don\'t have to.' },
]

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1 w-4 h-4 rounded-full bg-[#00A79D] shrink-0 flex items-center justify-center">
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-[14px] text-black font-light leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <p className="eyebrow mb-5">Services</p>
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] max-w-3xl mb-5">
          Everything you need to operate in Costa Rica — under one roof.
        </h1>
        <p className="text-[17px] text-[#5A6A7A] font-light max-w-2xl">
          We don't connect you with vendors. We are the vendor — for every layer of your Costa Rica operation.
        </p>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-y border-[#D8E2EA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {trustBar.map((t, i) => (
              <div key={i} className={`py-8 px-6 ${i < trustBar.length - 1 ? 'border-r border-[#D8E2EA]' : ''}`}>
                <p className="text-[28px] font-bold text-[#2574A7] leading-none mb-1">{t.value}</p>
                <p className="text-[12px] text-[#5A6A7A] font-light leading-snug">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Block 1: Launch ── */}
      <section id="launch" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">01 — Launch</p>
            <h2 className="text-3xl font-bold text-black mb-4 leading-snug">
              Launch your Costa Rica operation in 30 days
            </h2>
            <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
              Legal entity, employer of record, compliance, back office and office setup — fully operational
              before your first hire.
            </p>
            <Checklist items={launchChecklist} />
          </div>

          {/* Visual panel */}
          <div className="bg-[#F4F7FA] rounded-[12px] p-8 border border-[#D8E2EA]">
            <div className="border border-[#D8E2EA] bg-white rounded-[10px] p-5 mb-6">
              <p className="text-[28px] font-bold text-[#2574A7] leading-none mb-1">30 days</p>
              <p className="text-[12px] text-[#5A6A7A] font-light">average time to fully operational</p>
            </div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Timeline</p>
            <div className="space-y-3">
              {[
                { day: 'Day 1', label: 'Kickoff & legal entity' },
                { day: 'Day 5', label: 'Employer of record live' },
                { day: 'Day 10', label: 'Back office operational' },
                { day: 'Day 30', label: 'Fully operational', highlight: true },
              ].map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center gap-4 p-3 rounded-[8px] ${
                    item.highlight ? 'bg-[#00A79D] text-white' : 'bg-white border border-[#D8E2EA]'
                  }`}
                >
                  <span className={`text-[11px] font-bold ${item.highlight ? 'text-white/80' : 'text-[#5A6A7A]'}`}>
                    {item.day}
                  </span>
                  <span className={`text-[13px] font-medium ${item.highlight ? 'text-white' : 'text-black'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Block 2: Build ── */}
      <section id="build" className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Visual panel */}
            <div className="bg-white rounded-[12px] p-8 border border-[#D8E2EA] order-2 md:order-1">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-6">Results</p>
              <div className="space-y-5">
                {[
                  { val: '<1%', desc: 'involuntary turnover — industry avg 13%', color: 'text-[#2574A7]' },
                  { val: '98/100', desc: 'eNPS score at LTV Co. — auditors asked to recheck', color: 'text-[#00A79D]' },
                  { val: '24 yrs', desc: 'recruiting in the Costa Rica tech market', color: 'text-[#2574A7]' },
                ].map((s) => (
                  <div key={s.val} className="flex items-start gap-4 pb-5 border-b border-[#D8E2EA] last:border-0 last:pb-0">
                    <p className={`text-[28px] font-bold leading-none shrink-0 ${s.color}`}>{s.val}</p>
                    <p className="text-[13px] text-[#5A6A7A] font-light leading-snug pt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">02 — Build</p>
              <h2 className="text-3xl font-bold text-black mb-4 leading-snug">
                Build and lead your nearshore tech team
              </h2>
              <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
                We find the right people, assess them rigorously, onboard them into your culture and keep
                them engaged for the long term.
              </p>
              <Checklist items={buildChecklist} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Block 3: Operate ── */}
      <section id="operate" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">03 — Operate</p>
            <h2 className="text-3xl font-bold text-black mb-4 leading-snug">
              Run your back office — completely and continuously
            </h2>
            <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
              Accounting, legal, compliance, HR administration and office management — ongoing, every day.
            </p>
            <Checklist items={operateChecklist} />
          </div>

          {/* Visual panel */}
          <div className="bg-[#F4F7FA] rounded-[12px] p-8 border border-[#D8E2EA]">
            <div className="border border-[#D8E2EA] bg-white rounded-[10px] p-5 mb-6">
              <p className="text-[28px] font-bold text-[#2574A7] leading-none mb-1">6</p>
              <p className="text-[12px] text-[#5A6A7A] font-light">active back offices managed right now</p>
            </div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Back office coverage</p>
            <div className="grid grid-cols-2 gap-3">
              {['Accounting', 'Legal', 'HR', 'Office'].map((area) => (
                <div
                  key={area}
                  className="bg-white border border-[#D8E2EA] rounded-[8px] p-4 text-[14px] font-bold text-black text-center"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Section ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">Proven results</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-xl">
            The model works. These companies prove it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofCards.map((c) => (
              <div key={c.company} className="border border-white/10 rounded-[10px] p-7">
                <p className="text-[22px] font-bold text-[#2574A7] mb-2">{c.result}</p>
                <p className="text-[16px] font-bold text-white mb-2">{c.company}</p>
                <p className="text-[13px] text-white/60 font-light">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="text-3xl font-bold text-black mb-12 max-w-xl">
          From first call to fully operational — here's what to expect.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="border border-[#D8E2EA] rounded-[10px] p-6">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{step.num}</p>
              <h3 className="text-[16px] font-bold text-black mb-1">{step.title}</h3>
              <p className="text-[12px] text-[#2574A7] font-bold mb-3">{step.sub}</p>
              <p className="text-[13px] text-[#5A6A7A] font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build your Costa Rica team?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href="/contact"
              className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors"
            >
              Schedule a call
            </Link>
            <Link
              href="/case-studies"
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              Read the case studies →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
