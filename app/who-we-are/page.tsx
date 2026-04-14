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
              Before anyone called it nearshore, our founders started building here. 25 years later, the companies they helped grow have exited at $400M, won Google Cloud Partner of the Year, and built teams that never left. That's not a strategy. That's a track record.
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

      {/* ── The Team ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Our people</p>
        <h2 className="text-3xl font-bold text-black mb-12">The team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Marcela */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-lg mb-4">MV</div>
            <div className="text-base font-bold text-gray-900">Marcela Villalta</div>
            <div className="text-sm text-blue-600 font-medium mt-1 mb-3">Co-founder & CEO</div>
            <p className="text-sm font-light text-gray-500 leading-relaxed">25+ years building tech operations in Costa Rica for U.S. companies. Architect of the culture model behind less than 1% turnover and a 97.6 GPTW Trust Index — among the highest scores globally. Co-founder of Forward Costa Rica.</p>
          </div>

          {/* José */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg mb-4">JV</div>
            <div className="text-base font-bold text-gray-900">José Villalta</div>
            <div className="text-sm text-blue-600 font-medium mt-1 mb-3">Co-founder & Head of Data Operations</div>
            <p className="text-sm font-light text-gray-500 leading-relaxed">25+ years in data engineering and product management. Grew through every technical and operational layer of one of Costa Rica's most sophisticated data intelligence operations — from production supervisor to Country Manager.</p>
          </div>

          {/* Roberto */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg mb-4">RF</div>
            <div className="text-base font-bold text-gray-900">Roberto Fernandez</div>
            <div className="text-sm text-blue-600 font-medium mt-1 mb-3">Co-founder & CTO</div>
            <p className="text-sm font-light text-gray-500 leading-relaxed">19+ years in software development and data engineering. Grew from developer to Director of Engineering and VP of Product Engineering across some of the most data-intensive companies in the U.S. market.</p>
          </div>

          {/* Laura */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-lg mb-4">LA</div>
            <div className="text-base font-bold text-gray-900">Laura Alvarado</div>
            <div className="text-sm text-blue-600 font-medium mt-1 mb-3">Finance & Accounting Lead</div>
            <p className="text-sm font-light text-gray-500 leading-relaxed">CPA with 20+ years across multinational and local accounting. Deep expertise in Costa Rican tax law, financial reporting and compliance for foreign-owned entities operating in Costa Rica.</p>
          </div>

          {/* Cristian */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-lg mb-4">CC</div>
            <div className="text-base font-bold text-gray-900">Cristian Chacón</div>
            <div className="text-sm text-blue-600 font-medium mt-1 mb-3">Financial Compliance Analyst</div>
            <p className="text-sm font-light text-gray-500 leading-relaxed">CPI-certified accountant with multinational experience. Manages payroll, tax compliance, financial reporting and day-to-day accounting for Costa Rican entities — the operational backbone that keeps everything running.</p>
          </div>

        </div>
      </section>

      {/* ── Partners ── */}
      <section className="max-w-7xl mx-auto px-12 py-16 border-t border-gray-200">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Partners</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Strategic & legal partners</h2>
        <p className="text-sm font-light text-gray-500 mb-10">The partners who extend our capabilities — in business development, legal and regulatory matters.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gary */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg flex-shrink-0">GW</div>
              <div>
                <div className="text-base font-bold text-gray-900">Gary Walter</div>
                <div className="text-sm text-blue-600 font-medium mt-1">Strategic Partner</div>
              </div>
            </div>
            <p className="text-sm font-light text-gray-500 leading-relaxed mb-4">Mid-market acceleration executive with extensive background in general management, strategic planning, SaaS and Big Data. Led Infutor Data Solutions from $1M to $250M — with the Costa Rica team at the core of that growth. Brings the operator perspective of someone who has lived the model from the client side for over a decade.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-500">SaaS & Big Data</span>
              <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-500">Private equity</span>
              <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-500">M&A</span>
              <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-500">Harvard KSC certified</span>
            </div>
          </div>
          {/* Marco */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">ML</div>
              <div>
                <div className="text-base font-bold text-gray-900">Marco López Volio</div>
                <div className="text-sm text-blue-600 font-medium mt-1">Legal Partner · Zurcher Odio & Raven</div>
              </div>
            </div>
            <p className="text-sm font-light text-gray-500 leading-relaxed mb-4">Partner & Director of the IP & Regulatory Department at Zurcher Odio & Raven — one of Costa Rica's most recognized law firms. 20+ years advising multinational companies in regulatory, antitrust, intellectual property, data privacy and compliance. All Crest Partners client entities are backed by his firm.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-500">Chambers & Partners · IP</span>
              <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-500">Chambers & Partners · Antitrust</span>
              <span className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-500">Leaders League Band 1 · IP</span>
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
