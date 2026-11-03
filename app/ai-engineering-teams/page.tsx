import Link from 'next/link'
import { BookCallLink } from '@/components/CtaLinks'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'AI & ML Engineering Teams in Costa Rica | Crest Partners',
  description:
    'AI-ready engineering teams in Costa Rica: AI/ML engineers, data scientists and data engineers, hired under your own entity and assessed on AI.',
  path: '/ai-engineering-teams',
})

// Sources: Indeed Hiring Lab (Jul 2026); Microsoft Global AI Diffusion Report Q2 2026; ILIA 2025 (CENIA/MICITT);
// 66degrees press release (Apr 21, 2026). Crest practices confirmed by Marcela (Nov 2026).
const shift = [
  { val: '71%', label: 'of the recent rise in U.S. software engineering job postings is senior roles (Indeed Hiring Lab, 2026)' },
  { val: '37%', label: 'of that rise comes from roles with “AI” in the title (Indeed Hiring Lab, 2026)' },
]

const roles = [
  ['AI & Machine Learning Engineers', 'LLMs, generative AI, agents, MLOps and model deployment'],
  ['Data Scientists', 'Machine learning, statistical modeling and predictive analytics'],
  ['Data Engineers', 'Pipelines, data warehouses and analytics engineering — the foundation AI runs on'],
  ['Business Intelligence', 'Dashboards, reporting and data visualization'],
  ['AI-ready software engineers', 'Full-stack, backend and frontend engineers who build with AI tools every day'],
  ['Engineering leadership', 'Tech leads and managers who run lean, AI-assisted teams'],
]

const how = [
  {
    num: '01',
    title: 'AI team planning',
    text: 'We help you define which AI, ML and data roles you actually need — and which ones you don’t — so the team is right-sized from day one.',
  },
  {
    num: '02',
    title: 'AI-ready hiring',
    text: 'Every candidate is assessed on how they work with AI coding and productivity tools, on top of technical and cultural assessments.',
  },
  {
    num: '03',
    title: 'Your entity, your IP',
    text: 'The team is employed by your own Costa Rican entity — your models, data and code stay with your company, not a vendor.',
  },
  {
    num: '04',
    title: 'AI adoption, ongoing',
    text: 'Teams work with AI tools in their day-to-day, and we support AI adoption across your team as it grows.',
  },
]

export default function AiEngineeringTeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0E2233] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-4">AI &amp; ML engineering teams</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 max-w-3xl">
            AI-ready engineering teams in Costa Rica.
          </h1>
          <p className="text-[18px] text-white/80 leading-relaxed max-w-2xl mb-8">
            AI is changing how engineering teams are built: leaner teams, at every level, working with AI from day
            one. We build those teams in Costa Rica — under your brand, inside your own entity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <BookCallLink className="text-center bg-[#3CC4B9] text-[#0E2233] font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:bg-[#5FD4CB] transition-colors">
              Talk to a founder →
            </BookCallLink>
            <Link
              href="/expansion-plan"
              className="text-center border border-[#5B7A94] text-white font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:border-white transition-colors"
            >
              Get your expansion plan in 5 min →
            </Link>
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">The shift</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 max-w-2xl">
          Teams are getting smaller and more senior.
        </h2>
        <p className="text-[17px] text-[#3E4C59] leading-relaxed max-w-2xl mb-10">
          Companies are building leaner teams, with senior people who direct AI tools and own outcomes, and
          engineers at every level who work with AI every day. Costa Rica is where that talent already is.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {shift.map((s) => (
            <div key={s.val} className="border border-[#D8E2EA] rounded-[12px] p-6">
              <p className="text-[34px] font-bold text-[#2574A7] leading-none mb-2">{s.val}</p>
              <p className="text-[15px] text-[#5A6A7A] leading-snug">{s.label}</p>
            </div>
          ))}
          <div className="border border-[#D8E2EA] rounded-[12px] p-6">
            <p className="text-[34px] font-bold text-[#00A79D] leading-none mb-2">#1</p>
            <p className="text-[15px] text-[#5A6A7A] leading-snug">Costa Rica in Latin America for generative AI adoption — 29.7% of the working-age population (Microsoft, Q2 2026)</p>
          </div>
          <div className="border border-[#D8E2EA] rounded-[12px] p-6">
            <p className="text-[34px] font-bold text-[#00A79D] leading-none mb-2">3rd</p>
            <p className="text-[15px] text-[#5A6A7A] leading-snug">Costa Rica in Latin America for AI talent (Latin American AI Index, ILIA 2025)</p>
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">How we build AI-ready teams</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 max-w-2xl">
            From the first role to a full AI-ready operation.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {how.map((h) => (
              <div key={h.num} className="bg-white border border-[#D8E2EA] rounded-[12px] p-7">
                <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-3">{h.num}</p>
                <h3 className="text-[19px] font-bold text-black mb-2">{h.title}</h3>
                <p className="text-[16px] text-[#3E4C59] leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Profiles we hire</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 max-w-2xl">
          AI, ML and data roles — from junior to leadership.
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {roles.map(([r, d]) => (
            <div key={r} className="border-b border-[#D8E2EA] pb-5">
              <dt className="text-[17px] font-bold text-black mb-1">{r}</dt>
              <dd className="text-[16px] text-[#3E4C59] leading-relaxed">{d}</dd>
            </div>
          ))}
        </dl>
        <p className="text-[15px] text-[#5A6A7A] mt-8">
          See salary ranges and a Year-1 estimate for your team in the{' '}
          <Link href="/expansion-plan" className="text-[#2574A7] font-bold hover:underline">expansion plan generator</Link>.
        </p>
      </section>

      {/* Proof */}
      <section className="bg-[#0E2233] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-4">Proven with AI companies</p>
            <h2 className="text-3xl font-bold mb-5 leading-tight">We already build teams for companies at the front of AI.</h2>
            <ul className="space-y-4 text-[16px] text-white/80 leading-relaxed">
              <li>
                <Link href="/case-studies/66degrees" className="font-bold text-white hover:underline">66degrees</Link> — 11+ years building
                their Costa Rica engineering team. In 2026, 66degrees was named Google Cloud Partner of the Year for
                Artificial Intelligence, its fourth Partner of the Year distinction.
              </li>
              <li>
                <Link href="/case-studies/think-unlimited" className="font-bold text-white hover:underline">Think Unlimited</Link> — an AI
                &amp; sales tech company whose product is built 100% by its Costa Rica team.
              </li>
            </ul>
          </div>
          <div className="border border-white/10 rounded-[14px] p-8 self-start">
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-3">Technical leadership</p>
            <p className="text-[18px] font-bold mb-2">Roberto Fernandez, Partner</p>
            <p className="text-[16px] text-white/75 leading-relaxed mb-4">
              20+ years in software development, data engineering and systems architecture — from developer to
              Director of Engineering and VP of Product Engineering. Leads technical delivery, engineering hiring
              and AI strategy &amp; adoption for Crest Partners clients.
            </p>
            <Link href="/who-we-are" className="text-[15px] font-bold text-[#3CC4B9] hover:underline">Meet the team →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build your AI-ready team?</h2>
          <p className="text-[17px] text-white/80 mb-10">A founder replies within 24 hours — never a sales rep.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors">
              Talk to a founder →
            </BookCallLink>
            <Link href="/case-studies" className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors">
              Read the case studies →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
