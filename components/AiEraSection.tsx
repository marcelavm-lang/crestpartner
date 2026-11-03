import Link from 'next/link'

// Facts: Crest assesses every hire on AI-tool use, its teams use AI tools day to day, and it offers
// AI team planning/adoption support (confirmed by Marcela, Nov 2026). Country data: Microsoft Global AI
// Diffusion Report Q2 2026; ILIA 2025. 66degrees: 2026 Google Cloud Partner of the Year for AI (press release, Apr 2026).
const points = [
  {
    title: 'Leaner teams that ship more',
    text: 'We design right-sized teams of senior engineers who work with AI tools every day — fewer seats, more output.',
  },
  {
    title: 'Every hire assessed on AI',
    text: 'Every candidate is evaluated on how they work with AI coding and productivity tools — not just on what they already know.',
  },
  {
    title: 'AI team planning',
    text: 'We help you define the AI and ML roles you actually need, and support AI adoption across your whole team.',
  },
]

export default function AiEraSection() {
  return (
    <section className="bg-[#0E2233] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-4">Built for the AI era</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-tight">
          Smaller, senior, AI-ready teams.
        </h2>
        <p className="text-[17px] text-white/75 leading-relaxed max-w-2xl mb-12">
          AI is changing how engineering teams are built. Companies need fewer people doing more — senior
          engineers who work with AI from day one. That&apos;s what we build in Costa Rica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {points.map((p) => (
            <div key={p.title} className="border border-white/10 rounded-[12px] p-7">
              <h3 className="text-[18px] font-bold mb-3">{p.title}</h3>
              <p className="text-[16px] text-white/75 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
          <div>
            <p className="text-[32px] font-bold text-[#3CC4B9] leading-none mb-2">#1</p>
            <p className="text-[15px] text-white/70 leading-snug">in Latin America for generative AI adoption (Microsoft, Q2 2026)</p>
          </div>
          <div>
            <p className="text-[32px] font-bold text-[#3CC4B9] leading-none mb-2">3rd</p>
            <p className="text-[15px] text-white/70 leading-snug">in Latin America for AI talent (Latin American AI Index, ILIA 2025)</p>
          </div>
          <div>
            <p className="text-[32px] font-bold text-[#3CC4B9] leading-none mb-2">11+ yrs</p>
            <p className="text-[15px] text-white/70 leading-snug">building 66degrees&apos; Costa Rica team — 2026 Google Cloud Partner of the Year for AI</p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/ai-engineering-teams" className="text-[15px] font-bold text-[#3CC4B9] hover:underline">
            AI &amp; ML engineering teams in Costa Rica →
          </Link>
        </div>
      </div>
    </section>
  )
}
