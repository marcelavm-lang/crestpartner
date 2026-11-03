import Link from 'next/link'
import { BookCallLink } from '@/components/CtaLinks'
import { pageMetadata } from '@/lib/metadata'
import { localHref } from '@/lib/i18n'

export const metadata = pageMetadata({
  title: 'Equipos de IA y ML en Costa Rica | Crest Partners',
  description:
    'Equipos preparados para la IA en Costa Rica: ingenieros de IA/ML, científicos e ingenieros de datos, contratados bajo su propia entidad y evaluados en IA.',
  path: '/es/ai-engineering-teams',
})

// Sources: Indeed Hiring Lab (Jul 2026); Microsoft Global AI Diffusion Report Q2 2026; ILIA 2025 (CENIA/MICITT);
// 66degrees press release (Apr 21, 2026). Crest practices confirmed by Marcela (Nov 2026). Mirror of /ai-engineering-teams.
const shift = [
  { val: '71%', label: 'del aumento reciente de vacantes de ingeniería de software en EE. UU. corresponde a puestos senior (Indeed Hiring Lab, 2026)' },
  { val: '37%', label: 'de ese aumento proviene de puestos con “IA” en el título (Indeed Hiring Lab, 2026)' },
]

const roles = [
  ['Ingenieros de IA y Machine Learning', 'LLMs, IA generativa, agentes, MLOps y despliegue de modelos'],
  ['Científicos de datos', 'Machine learning, modelado estadístico y analítica predictiva'],
  ['Ingenieros de datos', 'Pipelines, data warehouses y analytics engineering — la base sobre la que funciona la IA'],
  ['Inteligencia de negocios', 'Dashboards, reportes y visualización de datos'],
  ['Ingenieros de software preparados para la IA', 'Ingenieros full-stack, backend y frontend que construyen con herramientas de IA todos los días'],
  ['Liderazgo de ingeniería', 'Tech leads y gerentes que dirigen equipos lean, asistidos por IA'],
]

const how = [
  {
    num: '01',
    title: 'Planificación de equipos de IA',
    text: 'Le ayudamos a definir qué roles de IA, ML y datos realmente necesita — y cuáles no — para que el equipo tenga el tamaño adecuado desde el primer día.',
  },
  {
    num: '02',
    title: 'Contratación preparada para la IA',
    text: 'Cada candidato se evalúa según cómo trabaja con herramientas de IA para programación y productividad, además de las evaluaciones técnicas y culturales.',
  },
  {
    num: '03',
    title: 'Su entidad, su propiedad intelectual (IP)',
    text: 'El equipo está contratado por su propia entidad costarricense — sus modelos, datos y código se quedan con su empresa, no con un proveedor.',
  },
  {
    num: '04',
    title: 'Adopción de IA, de forma continua',
    text: 'Los equipos trabajan con herramientas de IA en su día a día, y apoyamos la adopción de la IA en todo su equipo a medida que crece.',
  },
]

export default function AiEngineeringTeamsPageEs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0E2233] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-4">Equipos de ingeniería de IA y ML</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 max-w-3xl">
            Equipos de ingeniería preparados para la IA en Costa Rica.
          </h1>
          <p className="text-[18px] text-white/80 leading-relaxed max-w-2xl mb-8">
            La IA está cambiando la forma de armar equipos de ingeniería: equipos más lean, en todos los niveles, trabajando
            con IA desde el primer día. Nosotros armamos esos equipos en Costa Rica — bajo su marca, dentro de su propia entidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <BookCallLink className="text-center bg-[#3CC4B9] text-[#0E2233] font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:bg-[#5FD4CB] transition-colors">
              Hable con un fundador →
            </BookCallLink>
            <Link
              href={localHref('/expansion-plan', 'es')}
              className="text-center border border-[#5B7A94] text-white font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:border-white transition-colors"
            >
              Arme su plan de expansión en 5 min →
            </Link>
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">El cambio</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 max-w-2xl">
          Los equipos son cada vez más pequeños y más senior.
        </h2>
        <p className="text-[17px] text-[#3E4C59] leading-relaxed max-w-2xl mb-10">
          Las empresas están armando equipos más lean, con personas senior que dirigen herramientas de IA y responden por
          los resultados, e ingenieros de todos los niveles que trabajan con IA todos los días. Costa Rica es donde ese talento ya está.
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
            <p className="text-[15px] text-[#5A6A7A] leading-snug">Costa Rica en América Latina en adopción de IA generativa — el 29.7% de la población en edad de trabajar (Microsoft, Q2 2026)</p>
          </div>
          <div className="border border-[#D8E2EA] rounded-[12px] p-6">
            <p className="text-[34px] font-bold text-[#00A79D] leading-none mb-2">3.º</p>
            <p className="text-[15px] text-[#5A6A7A] leading-snug">Costa Rica en América Latina en talento de IA (Latin American AI Index, ILIA 2025)</p>
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Cómo armamos equipos preparados para la IA</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 max-w-2xl">
            Del primer puesto a una operación completa preparada para la IA.
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
        <p className="eyebrow mb-4">Perfiles que contratamos</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 max-w-2xl">
          Roles de IA, ML y datos — desde nivel junior hasta liderazgo.
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
          Vea rangos salariales y un estimado del primer año para su equipo en el{' '}
          <Link href={localHref('/expansion-plan', 'es')} className="text-[#2574A7] font-bold hover:underline">generador de planes de expansión</Link> (en inglés).
        </p>
      </section>

      {/* Proof */}
      <section className="bg-[#0E2233] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-4">Probado con empresas de IA</p>
            <h2 className="text-3xl font-bold mb-5 leading-tight">Ya armamos equipos para empresas a la vanguardia de la IA.</h2>
            <ul className="space-y-4 text-[16px] text-white/80 leading-relaxed">
              <li>
                <Link href={localHref('/case-studies/66degrees', 'es')} className="font-bold text-white hover:underline">66degrees</Link> — más de 11 años
                construyendo su equipo de ingeniería en Costa Rica. En 2026, 66degrees fue nombrada Google Cloud Partner of the Year en
                Inteligencia Artificial, su cuarta distinción como Partner of the Year.
              </li>
              <li>
                <Link href={localHref('/case-studies/think-unlimited', 'es')} className="font-bold text-white hover:underline">Think Unlimited</Link> — una
                empresa de IA y tecnología de ventas cuyo producto lo construye al 100% su equipo en Costa Rica.
              </li>
            </ul>
          </div>
          <div className="border border-white/10 rounded-[14px] p-8 self-start">
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#3CC4B9] mb-3">Liderazgo técnico</p>
            <p className="text-[18px] font-bold mb-2">Roberto Fernandez, Socio</p>
            <p className="text-[16px] text-white/75 leading-relaxed mb-4">
              Más de 20 años en desarrollo de software, ingeniería de datos y arquitectura de sistemas — de desarrollador a
              Director of Engineering y VP of Product Engineering. Lidera la entrega técnica, la contratación de ingeniería
              y la estrategia y adopción de IA para los clientes de Crest Partners.
            </p>
            <Link href={localHref('/who-we-are', 'es')} className="text-[15px] font-bold text-[#3CC4B9] hover:underline">Conozca al equipo →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para armar su equipo preparado para la IA?</h2>
          <p className="text-[17px] text-white/80 mb-10">Un fundador responde en menos de 24 horas — nunca un vendedor.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors">
              Hable con un fundador →
            </BookCallLink>
            <Link href={localHref('/case-studies', 'es')} className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors">
              Lea los casos de éxito →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
