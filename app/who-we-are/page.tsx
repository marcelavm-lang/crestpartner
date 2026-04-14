import Link from 'next/link'

const values = [
  {
    title: 'Full accountability',
    text: 'We don\'t hand off. We own the result.',
  },
  {
    title: 'Culture is strategy',
    text: 'Less than 1% turnover doesn\'t happen by accident.',
  },
  {
    title: 'Ecosystem, not extraction',
    text: 'We invest in Costa Rica\'s talent through Forward CR.',
  },
]

const marcelaTimeline = [
  { year: 'Now', role: 'Co-founder & CEO, Crest Partners + Forward CR' },
  { year: '2015', role: 'LTV Co. Country Manager · 120-person hub · $400M exit · 98/100 eNPS' },
  { year: '2007', role: 'Infutor Country Manager · 0→40 team · $250M exit' },
  { year: '2001', role: 'Amacai / TargusInfo · first CR data team' },
]

const joseTimeline = [
  { year: 'Now', role: 'Co-founder & Head of Data Operations, Crest Partners' },
  { year: '2024', role: 'Country Manager, Verisk Marketing Solutions' },
  { year: '2022', role: 'Data Operations Director, Verisk' },
  { year: '2017', role: 'Product Implementation Manager, Infutor' },
  { year: '2011', role: 'Data Department Manager, Infutor (6 yrs)' },
  { year: '2008', role: 'Client Services Management, Infutor' },
  { year: '2004', role: 'Production Manager, Amacai' },
  { year: '2001', role: 'Supervisor YP Department, Amacai' },
]

const robertoTimeline = [
  { year: 'Now', role: 'Co-founder & CTO, Crest Partners' },
  { year: '2023', role: 'VP Product Engineering, Think Unlimited' },
  { year: '2022', role: 'Director of Engineering, LTV Co.' },
  { year: '2020', role: 'Associate Director of Engineering, LTV Co.' },
  { year: '2015', role: 'Data Engineer, BeenVerified / LTV Co.' },
  { year: '2008', role: 'Software Dev Manager, Infutor Data Solutions CR' },
  { year: '2005', role: 'Software Developer, Infutor' },
]

const lauraTimeline = [
  { year: '2023', role: 'Accounting Manager LTV Co. CR (present)' },
  { year: '2018', role: 'Accountant → Senior Accountant, LTV Co.' },
  { year: '2007', role: 'CFO Offshore Fleet Holdings (11 yrs)' },
]

const cristianTimeline = [
  { year: '2025', role: 'Analyst General Accounting, Bacardi (present)' },
  { year: '2024', role: 'Jr. Analyst GL & Financial Reporting, Bacardi' },
  { year: '2023', role: 'Freelance Accounting Advisor (present)' },
  { year: '2023', role: 'Intern RTR Banks, DHL Express' },
]

const legalExpertise = [
  'Entity setup & corporate law',
  'Labor & employment law',
  'IP & trademark protection',
  'Data privacy & regulatory',
  'Antitrust & competition',
  'Commercial contracts',
]

function Timeline({ items }: { items: { year: string; role: string }[] }) {
  return (
    <div className="space-y-3 mt-5">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4 items-start">
          <span className={`text-[11px] font-bold shrink-0 w-10 pt-0.5 ${item.year === 'Now' ? 'text-[#00A79D]' : 'text-[#5A6A7A]'}`}>
            {item.year}
          </span>
          <span className="text-[13px] text-black font-light leading-snug">{item.role}</span>
        </div>
      ))}
    </div>
  )
}

export default function WhoWeArePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-12 py-20 border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-teal-500 mb-3">Who we are</p>
            <h1 className="text-5xl font-bold leading-tight mb-5">
              25 years building Costa Rica's tech ecosystem — from the inside.
            </h1>
            <p className="text-base font-light text-gray-500 leading-relaxed">
              We didn't arrive to take advantage of Costa Rica's talent. We started here in 2001 — before nearshore had a name — and we've been building it from the inside ever since. Our founders have lived the model as operators, not just advisors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="text-3xl font-bold text-blue-600">2001</div>
              <div className="text-xs text-gray-500 mt-1">Year of our first partnership — before nearshore had a name</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-xs text-gray-500 mt-1">High-value tech jobs created in Costa Rica</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="text-3xl font-bold text-teal-500">&lt;1%</div>
              <div className="text-xs text-gray-500 mt-1">Involuntary turnover across all partnerships</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="text-3xl font-bold text-blue-600">$1B+</div>
              <div className="text-xs text-gray-500 mt-1">Combined client revenue</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="text-2xl font-bold text-teal-500">97.6</div>
              <div className="text-xs text-gray-500 mt-1">Great Place to Work Trust Index — among the highest scores globally</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="text-2xl font-bold text-blue-600">98/100</div>
              <div className="text-xs text-gray-500 mt-1">eNPS — Employee Net Promoter Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Band ── */}
      <section className="border-y border-[#D8E2EA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className={`py-10 px-6 ${i < values.length - 1 ? 'md:border-r border-[#D8E2EA]' : ''}`}>
                <h3 className="text-[15px] font-bold text-black mb-2">{v.title}</h3>
                <p className="text-[13px] text-[#5A6A7A] font-light">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-black mb-12 max-w-xl">
          Both started in the same company in 2001. Both are still building — 24 years later.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marcela */}
          <div className="border border-[#D8E2EA] rounded-[12px] p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[20px] font-bold text-black">Marcela Villalta</h3>
                <p className="text-[13px] text-[#2574A7] font-bold">Co-founder & CEO</p>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px] shrink-0">
                Started at Amacai · 2001
              </span>
            </div>
            <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed mb-5">
              Marcela built some of the most successful tech operations in Costa Rica's history — from
              Amacai's first data team to LTV Co.'s 120-person engineering hub. 98/100 eNPS, less than
              1% involuntary turnover.
            </p>
            <Timeline items={marcelaTimeline} />
            <div className="mt-7 space-y-4">
              <blockquote className="border-l-2 border-[#00A79D] pl-4">
                <p className="text-[13px] text-black font-light italic">"We would never have accomplished our goals without her."</p>
                <p className="text-[11px] text-[#5A6A7A] font-bold mt-1">— Co-founder, LTV Co.</p>
              </blockquote>
              <blockquote className="border-l-2 border-[#00A79D] pl-4">
                <p className="text-[13px] text-black font-light italic">"Across the entire company, there is not a more respected leader than Marcela Villalta."</p>
                <p className="text-[11px] text-[#5A6A7A] font-bold mt-1">— Gary Walter, CEO Infutor</p>
              </blockquote>
            </div>
          </div>

          {/* José */}
          <div className="border border-[#D8E2EA] rounded-[12px] p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[20px] font-bold text-black">José Villalta</h3>
                <p className="text-[13px] text-[#2574A7] font-bold">Co-founder & Head of Data Operations</p>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px] shrink-0">
                Started at Amacai · 2001
              </span>
            </div>
            <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed mb-5">
              21+ years growing through every technical and operational layer of data intelligence at
              Verisk/Infutor/Amacai — from production supervisor to Country Manager at a Nasdaq-listed company.
            </p>
            <Timeline items={joseTimeline} />
            <div className="mt-5 flex flex-wrap gap-2">
              {['MBA Project Management', 'Certified Scrum Master (CSM)', 'Enterprise Agile SAFe'].map((cert) => (
                <span key={cert} className="text-[11px] font-bold text-[#5A6A7A] bg-[#F4F7FA] border border-[#D8E2EA] px-2.5 py-1 rounded-[6px]">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl">
            Both founders started at the same company, in the same year, in Costa Rica.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { year: '2001', label: 'Amacai — both start', color: 'text-[#00A79D]' },
              { sep: true },
              { year: '2007', label: 'TargusInfo acquired', color: 'text-white' },
              { sep: true },
              { year: '2007–2024', label: 'Combined 40+ years growth', color: 'text-white' },
              { sep: true },
              { year: 'Now', label: 'Co-found Crest Partners', color: 'text-[#00A79D]' },
            ].map((item, i) =>
              'sep' in item ? (
                <div key={i} className="text-white/30 text-[18px]">→</div>
              ) : (
                <div key={i} className="border border-white/10 rounded-[10px] px-5 py-4">
                  <p className={`text-[18px] font-bold ${item.color}`}>{item.year}</p>
                  <p className="text-[12px] text-white/60 font-light">{item.label}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Core Team ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Core team</p>
        <h2 className="text-3xl font-bold text-black mb-12">The team behind the operations.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Roberto */}
          <div className="border border-[#D8E2EA] rounded-[12px] p-6">
            <div className="mb-3">
              <h3 className="text-[16px] font-bold text-black">Roberto Fernandez</h3>
              <p className="text-[12px] text-[#2574A7] font-bold">Co-founder & CTO</p>
              <p className="text-[11px] text-[#5A6A7A] font-light mt-1">Active in 2 TC partnerships</p>
            </div>
            <p className="text-[13px] text-[#5A6A7A] font-light leading-relaxed mb-4">
              19+ years in software development and data engineering. Grew from developer to Director
              of Engineering and VP at two active Crest Partners client companies.
            </p>
            <Timeline items={robertoTimeline} />
          </div>

          {/* Laura */}
          <div className="border border-[#D8E2EA] rounded-[12px] p-6">
            <div className="mb-3">
              <h3 className="text-[16px] font-bold text-black">Laura Alvarado</h3>
              <p className="text-[12px] text-[#2574A7] font-bold">Finance & Accounting Lead</p>
            </div>
            <p className="text-[11px] text-[#5A6A7A] font-light italic mb-3">
              Laura spent 7+ years managing LTV Co.'s accounting — part of the team Marcela built,
              now helping build for others.
            </p>
            <p className="text-[13px] text-[#5A6A7A] font-light leading-relaxed mb-4">
              CPA with 20+ years across multinational and local accounting. Deep expertise in Costa
              Rican tax law, financial reporting and compliance for foreign-owned entities.
            </p>
            <Timeline items={lauraTimeline} />
            <div className="mt-4 flex flex-wrap gap-1.5">
              {['CPA #6163', 'CPI #30334', 'Tributación Internacional UCR', 'NetSuite'].map((c) => (
                <span key={c} className="text-[10px] font-bold text-[#5A6A7A] bg-[#F4F7FA] border border-[#D8E2EA] px-2 py-1 rounded-[5px]">{c}</span>
              ))}
            </div>
          </div>

          {/* Cristian */}
          <div className="border border-[#D8E2EA] rounded-[12px] p-6">
            <div className="mb-3">
              <h3 className="text-[16px] font-bold text-black">Cristian Chacón</h3>
              <p className="text-[12px] text-[#2574A7] font-bold">Financial Compliance Analyst</p>
            </div>
            <p className="text-[13px] text-[#5A6A7A] font-light leading-relaxed mb-4">
              CPI-certified with multinational experience at Bacardi and DHL. Manages payroll, tax
              compliance, financial reporting and day-to-day accounting for Costa Rican entities.
            </p>
            <Timeline items={cristianTimeline} />
            <div className="mt-4 flex flex-wrap gap-1.5">
              {['CPI #40265', 'QuickBooks', 'Xero', 'SAP', 'Top National Average 2023'].map((c) => (
                <span key={c} className="text-[10px] font-bold text-[#5A6A7A] bg-[#F4F7FA] border border-[#D8E2EA] px-2 py-1 rounded-[5px]">{c}</span>
              ))}
            </div>
          </div>

          {/* Gary Walter */}
          <div className="border border-[#D8E2EA] rounded-[12px] p-6">
            <div className="mb-3">
              <h3 className="text-[16px] font-bold text-black">Gary Walter</h3>
              <p className="text-[12px] text-[#2574A7] font-bold">Strategic Partner</p>
            </div>
            <p className="text-[13px] text-[#5A6A7A] font-light leading-relaxed mb-4">
              Former CEO of Infutor — which grew from $1M to $250M with the Costa Rica team at its
              core. Introduced Think Unlimited to Crest Partners. Advises on business development and
              client strategy.
            </p>
            <blockquote className="border-l-2 border-[#00A79D] pl-4">
              <p className="text-[12px] text-black font-light italic">
                "Building our company in Costa Rica alongside Marcela was a highlight of my career."
              </p>
            </blockquote>
          </div>

          {/* We're hiring — spans 2 cols */}
          <div className="border border-[#D8E2EA] rounded-[12px] p-6 md:col-span-2 bg-[#F4F7FA] flex flex-col justify-center">
            <p className="eyebrow mb-3">We're hiring</p>
            <h3 className="text-[20px] font-bold text-black mb-2">Join the team building Costa Rica's tech future.</h3>
            <p className="text-[14px] text-[#5A6A7A] font-light mb-5">Open positions in San José, Costa Rica.</p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[#2574A7] hover:underline"
            >
              VIEW OPEN POSITIONS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Legal Partner ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-8">Legal partner</p>
          <div className="bg-white border border-[#D8E2EA] rounded-[12px] p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-black">Marco López Volio</h3>
                    <p className="text-[13px] text-[#2574A7] font-bold">Legal Partner · Zurcher Odio & Raven</p>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px] shrink-0">
                    Legal Partner
                  </span>
                </div>
                <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed mb-5">
                  Partner & Director of IP & Regulatory Department at Zurcher Odio & Raven. 20+ years
                  advising multinational companies in regulatory, antitrust, IP, data privacy and compliance.
                  Ranked by Chambers & Partners (IP + Competition/Antitrust) and Leaders League Band 1 IP
                  (3 consecutive years).
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Chambers & Partners IP', 'Chambers & Partners Antitrust', 'Leaders League Band 1 IP', 'INTA Annual Meeting 2026'].map((a) => (
                    <span key={a} className="text-[10px] font-bold text-[#2574A7] bg-[#EBF4FA] border border-[#D8E2EA] px-2.5 py-1 rounded-[6px]">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Expertise areas</p>
                <div className="grid grid-cols-2 gap-3">
                  {legalExpertise.map((area) => (
                    <div key={area} className="flex items-start gap-2.5">
                      <span className="mt-1 w-3.5 h-3.5 rounded-full bg-[#00A79D] shrink-0 flex items-center justify-center">
                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                          <path d="M1 2.5L2.5 4L6 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[13px] text-black font-light leading-snug">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Forward CR ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">Social impact</p>
            <h2 className="text-3xl font-bold text-black mb-5">
              We don't just hire Costa Rican talent. We create it.
            </h2>
            <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
              Our founders co-created Forward Costa Rica — a non-profit that trains young Costa Ricans
              in fullstack development, English and professional skills. Entirely free.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Programs</p>
            <ul className="space-y-3">
              {[
                '01  Fullstack development',
                '02  English language',
                '03  Employability & professional skills',
                '04  Sports & arts formation',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-[14px] text-black font-light border-b border-[#D8E2EA] pb-3 last:border-0">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#D8E2EA]">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-3">Crest Partners co-founders</p>
              <p className="text-[13px] text-black font-light">Marcela Villalta — curriculum design</p>
              <p className="text-[13px] text-black font-light">Cristian Chacón — co-founder Forward CR</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Want to work with us?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors"
            >
              Talk to our team
            </Link>
            <Link
              href="/careers"
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              View open positions →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
