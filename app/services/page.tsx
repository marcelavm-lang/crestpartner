import Link from 'next/link'

const trustBar = [
  { value: '25+', label: 'Years in Costa Rica\'s tech market' },
  { value: '<1%', label: 'turnover across all partnerships' },
  { value: '6', label: 'companies with full operations built from zero' },
  { value: '30', label: 'days average time to fully operational' },
]

const launchChecklist = [
  'Legal entity creation — registration, structure and documentation',
  'Legal entity administration — your people work directly for you, under your brand, with full Costa Rican labor law compliance',
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
  { company: 'LTV Co.', result: '$400M exit', note: '120-person engineering hub · 97.6 GPTW Trust Index · 98/100 eNPS · 0% turnover' },
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
      <section className="px-12 py-20 border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-teal-500 mb-3">Services</p>
            <h1 className="text-5xl font-bold leading-tight mb-5">
              Everything you need to operate in Costa Rica — under one roof.
            </h1>
            <p className="text-base font-light text-gray-500 leading-relaxed mb-8">
              We don't connect you with vendors. We are the vendor — for every layer of your Costa Rica operation.
            </p>
            <div className="flex gap-3">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-lg">Talk to our team</Link>
              <Link href="/case-studies" className="px-6 py-3 border border-gray-200 text-sm rounded-lg">See case studies →</Link>
            </div>
          </div>
          {/* Columna derecha — 3 service cards */}
          <div className="flex flex-col gap-3">
            <Link href="#launch" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#00A79D] hover:bg-[#F9FEFE] transition-colors block">
              <div className="text-xs font-bold text-teal-500 tracking-widest uppercase mb-2">01 — Launch</div>
              <div className="text-base font-bold text-gray-900 mb-1">Launch your Costa Rica operation</div>
              <div className="text-sm font-light text-gray-500">Legal entity, back office and compliance — fully operational in 30 days.</div>
            </Link>
            <Link href="#build" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#00A79D] hover:bg-[#F9FEFE] transition-colors block">
              <div className="text-xs font-bold text-teal-500 tracking-widest uppercase mb-2">02 — Build</div>
              <div className="text-base font-bold text-gray-900 mb-1">Build and lead your nearshore tech team</div>
              <div className="text-sm font-light text-gray-500">Recruiting, assessments, onboarding, payroll and retention — less than 1% turnover.</div>
            </Link>
            <Link href="#operate" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#00A79D] hover:bg-[#F9FEFE] transition-colors block">
              <div className="text-xs font-bold text-teal-500 tracking-widest uppercase mb-2">03 — Operate</div>
              <div className="text-base font-bold text-gray-900 mb-1">Run your back office — completely</div>
              <div className="text-sm font-light text-gray-500">Accounting, legal, HR and office management — ongoing, every day.</div>
            </Link>
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
                { day: 'Day 5', label: 'Legal entity active · compliance infrastructure live' },
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
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Results</p>
                <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-teal-500">&lt;1%</div>
                  <div className="text-xs text-gray-500 mt-1">Involuntary turnover — industry avg. 13%</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">$1B+</div>
                  <div className="text-xs text-gray-500 mt-1">Combined client revenue across all partnerships</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-500 mt-1">Professionals placed and retained</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-teal-500">97.6</div>
                  <div className="text-xs text-gray-500 mt-1">GPTW Trust Index — among the highest scores globally</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">98/100</div>
                  <div className="text-xs text-gray-500 mt-1">eNPS — Employee Net Promoter Score at LTV Co.</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-xs text-gray-500 mt-1">Years recruiting in the Costa Rica tech market</div>
                </div>
              </div>
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
