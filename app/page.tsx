import Link from 'next/link'
import CompanyLogo from '@/components/CompanyLogo'

const services = [
  {
    num: '01',
    title: 'Launch',
    headline: 'Launch your Costa Rica operation',
    text: 'Legal entity administration — your people work directly for you, under your brand, with full Costa Rican labor law compliance. Back office setup fully operational before your first hire.',
    tag: 'Operational in 30 days.',
  },
  {
    num: '02',
    title: 'Build',
    headline: 'Build and lead your nearshore tech team',
    text: 'Recruiting, technical assessments, onboarding, payroll, HR and retention programs — your team, our infrastructure.',
    tag: 'Less than 1% turnover.',
  },
  {
    num: '03',
    title: 'Operate',
    headline: 'Run your back office — completely',
    text: 'Accounting, legal, compliance, HR administration and office management, ongoing.',
    tag: 'Full accountability.',
  },
]

const cases = [
  { name: 'TargusInfo', slug: 'targusinfo', logo: 'targusinfo' as const, period: '2001–2007', badge: 'Origin', stats: '200+ collaborators · $650M Neustar exit' },
  { name: 'Verisk Marketing Solutions', slug: 'verisk', logo: 'verisk' as const, period: '2007–2013', badge: 'Pioneer', stats: '55x revenue · $250M exit' },
  { name: '66degrees', slug: '66degrees', logo: '66degrees' as const, period: '2014–present', badge: 'Active', stats: '11+ years · 0% turnover' },
  { name: 'LTV Co.', slug: 'ltv-co', logo: 'ltv-co' as const, period: '2015–2025', badge: 'Flagship', stats: '13x revenue · $400M exit · 98/100 eNPS' },
  { name: 'Think Unlimited', slug: 'think-unlimited', logo: 'think-unlimited' as const, period: '2023–present', badge: 'Active', stats: '0% turnover · 100% product built in CR' },
  { name: 'Strategio', slug: 'strategio', logo: 'strategio' as const, period: '2025–present', badge: 'New', stats: '8 collaborators · Talent vertical' },
]

const badgeColor: Record<string, string> = {
  Origin: 'bg-[#F4F7FA] text-[#5A6A7A]',
  Pioneer: 'bg-[#F4F7FA] text-[#5A6A7A]',
  Active: 'bg-[#E6F7F6] text-[#00A79D]',
  Flagship: 'bg-[#EBF4FA] text-[#2574A7]',
  New: 'bg-[#E6F7F6] text-[#00A79D]',
}

const logoChips = [
  { name: 'TargusInfo', href: '/case-studies/targusinfo' },
  { name: 'Verisk', href: '/case-studies/verisk' },
  { name: 'LTV Co.', href: '/case-studies/ltv-co' },
  { name: '66degrees', href: '/case-studies/66degrees' },
  { name: 'Think Unlimited', href: '/case-studies/think-unlimited' },
  { name: 'Strategio', href: '/case-studies/strategio' },
  // duplicated for infinite scroll
  { name: 'TargusInfo', href: '/case-studies/targusinfo' },
  { name: 'Verisk', href: '/case-studies/verisk' },
  { name: 'LTV Co.', href: '/case-studies/ltv-co' },
  { name: '66degrees', href: '/case-studies/66degrees' },
  { name: 'Think Unlimited', href: '/case-studies/think-unlimited' },
  { name: 'Strategio', href: '/case-studies/strategio' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
            <p className="eyebrow mb-5">Nearshore tech operations — Costa Rica</p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-black max-w-3xl mb-6">
              Costa Rica's most proven tech operation partner.
            </h1>
            <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed max-w-2xl mb-10">
              We help U.S. tech and data companies recruit, build and run high-performing engineering teams
              in Costa Rica — same time zone, a fraction of the cost, zero operational friction.
              One partner. Complete accountability.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#2574A7] text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-[#1f6391] transition-colors tracking-wide"
              >
                Talk to our team
              </Link>
              <Link
                href="/case-studies"
                className="border border-[#D8E2EA] text-black font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors"
              >
                See case studies →
              </Link>
            </div>
          </div>

          {/* Right column — 6 stats cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[10px] p-5">
              <div className="text-[30px] font-bold text-[#2574A7]">25+</div>
              <div className="text-xs text-[#5A6A7A] mt-1">Years in Costa Rica</div>
            </div>
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[10px] p-5">
              <div className="text-[30px] font-bold text-[#2574A7]">500+</div>
              <div className="text-xs text-[#5A6A7A] mt-1">High-value jobs created</div>
            </div>
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[10px] p-5">
              <div className="text-[30px] font-bold text-[#00A79D]">&lt;1%</div>
              <div className="text-xs text-[#5A6A7A] mt-1">Avg. turnover — industry avg. 13%</div>
            </div>
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[10px] p-5">
              <div className="text-[30px] font-bold text-[#2574A7]">$1B+</div>
              <div className="text-xs text-[#5A6A7A] mt-1">Client revenue</div>
            </div>
            <div className="bg-[#F7FAFB] border border-[#D8E2EA] rounded-[10px] p-5">
              <div className="text-[30px] font-bold text-[#00A79D]">98/100</div>
              <div className="text-xs text-[#5A6A7A] mt-1">eNPS score</div>
            </div>
            <div className="bg-[#F7FAFB] border border-[#B3E5E2] rounded-[10px] p-5">
              <div className="text-sm font-bold text-[#00A79D]">GPTW</div>
              <div className="text-xs text-[#5A6A7A] mt-1">Great Place to Work certified — auditors asked to verify</div>
            </div>
          </div>

        </div>

        {/* Animated logo banner — full width below both columns */}
        <div className="mt-12">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">
            Trusted by leading tech and data companies
          </p>
          <div className="overflow-hidden w-full">
            <div className="flex animate-scroll gap-3 w-max">
              {logoChips.map((logo, i) => (
                <Link
                  key={i}
                  href={logo.href}
                  className="text-sm font-medium px-4 py-2 border border-[#D8E2EA] rounded-full text-[#5A6A7A] bg-white whitespace-nowrap hover:border-[#2574A7] hover:text-[#2574A7] transition-colors"
                >
                  {logo.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#F7FAFB] w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="eyebrow mb-4">What we do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 max-w-xl">
          One partner. Every layer of your operation.
        </h2>
        <p className="text-[16px] text-[#5A6A7A] font-light max-w-xl mb-12">
          Legal, HR, payroll, compliance, recruiting, back office and culture — we don't connect you
          with vendors. We are the vendor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.num} className="border border-[#D8E2EA] rounded-[10px] p-8 hover:border-[#2574A7] transition-colors">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">
                {s.num} — {s.title}
              </p>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">{s.headline}</h3>
              <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed mb-6">{s.text}</p>
              <span className="inline-block text-[11px] font-bold tracking-wide text-[#2574A7] bg-[#EBF4FA] px-3 py-1.5 rounded-[6px]">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="text-[14px] font-bold text-[#2574A7] hover:underline"
          >
            See all services →
          </Link>
        </div>
      </div>
      </section>

      {/* ── Case Studies Preview ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Case studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 max-w-2xl">
            Every company started at zero. None of them stayed there.
          </h2>
          <p className="text-[16px] text-[#5A6A7A] font-light mb-12">
            A track record of complete operations built from the ground up — across industries, team sizes and timelines. These are some of them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <Link key={c.name} href={`/case-studies/${c.slug}`} className="bg-white border border-[#D8E2EA] rounded-[10px] p-7 hover:border-[#2574A7] transition-colors block">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] ${badgeColor[c.badge] || 'bg-[#F4F7FA] text-[#5A6A7A]'}`}>
                    {c.badge}
                  </span>
                  <span className="text-[12px] text-[#5A6A7A]">{c.period}</span>
                </div>
                <div className="mb-4 h-12 flex items-center">
                  <CompanyLogo company={c.logo} variant="card" />
                </div>
                <p className="text-[13px] text-[#5A6A7A] font-light">{c.stats}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/case-studies"
              className="text-[14px] font-bold text-[#2574A7] hover:underline"
            >
              Read all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Differentiator ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Why Crest Partners</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 max-w-2xl">
          We don't introduce you to Costa Rica. We build your operation inside it.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Other providers */}
          <div className="border border-[#D8E2EA] rounded-[10px] p-8">
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-6">Other providers</p>
            <ul className="space-y-4">
              {[
                'Present and step back',
                'Multiple vendors',
                'Know the pitch, not the execution',
                'No investment in talent pipeline',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full border border-[#D8E2EA] shrink-0" />
                  <span className="text-[14px] text-[#5A6A7A] font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Crest Partners */}
          <div className="border border-[#00A79D] rounded-[10px] p-8 bg-[#F9FEFE]">
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-6">Crest Partners</p>
            <ul className="space-y-4">
              {[
                'Design, build and run end to end',
                'One partner, full accountability',
                '25+ years inside the market',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#00A79D] shrink-0 flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-black font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[#D8E2EA] grid grid-cols-2 gap-3">
              <div>
                <div className="text-xl font-bold text-[#2574A7]">$1B+</div>
                <div className="text-xs text-[#5A6A7A] mt-1">Client revenue</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#00A79D]">&lt;1%</div>
                <div className="text-xs text-[#5A6A7A] mt-1">Avg. turnover</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#2574A7]">500+</div>
                <div className="text-xs text-[#5A6A7A] mt-1">Jobs created</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#00A79D]">GPTW</div>
                <div className="text-xs text-[#5A6A7A] mt-1">Certified · 98/100 eNPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Forward CR ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">Social impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5">
              Growth only makes sense when everyone grows.
            </h2>
            <p className="text-[16px] text-[#5A6A7A] font-light leading-relaxed">
              That's why our founders co-created Forward Costa Rica — a non-profit committed to developing the next generation of tech professionals in Costa Rica. Not as a program we run, but as a cause we believe in.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build your team in Costa Rica?
          </h2>
          <p className="text-[17px] text-white/80 font-light mb-10">
            Tell us about your company — we'll design your expansion plan in 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors tracking-wide"
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
