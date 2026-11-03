import Link from 'next/link'
import { BookCallLink } from '@/components/CtaLinks'
import { pageMetadata } from '@/lib/metadata'
import { localHref } from '@/lib/i18n'

export const metadata = pageMetadata({
  title: 'Servicios: Lanzar, Construir y Operar | Crest Partners',
  description: 'Entidad legal, reclutamiento de ingeniería y back office completo para empresas de tecnología que arman su propio equipo en Costa Rica.',
  path: '/es/services',
})

const launchChecklist = [
  'Creación de la entidad legal — registro, estructura y documentación',
  'Administración de la entidad legal — su gente trabaja directamente para usted, bajo su marca, con pleno cumplimiento de la legislación laboral costarricense',
  'Contabilidad y configuración financiera — teneduría de libros, cumplimiento tributario y reportes',
  'Instalación de oficinas — espacio, equipo e infraestructura operativa',
  'Cumplimiento regulatorio — monitoreo continuo y actualizaciones legales',
]

const buildChecklist = [
  'Diseño organizacional — estructura del equipo, roles y capa de liderazgo, alineados con sus objetivos de negocio',
  'Equipos completos de ingeniería, producto, datos, IA, QA y diseño — no solo contrataciones individuales',
  'Planificación de equipos de IA — los roles de IA y ML que realmente necesita, más apoyo para adoptar la IA en todo su equipo',
  'Contratación preparada para la IA — cada candidato se evalúa según cómo trabaja con herramientas de IA para programación y productividad',
  'Descripciones de puesto y estrategia de reclutamiento a la medida de su stack',
  'Evaluaciones técnicas y culturales — nunca tomamos atajos en la calidad',
  'Onboarding e integración cultural a su empresa y sus valores',
  'Planilla, beneficios y RR. HH. gestionados de principio a fin en su nombre',
  'Programas de retención — cultura, crecimiento y compromiso incorporados',
]

const operateChecklist = [
  'Contabilidad mensual — teneduría de libros, estados financieros y declaraciones de impuestos',
  'Cumplimiento legal continuo — monitoreo regulatorio y actualizaciones de la legislación laboral',
  'Administración de RR. HH. — relaciones laborales, beneficios y desempeño',
  'Gestión de oficinas e instalaciones — operación diaria y relación con proveedores',
  'Reportes y visibilidad — actualizaciones periódicas para que siempre sepa qué está pasando',
]

const proofCards = [
  { company: 'LTV Co.', result: 'Exit de $400M', note: 'Hub de ingeniería de 120 personas · 97.6 GPTW Trust Index · 98/100 eNPS · <1% de rotación involuntaria' },
  { company: '66degrees', result: '<1% de rotación involuntaria', note: '4 veces Google Cloud Partner of the Year — 2026 en IA · más de 11 años' },
  { company: 'Infutor (hoy Verisk)', result: 'Crecimiento de ingresos de 55x', note: 'Exit de $225M · Primera empresa de inteligencia de datos en CR' },
]

// Respuestas para CTOs — traducción de las mismas preguntas de /services (también se usan en el JSON-LD FAQPage).
const ctoFaq = [
  {
    q: '¿Cuánto tiempo toma contratar?',
    a: 'Alrededor de un mes, desde que acordamos los requisitos del puesto hasta la contratación firmada.',
  },
  {
    q: '¿Qué perfiles pueden contratar?',
    a: 'Ingenieros de software (full-stack, backend, frontend), ingenieros de IA y machine learning, científicos de datos, ingenieros de datos, analistas de inteligencia de negocios, DevOps y cloud, QA y automatización, product y project managers, diseñadores UI/UX y analistas de negocio — desde nivel junior hasta liderazgo de ingeniería.',
  },
  {
    q: '¿Cómo evalúan a los candidatos?',
    a: 'Redactamos la descripción del puesto y la estrategia de reclutamiento en función de su stack, y luego aplicamos evaluaciones técnicas y culturales. Sin atajos en la calidad.',
  },
  {
    q: '¿Sus ingenieros trabajan con IA?',
    a: 'Sí. Cada candidato se evalúa según cómo trabaja con herramientas de IA para programación y productividad, los equipos las usan en su día a día, y le ayudamos a planificar los roles de IA y ML que necesita.',
  },
  {
    q: '¿De quién es el código y la propiedad intelectual (IP)?',
    a: 'De su empresa. El equipo está contratado por su propia entidad costarricense, así que la IP queda en su entidad — no en manos de un proveedor.',
  },
  {
    q: '¿Cómo trabaja el equipo con el nuestro?',
    a: 'Hora del Centro todo el año, con coincidencia total con el horario laboral de EE. UU. Integramos a cada persona a su empresa, su cultura y su marca — trabajan como parte de su equipo, no al lado de él.',
  },
  {
    q: '¿Y si más adelante queremos administrarlo nosotros?',
    a: 'Ya es suyo. La entidad, las personas y el conocimiento se quedan con su empresa — no hay nada que transferir.',
  },
]

const steps = [
  { num: '01', title: 'Llamada inicial', sub: '48 horas', desc: 'Conversamos, entendemos sus objetivos, su stack y sus plazos.' },
  { num: '02', title: 'Plan de expansión a la medida', sub: 'Hecho para usted', desc: 'Diseñamos su operación en Costa Rica desde cero — estructura, cronograma, costos.' },
  { num: '03', title: 'Lanzamiento y reclutamiento', sub: 'Mes 1', desc: 'Entidad legal y back office en funcionamiento en 30 días. Cada contratación toma alrededor de un mes desde que se acuerdan los requisitos.' },
  { num: '04', title: 'Operación continua', sub: 'Permanente', desc: 'RR. HH., contabilidad, cumplimiento, cultura — nosotros lo gestionamos para que usted no tenga que hacerlo.' },
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
          <span className="text-[14px] text-black font-normal leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ServicesPageEs() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Todo lo que necesita para operar en Costa Rica — bajo un mismo techo.
            </h1>
            <p className="text-[16px] font-normal text-[#3E4C59] leading-relaxed mb-8">
              No le entregamos una lista de proveedores. Gestionamos nosotros mismos cada capa de su operación en Costa Rica — un solo equipo, un solo responsable.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookCallLink className="px-6 py-3 bg-[#2574A7] text-white text-sm font-bold rounded-lg hover:bg-[#1f6391] transition-colors">
                Agende una llamada de 30 min
              </BookCallLink>
              <Link href={localHref('/case-studies', 'es')} className="px-6 py-3 border border-gray-200 text-sm rounded-lg">Vea los casos de éxito →</Link>
            </div>
          </div>
          {/* Columna derecha — 3 service cards */}
          <div className="flex flex-col gap-3">
            <Link href="#launch" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#00A79D] hover:bg-[#F9FEFE] transition-colors block">
              <div className="text-xs font-bold text-[#00A79D] tracking-widest uppercase mb-2">01 — Lanzar</div>
              <div className="text-base font-bold text-gray-900 mb-1">Lance su operación en Costa Rica</div>
              <div className="text-sm font-normal text-[#5A6A7A]">Entidad legal, back office y cumplimiento — en plena operación en 30 días.</div>
            </Link>
            <Link href="#build" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#00A79D] hover:bg-[#F9FEFE] transition-colors block">
              <div className="text-xs font-bold text-[#00A79D] tracking-widest uppercase mb-2">02 — Construir</div>
              <div className="text-base font-bold text-gray-900 mb-1">Construya su organización de ingeniería</div>
              <div className="text-sm font-normal text-[#5A6A7A]">Diseño organizacional, equipos multidisciplinarios completos, reclutamiento y retención — menos de 1% de rotación involuntaria.</div>
            </Link>
            <Link href="#operate" className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#00A79D] hover:bg-[#F9FEFE] transition-colors block">
              <div className="text-xs font-bold text-[#00A79D] tracking-widest uppercase mb-2">03 — Operar</div>
              <div className="text-base font-bold text-gray-900 mb-1">Gestionamos su back office — por completo</div>
              <div className="text-sm font-normal text-[#5A6A7A]">Contabilidad, legal, RR. HH. y gestión de oficinas — de forma continua, todos los días.</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service Block 1: Launch ── */}
      <section id="launch" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">01 — Lanzar</p>
            <h2 className="text-3xl font-bold text-black mb-4 leading-snug">
              Lance su operación en Costa Rica en 30 días
            </h2>
            <p className="text-[#3E4C59] font-normal leading-relaxed mb-8 text-[16px]">
              Entidad legal, cumplimiento, back office e instalación de oficinas — en plena operación
              antes de su primera contratación.
            </p>
            <Checklist items={launchChecklist} />
          </div>

          {/* Visual panel */}
          <div className="bg-[#F4F7FA] rounded-[12px] p-8 border border-[#D8E2EA]">
            <div className="border border-[#D8E2EA] bg-white rounded-[10px] p-5 mb-6">
              <p className="text-[28px] font-bold text-[#2574A7] leading-none mb-1">30 días</p>
              <p className="text-[13px] text-[#5A6A7A] font-normal">tiempo promedio hasta la plena operación</p>
            </div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Cronograma</p>
            {/* TODO: confirm timelines with legal (Marco) — mantener sincronizado con /services */}
            <div className="space-y-3">
              {[
                { day: 'Semana 1', label: 'Arranque y registro de la entidad' },
                { day: 'Semanas 1–3', label: 'Inscripciones, banca y configuración de planilla' },
                { day: 'Semanas 2–4', label: 'Back office activo · reclutamiento en marcha' },
                { day: 'Día 30', label: 'En plena operación', highlight: true },
              ].map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center gap-4 p-3 rounded-[8px] ${
                    item.highlight ? 'bg-[#00A79D] text-white' : 'bg-white border border-[#D8E2EA]'
                  }`}
                >
                  <span className={`text-[12px] font-bold w-[68px] shrink-0 ${item.highlight ? 'text-white/80' : 'text-[#5A6A7A]'}`}>
                    {item.day}
                  </span>
                  <span className={`text-[14px] font-medium ${item.highlight ? 'text-white' : 'text-black'}`}>
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
                <p className="text-xs font-bold tracking-widest uppercase text-[#5A6A7A] mb-3">Resultados</p>
                <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#00A79D]">&lt;1%</div>
                  <div className="text-xs text-[#5A6A7A] mt-1">Rotación involuntaria</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#2574A7]">$1B+</div>
                  <div className="text-xs text-[#5A6A7A] mt-1">Ingresos combinados de las empresas cliente</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#2574A7]">1000+</div>
                  <div className="text-xs text-[#5A6A7A] mt-1">Empleos tecnológicos de alto valor creados</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#00A79D]">97.6</div>
                  <div className="text-xs text-[#5A6A7A] mt-1">GPTW Trust Index en LTV Co. — entre los puntajes más altos del mundo</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#2574A7]">98/100</div>
                  <div className="text-xs text-[#5A6A7A] mt-1">eNPS en LTV Co.</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#2574A7]">20</div>
                  <div className="text-xs text-[#5A6A7A] mt-1">Años reclutando en el mercado tecnológico de Costa Rica</div>
                </div>
              </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">02 — Construir</p>
              <h2 className="text-3xl font-bold text-black mb-4 leading-snug">
                Construya su organización de ingeniería
              </h2>
              <p className="text-[#3E4C59] font-normal leading-relaxed mb-4 text-[16px]">
                No nos limitamos a llenar puestos. Diseñamos la organización — estructura, roles y liderazgo —
                y armamos equipos completos de ingeniería, producto, datos e IA alineados con
                sus objetivos de negocio.
              </p>
              <p className="text-[#3E4C59] font-normal leading-relaxed mb-8 text-[16px]">
                Es lo que nuestros fundadores han hecho durante más de 20 años: departamentos creados desde cero,
                productos de datos y software lanzados, y hubs que crecieron de un puñado de personas a más de 200.
              </p>
              <Checklist items={buildChecklist} />
            </div>
          </div>
        </div>
      </section>

      {/* ── For engineering leaders ── */}
      <section id="engineering" className="max-w-7xl mx-auto px-6 py-20">
        <script
          type="application/ld+json"
          // FAQPage structured data from the CTO questions shown below (same text, so Google can show it in results)
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: ctoFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
            }),
          }}
        />
        <p className="eyebrow mb-4">Para líderes de ingeniería</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 max-w-2xl">
          Lo primero que nos preguntan los CTOs.
        </h2>
        <p className="text-[17px] text-[#3E4C59] font-normal leading-relaxed mb-12 max-w-2xl">
          Respuestas directas sobre velocidad de contratación, talento, calidad y propiedad.
        </p>
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctoFaq.map((f) => (
            <div key={f.q} className="border border-[#D8E2EA] rounded-[12px] p-7 bg-white">
              <dt className="text-[17px] font-bold text-black mb-3">{f.q}</dt>
              <dd className="text-[16px] text-[#3E4C59] font-normal leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Service Block 3: Operate ── */}
      <section id="operate" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">03 — Operar</p>
            <h2 className="text-3xl font-bold text-black mb-4 leading-snug">
              Gestionamos su back office — por completo y de forma continua
            </h2>
            <p className="text-[#3E4C59] font-normal leading-relaxed mb-8 text-[16px]">
              Contabilidad, legal, cumplimiento, administración de RR. HH. y gestión de oficinas — de forma continua, todos los días.
            </p>
            <Checklist items={operateChecklist} />
          </div>

          {/* Visual panel */}
          <div className="bg-[#F4F7FA] rounded-[12px] p-8 border border-[#D8E2EA]">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
              <div className="text-2xl font-bold text-[#2574A7] mb-1">20 años</div>
              <div className="text-[16px] font-normal text-[#3E4C59] leading-relaxed">de experiencia operativa — contabilidad, legal, RR. HH. y oficinas en un solo equipo.</div>
            </div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Cobertura del back office</p>
            <div className="grid grid-cols-2 gap-3">
              {['Contabilidad', 'Legal', 'RR. HH.', 'Oficinas'].map((area) => (
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
      <section className="bg-[#0E2233] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">Resultados comprobados</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-xl">
            El modelo funciona. Estas empresas lo demuestran.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofCards.map((c) => (
              <div key={c.company} className="border border-white/10 rounded-[10px] p-7">
                <p className="text-[22px] font-bold text-[#2574A7] mb-2">{c.result}</p>
                <p className="text-[16px] font-bold text-white mb-2">{c.company}</p>
                <p className="text-[14px] text-white/60 font-normal">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Cómo funciona</p>
        <h2 className="text-3xl font-bold text-black mb-12 max-w-xl">
          De la primera llamada a la plena operación — esto es lo que puede esperar.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="border border-[#D8E2EA] rounded-[10px] p-6">
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{step.num}</p>
              <h3 className="text-[16px] font-bold text-black mb-1">{step.title}</h3>
              <p className="text-[13px] text-[#2574A7] font-bold mb-3">{step.sub}</p>
              <p className="text-[#3E4C59] font-normal leading-relaxed text-[16px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para armar su equipo en Costa Rica?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors">
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
