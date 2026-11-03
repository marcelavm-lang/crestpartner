import Link from 'next/link'
import ClientVoices from '@/components/ClientVoices'
import CompanyLogo from '@/components/CompanyLogo'
import HomeHero from '@/components/HomeHero'
import HeroQuote from '@/components/HeroQuote'
import AiEraSection from '@/components/AiEraSection'
import { BookCallLink } from '@/components/CtaLinks'
import { pageMetadata } from '@/lib/metadata'
import { localHref } from '@/lib/i18n'

export const metadata = pageMetadata({
  title: 'Su equipo de ingeniería en Costa Rica | Crest Partners',
  description: 'Creamos su propia empresa en Costa Rica, contratamos a su equipo de ingeniería y administramos la operación. Su equipo, su marca. No es outsourcing.',
  path: '/es',
})

const services = [
  {
    num: '01',
    title: 'Lanzar',
    headline: 'Lance su operación en Costa Rica',
    text: 'Creamos su propia entidad legal en Costa Rica — su empresa, su marca, su operación. Su equipo trabaja directamente para usted, no a través de nosotros. Nos encargamos de toda la infraestructura legal, de cumplimiento y de back office que la respalda.',
    tag: 'Operativo en 30 días.',
  },
  {
    num: '02',
    title: 'Construir',
    headline: 'Construya su organización de ingeniería',
    text: 'Diseñamos la estructura del equipo y la capa de liderazgo, y luego formamos equipos completos de ingeniería, producto, datos e IA alineados con los objetivos de su negocio — y los mantenemos en crecimiento.',
    tag: 'Menos del 1% de rotación involuntaria.',
  },
  {
    num: '03',
    title: 'Operar',
    headline: 'Administramos su back office — por completo',
    text: 'Contabilidad, asuntos legales, cumplimiento, administración de recursos humanos y gestión de oficinas, de forma continua.',
    tag: 'Responsabilidad total.',
  },
]

const cases = [
  { name: 'TARGUSinfo', slug: 'targusinfo', logo: 'targusinfo' as const, period: '2001–2007 · antes de Crest', badge: 'Operaciones de datos', stats: '200+ colaboradores · exit de $650M con Neustar' },
  { name: 'Infutor (hoy Verisk)', slug: 'verisk', logo: 'verisk' as const, period: '2007–2014', badge: 'Identidad del consumidor', stats: '55x en ingresos · exit de $225M' },
  { name: '66degrees', slug: '66degrees', logo: '66degrees' as const, period: '2014–actualidad', badge: 'Cloud y DevOps', stats: '11+ años · <1% de rotación involuntaria' },
  { name: 'LTV Co.', slug: 'ltv-co', logo: 'ltv-co' as const, period: '2015–2025', badge: 'Datos del consumidor', stats: '13x en ingresos · exit de $400M · eNPS de 98/100 en LTV Co.' },
  { name: 'Think Unlimited', slug: 'think-unlimited', logo: 'think-unlimited' as const, period: '2023–actualidad', badge: 'IA y tecnología de ventas', stats: '<1% de rotación involuntaria · 100% del producto construido en CR' },
  { name: 'Strategio', slug: 'strategio', logo: 'strategio' as const, period: '2025–actualidad', badge: 'Operaciones de talento', stats: '8 colaboradores · Vertical de talento' },
]

const badgeColor: Record<string, string> = {
  'Operaciones de datos': 'bg-[#F4F7FA] text-[#5A6A7A]',
  'Identidad del consumidor': 'bg-[#F4F7FA] text-[#5A6A7A]',
  'Cloud y DevOps': 'bg-[#E6F7F6] text-[#00A79D]',
  'Datos del consumidor': 'bg-[#EBF4FA] text-[#2574A7]',
  'IA y tecnología de ventas': 'bg-[#E6F7F6] text-[#00A79D]',
  'Operaciones de talento': 'bg-[#E6F7F6] text-[#00A79D]',
}

export default function HomePageEs() {
  return (
    <>
      <HomeHero locale="es" />
      <HeroQuote locale="es" />

      {/* ── Services ── */}
      <section className="bg-[#F7FAFB] w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="eyebrow mb-4">Qué hacemos</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 max-w-xl">
          Un solo socio. Cada capa de su operación.
        </h2>
        <p className="text-[16px] text-[#3E4C59] font-normal max-w-xl mb-12">
          Establecemos su entidad legal en Costa Rica, diseñamos y construimos su organización de ingeniería
          bajo su marca, y administramos la infraestructura que la respalda — legal, recursos humanos, planilla y
          cumplimiento. Su gente trabaja para usted. Nosotros nos aseguramos de que todo a su alrededor funcione —
          una alternativa nearshore al outsourcing y a los EOR, donde el equipo de ingeniería es suyo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.num} className="border border-[#D8E2EA] rounded-[10px] p-8 hover:border-[#2574A7] transition-colors">
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">
                {s.num} — {s.title}
              </p>
              <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">{s.headline}</h3>
              <p className="text-[#3E4C59] font-normal leading-relaxed mb-6 text-[16px]">{s.text}</p>
              <span className="inline-block text-[12px] font-bold tracking-wide text-[#2574A7] bg-[#EBF4FA] px-3 py-1.5 rounded-[6px]">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={localHref('/services', 'es')}
            className="text-[14px] font-bold text-[#2574A7] hover:underline"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </div>
      </section>

      {/* ── Case Studies Preview ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Casos de éxito</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 max-w-2xl">
            Algunas empresas empezaron desde cero. Ninguna se quedó ahí.
          </h2>
          <p className="text-[16px] text-[#3E4C59] font-normal mb-12">
            Una trayectoria de operaciones completas construidas desde la base — en distintas industrias, tamaños de equipo y plazos. Estas son algunas de ellas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <Link key={c.name} href={localHref(`/case-studies/${c.slug}`, 'es')} className="bg-white border border-[#D8E2EA] rounded-[10px] p-7 hover:border-[#2574A7] transition-colors block">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[12px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] ${badgeColor[c.badge] || 'bg-[#F4F7FA] text-[#5A6A7A]'}`}>
                    {c.badge}
                  </span>
                  <span className="text-[13px] text-[#5A6A7A]">{c.period}</span>
                </div>
                <div className="mb-4 h-12 flex items-center">
                  <CompanyLogo company={c.logo} variant="card" />
                </div>
                <p className="text-[14px] text-[#5A6A7A] font-normal">{c.stats}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href={localHref('/case-studies', 'es')}
              className="text-[14px] font-bold text-[#2574A7] hover:underline"
            >
              Ver todos los casos de éxito →
            </Link>
          </div>
        </div>
      </section>

      <AiEraSection locale="es" />

      {/* ── Differentiator ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Por qué Crest Partners</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 max-w-2xl">
          Esto no es outsourcing. Es su operación — construida dentro de Costa Rica.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Otros proveedores */}
          <div className="border border-[#D8E2EA] rounded-[10px] p-8">
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-6">Otros proveedores</p>
            <ul className="space-y-4">
              {[
                'Su equipo es empleado del proveedor',
                'Su IP está protegida solo por contrato',
                'Varios proveedores — sin un único responsable',
                'Alta rotación, ciclos constantes de reclutamiento',
                'Irse significa empezar de cero',
                'Una estructura genérica, no diseñada para su empresa',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full border border-[#D8E2EA] shrink-0" />
                  <span className="text-[16px] text-[#3E4C59] font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Crest Partners */}
          <div className="border border-[#00A79D] rounded-[10px] p-8 bg-[#F9FEFE]">
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-6">Crest Partners</p>
            <ul className="space-y-4">
              {[
                'Diseñamos, construimos y operamos de principio a fin',
                'Un solo socio, responsabilidad total',
                '20 años dentro del mercado',
                'Costa Rica como su hub en Latinoamérica — no solo un equipo, un ancla regional',
                'Su entidad, su IP, su gente',
                'Menos del 1% de rotación involuntaria, por diseño',
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
                <div className="text-xl font-bold text-[#00A79D]">97.6</div>
                <div className="text-sm text-[#5A6A7A] mt-1">Trust Index de GPTW en LTV Co. — uno de los puntajes más altos a nivel mundial</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#2574A7]">98/100</div>
                <div className="text-sm text-[#5A6A7A] mt-1">eNPS en LTV Co.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientVoices locale="es" />

      {/* ── Forward CR ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">Impacto social</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5">
              El crecimiento solo tiene sentido cuando todos crecen.
            </h2>
            <p className="text-[16px] text-[#3E4C59] font-normal leading-relaxed">
              Por eso nuestra cofundadora, Marcela Villalta, cocreó Forward Costa Rica — una organización sin fines de lucro comprometida con formar a la próxima generación de profesionales en tecnología de Costa Rica. No como un programa que dirigimos, sino como una causa en la que creemos.
            </p>
            <a
              href="https://www.fwdcostarica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 border border-[#D8E2EA] rounded-[8px] text-sm font-bold text-[#5A6A7A] hover:border-[#2574A7] hover:text-[#2574A7] transition-colors"
            >
              Visite Forward Costa Rica →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para construir su equipo en Costa Rica?
          </h2>
          <p className="text-[17px] text-white/80 font-normal mb-10">
            Cuéntenos sobre su empresa — diseñaremos su plan de expansión en 48 horas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors tracking-wide">
              Agende una llamada de 30 min
            </BookCallLink>
            <Link
              href={localHref('/case-studies', 'es')}
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              Lea los casos de éxito →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
