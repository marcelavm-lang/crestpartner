import Link from 'next/link'
import { localHref, type Locale } from '@/lib/i18n'

// Facts: Crest assesses every hire on AI-tool use, its teams use AI tools day to day, and it offers
// AI team planning/adoption support (confirmed by Marcela, Nov 2026). Country data: Microsoft Global AI
// Diffusion Report Q2 2026; ILIA 2025. 66degrees: 2026 Google Cloud Partner of the Year for AI (press release, Apr 2026).
const COPY = {
  en: {
    eyebrow: 'Built for the AI era',
    title: 'Lean, AI-ready teams.',
    intro: (
      <>
        AI is changing how engineering teams are built. Companies need leaner teams that do more —
        engineers at every level who work with AI from day one, with the right senior leadership.
        That&apos;s what we build in Costa Rica.
      </>
    ),
    points: [
      {
        title: 'Leaner teams that ship more',
        text: 'We design right-sized teams — the right mix of senior and junior engineers — who work with AI tools every day. Fewer seats, more output.',
      },
      {
        title: 'Every hire assessed on AI',
        text: 'Every candidate is evaluated on how they work with AI coding and productivity tools — not just on what they already know.',
      },
      {
        title: 'AI team planning',
        text: 'We help you define the AI and ML roles you actually need, and support AI adoption across your whole team.',
      },
    ],
    stats: [
      { value: '#1', text: 'in Latin America for generative AI adoption (Microsoft, Q2 2026)' },
      { value: '3rd', text: 'in Latin America for AI talent (Latin American AI Index, ILIA 2025)' },
      { value: '11+ yrs', text: "building 66degrees' Costa Rica team — 2026 Google Cloud Partner of the Year for AI" },
    ],
    link: 'AI & ML engineering teams in Costa Rica →',
  },
  es: {
    eyebrow: 'Creados para la era de la IA',
    title: 'Equipos lean, preparados para la IA.',
    intro: (
      <>
        La IA está cambiando la forma en que se construyen los equipos de ingeniería. Las empresas
        necesitan equipos más lean que hagan más — ingenieros de todos los niveles que trabajen con IA
        desde el primer día, con el liderazgo senior adecuado. Eso es lo que construimos en Costa Rica.
      </>
    ),
    points: [
      {
        title: 'Equipos más lean que entregan más',
        text: 'Diseñamos equipos del tamaño justo — la combinación adecuada de ingenieros senior y junior — que trabajan con herramientas de IA todos los días. Menos puestos, más resultados.',
      },
      {
        title: 'Cada contratación, evaluada en IA',
        text: 'Evaluamos a cada candidato según cómo trabaja con herramientas de IA para programación y productividad — no solo por lo que ya sabe.',
      },
      {
        title: 'Planificación de equipos de IA',
        text: 'Le ayudamos a definir los roles de IA y ML que realmente necesita, y apoyamos la adopción de IA en todo su equipo.',
      },
    ],
    stats: [
      { value: '#1', text: 'en Latinoamérica en adopción de IA generativa (Microsoft, Q2 2026)' },
      { value: '3.º', text: 'en Latinoamérica en talento de IA (Índice Latinoamericano de Inteligencia Artificial, ILIA 2025)' },
      { value: '11+ años', text: 'construyendo el equipo de 66degrees en Costa Rica — 2026 Google Cloud Partner of the Year for AI' },
    ],
    link: 'Equipos de ingeniería de IA y ML en Costa Rica →',
  },
}

export default function AiEraSection({ locale = 'en' }: { locale?: Locale }) {
  const t = COPY[locale]
  return (
    <section className="bg-[#0E2233] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-4">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-tight">
          {t.title}
        </h2>
        <p className="text-[17px] text-white/75 leading-relaxed max-w-2xl mb-12">
          {t.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {t.points.map((p) => (
            <div key={p.title} className="border border-white/10 rounded-[12px] p-7">
              <h3 className="text-[18px] font-bold mb-3">{p.title}</h3>
              <p className="text-[16px] text-white/75 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {t.stats.map((st) => (
            <div key={st.value}>
              <p className="text-[32px] font-bold text-[#3CC4B9] leading-none mb-2">{st.value}</p>
              <p className="text-[15px] text-white/70 leading-snug">{st.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href={localHref('/ai-engineering-teams', locale)} className="text-[15px] font-bold text-[#3CC4B9] hover:underline">
            {t.link}
          </Link>
        </div>
      </div>
    </section>
  )
}
