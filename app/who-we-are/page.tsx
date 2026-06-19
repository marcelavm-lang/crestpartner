'use client'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  { title: 'Full accountability', text: 'We don\'t hand off. We own the result.' },
  { title: 'Culture is strategy', text: 'Less than 1% turnover doesn\'t happen by accident.' },
  { title: 'Built around one table', text: 'Same time zone, same work culture, same execution as your HQ.' },
]

const team = [
  {
    initials: 'MV',
    color: 'bg-[#E6F7F6] text-[#00A79D]',
    photo: '/team/marcela-villalta.jpg',
    name: 'Marcela Villalta',
    title: 'Co-founder & CEO',
    badge: 'Co-founder',
    bio: '25+ years building tech operations in Costa Rica for U.S. companies. Architect of the culture model behind less than 1% turnover and a 97.6 GPTW Trust Index — among the highest scores globally. Former Country Manager at LTV Co. (f.k.a. BeenVerified). Co-founder of Forward Costa Rica.',
    tags: ['Business architecture', 'Org & culture design', 'Nearshore entity model', 'Social tech impact'],
    expertise: [
      'Operations leadership',
      'HR & people strategy',
      'Culture model design',
      'Entity setup & management',
      'Inclusive tech education',
      'U.S. client relations',
    ],
  },
  {
    initials: 'JV',
    color: 'bg-[#EBF4FA] text-[#2574A7]',
    photo: '/team/jose-villalta.jpg',
    name: 'José Villalta',
    title: 'Co-founder & Head of Data Operations',
    badge: 'Co-founder',
    bio: '25+ years building and scaling data operations for U.S. enterprise clients. Grew through every layer of one of Costa Rica\'s most sophisticated data intelligence operations — from production supervisor to Country Manager. Combines deep technical expertise in data engineering with the operator\'s perspective of someone who has run a country-level tech operation end to end.',
    tags: ['Data operations strategy', 'Enterprise-scale data architecture', 'Country-level operations leadership', 'Technical-operational integration'],
    expertise: [
      'Enterprise data operations',
      'Data architecture & pipelines',
      'Product strategy',
      'Country operations management',
      'Cross-functional technical leadership',
      'U.S. enterprise delivery',
    ],
  },
  {
    initials: 'RF',
    color: 'bg-[#F0EEFE] text-[#6C5CE7]',
    photo: '/team/roberto-fernandez.jpg',
    name: 'Roberto Fernandez',
    title: 'Co-founder & CTO',
    badge: 'Co-founder',
    bio: '20+ years in software development, data engineering and modern systems architecture. Grew from developer to Director of Engineering and VP of Product Engineering across some of the most data-intensive companies in the U.S. market. Brings an AI-first mindset and a continuous focus on emerging tech to every engagement. Leads all technical delivery and engineering hiring for Crest Partners clients.',
    tags: ['Engineering vision & strategy', 'AI strategy & adoption', 'Technical executive leadership', 'Modernization architecture'],
    expertise: [
      'Software architecture',
      'Data engineering',
      'Engineering org leadership',
      'Product engineering leadership',
      'Engineering talent strategy',
      'Cross-border tech delivery',
    ],
  },
  {
    initials: 'LA',
    color: 'bg-[#E6F7F6] text-[#00A79D]',
    photo: '/team/laura-alvarado.jpg',
    name: 'Laura Alvarado',
    title: 'Finance & Accounting Lead',
    badge: 'Finance',
    bio: 'CPA with 20+ years across multinational and local accounting. Deep expertise in Costa Rican tax law, financial reporting and compliance for foreign-owned entities operating in Costa Rica. Has managed the financial back-office for multiple Crest Partners client entities.',
    tags: ['CPA', 'CR tax law', 'Multinational accounting', 'Compliance'],
    expertise: [
      'CPA certified (CR)',
      'Costa Rican tax law',
      'Financial reporting',
      'Compliance management',
      'Multinational accounting',
      'Foreign-owned entity ops',
    ],
  },
  {
    initials: 'CC',
    color: 'bg-[#FFF4E5] text-[#D4890A]',
    photo: '/team/cristian-chacon.jpg',
    name: 'Cristian Chacón',
    title: 'Financial Compliance Analyst',
    badge: 'Accounting',
    bio: 'CPI-certified accountant with multinational experience. Manages payroll, tax compliance, financial reporting and day-to-day accounting for Costa Rican entities — the operational backbone that keeps everything running.',
    tags: ['CPI certified', 'Payroll', 'Tax compliance', 'Financial reporting'],
    expertise: [
      'CPI certified',
      'Payroll management',
      'Tax compliance',
      'Financial reporting',
      'Accounting operations',
    ],
  },
]

const garyExpertise = [
  'General management',
  'Strategic planning',
  'SaaS & Big Data',
  'Private equity & M&A',
  'Business development',
  'Harvard KSC certified',
]

const legalExpertise = [
  'Entity setup & corporate law',
  'Labor & employment law',
  'IP & trademark protection',
  'Data privacy & regulatory',
  'Antitrust & competition',
  'Commercial contracts',
]

function ExpertiseGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((area) => (
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
  )
}

function Avatar({ initials, color, photo, name, size = 'lg' }: { initials: string; color: string; photo: string; name: string; size?: 'lg' | 'sm' }) {
  const dim = size === 'lg' ? 80 : 48
  return (
    <div
      className={`relative rounded-full overflow-hidden ${color} flex items-center justify-center font-bold shrink-0`}
      style={{ width: dim, height: dim }}
    >
      <Image
        src={photo}
        alt={name}
        width={dim}
        height={dim}
        className="object-cover w-full h-full absolute inset-0"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      <span className={size === 'lg' ? 'text-[22px]' : 'text-[15px]'}>{initials}</span>
    </div>
  )
}

export default function WhoWeArePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 md:px-12 py-16 md:py-20 border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-teal-500 mb-3">Who we are</p>
            <h1 className="text-5xl font-bold leading-tight mb-5">
              25+ years building Costa Rica's tech ecosystem — from the inside.
            </h1>
            <p className="text-base font-light text-gray-500 leading-relaxed">
              Before anyone called it nearshore, our founders started building here. 25 years later, the companies they helped grow have exited at $400M, won Google Cloud Partner of the Year, and built teams that never left. That's not a strategy. That's a track record.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { val: '2001', label: 'Year of our first partnership — before nearshore had a name', color: 'text-[#2574A7]' },
              { val: '500+', label: 'High-value tech jobs created in Costa Rica', color: 'text-[#2574A7]' },
              { val: '<1%', label: 'Involuntary turnover across all partnerships', color: 'text-[#00A79D]' },
              { val: '$1B+', label: 'Combined client revenue', color: 'text-[#2574A7]' },
              { val: '97.6', label: 'Great Place to Work Trust Index — among the highest scores globally', color: 'text-[#00A79D]' },
              { val: '98/100', label: 'eNPS — Employee Net Promoter Score', color: 'text-[#2574A7]' },
            ].map((s) => (
              <div key={s.val} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <div className={`text-3xl font-bold ${s.color}`}>{s.val}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
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

        <div className="flex flex-col gap-6">
          {team.map((person) => (
            <div key={person.name} className="bg-white border border-[#D8E2EA] rounded-[12px] p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-8">

                {/* Left column */}
                <div className="md:w-1/2">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <Avatar {...person} size="lg" />
                      <div>
                        <h3 className="text-[20px] font-bold text-black">{person.name}</h3>
                        <p className="text-[13px] text-[#2574A7] font-bold mt-0.5">{person.title}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px] shrink-0 ml-4">
                      {person.badge}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed mb-5">
                    {person.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {person.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold text-[#2574A7] bg-[#EBF4FA] border border-[#D8E2EA] px-2.5 py-1 rounded-[6px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div className="md:w-1/2">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Expertise areas</p>
                  <ExpertiseGrid items={person.expertise} />
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-8">Partners</p>

          {/* Gary */}
          <div className="bg-white border border-[#D8E2EA] rounded-[12px] p-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/2">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-[#EBF4FA] flex items-center justify-center text-[#2574A7] font-bold text-xl shrink-0">
                      <Image
                        src="/team/gary-walter.jpg"
                        alt="Gary Walter"
                        width={80}
                        height={80}
                        className="object-cover w-full h-full absolute inset-0"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                      <span>GW</span>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-black">Gary Walter</h3>
                      <p className="text-[13px] text-[#2574A7] font-bold mt-0.5">Strategic Partner</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px] shrink-0 ml-4">
                    Strategic Partner
                  </span>
                </div>
                <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed mb-5">
                  Mid-market acceleration executive with extensive background in general management, strategic planning, SaaS and Big Data. Led Infutor Data Solutions from $1M to $250M — with the Costa Rica team at the core of that growth. Brings the operator perspective of someone who has lived the model from the client side for over a decade.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['SaaS & Big Data', 'Private equity', 'M&A', 'Harvard KSC certified'].map((a) => (
                    <span key={a} className="text-[10px] font-bold text-[#2574A7] bg-[#EBF4FA] border border-[#D8E2EA] px-2.5 py-1 rounded-[6px]">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Expertise areas</p>
                <ExpertiseGrid items={garyExpertise} />
              </div>
            </div>
          </div>

          {/* Marco */}
          <div className="bg-white border border-[#D8E2EA] rounded-[12px] p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/2">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-[#EBF4FA] flex items-center justify-center text-[#2574A7] font-bold text-xl shrink-0">
                      <Image
                        src="/team/marco-lopez.jpg"
                        alt="Marco López Volio"
                        width={80}
                        height={80}
                        className="object-cover w-full h-full absolute inset-0"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                      <span>ML</span>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-black">Marco López Volio</h3>
                      <p className="text-[13px] text-[#2574A7] font-bold mt-0.5">Legal Partner · Zurcher Odio & Raven</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EBF4FA] text-[#2574A7] px-3 py-1.5 rounded-[6px] shrink-0 ml-4">
                    Legal Partner
                  </span>
                </div>
                <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed mb-5">
                  Partner & Director of the IP & Regulatory Department at Zurcher Odio & Raven — one of Costa Rica's most recognized law firms. 20+ years advising multinational companies in regulatory, antitrust, intellectual property, data privacy and compliance. All Crest Partners client entities are backed by his firm.
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
                <ExpertiseGrid items={legalExpertise} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Forward CR ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-black mb-5">
              Democratizing tech education for those locked out by economics.
            </h2>
            <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
              Forward Costa Rica — co-founded by our team — delivers full-stack engineering, English and professional skills training to young Costa Ricans who couldn't otherwise afford it. Entirely free.
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
