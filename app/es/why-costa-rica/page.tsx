import Link from 'next/link'
import { BookCallLink } from '@/components/CtaLinks'
import { pageMetadata } from '@/lib/metadata'
import { localHref } from '@/lib/i18n'

export const metadata = pageMetadata({
  title: 'Por qué Costa Rica para su equipo | Crest Partners',
  description: 'Estabilidad, talento preparado para la IA, inglés, horario alineado con EE. UU. y retención: por qué las empresas de tecnología arman su equipo en Costa Rica.',
  path: '/es/why-costa-rica',
})

const heroStats = [
  { value: '75+', label: 'años de democracia ininterrumpida' },
  { value: 'CST', label: 'Hora del Centro todo el año — sin horario de verano' },
  { value: '#1', label: 'en América Latina en adopción de IA generativa (Microsoft, Q2 2026)' },
  { value: '1948', label: 'Abolición del ejército — presupuesto redirigido a la educación' },
  { value: '3.º', label: 'en América Latina en talento de IA (Latin American AI Index, ILIA 2025)' },
  { value: '516', label: 'puntaje de inglés — por encima del promedio mundial de 488 (EF EPI 2025)' },
]

const valueCards = [
  {
    val: '<1%',
    title: 'Rotación involuntaria',
    text: 'Reemplazar a un ingeniero senior cuesta entre 50% y 200% de su salario anual. Menos de 1% de rotación involuntaria es una ventaja financiera que se acumula.',
    color: 'text-[#2574A7]',
  },
  {
    val: '11+',
    title: 'Años — nuestra alianza activa más larga',
    text: 'Cuando un equipo se queda, el conocimiento institucional se acumula. Los ingenieros que construyeron su sistema siguen ahí para escalarlo.',
    color: 'text-[#00A79D]',
  },
  {
    val: '0–2',
    title: 'Horas de diferencia con cualquier oficina en EE. UU.',
    text: 'Hora del Centro todo el año, sin horario de verano. Coincidencia total con el horario laboral de EE. UU. — sin traspasos de un día para otro.',
    color: 'text-[#2574A7]',
  },
]

const reasons = [
  {
    num: '01',
    title: 'Estabilidad política y económica',
    text: 'Más de 75 años de continuidad democrática — uno de los países más estables de América Latina.',
  },
  {
    num: '02',
    title: 'Un inglés que funciona con equipos de EE. UU.',
    text: 'Por encima del promedio mundial en el EF English Proficiency Index. Ingenieros que se comunican con claridad, colaboran con fluidez y se integran sin fricciones con equipos de EE. UU.',
  },
  {
    num: '03',
    title: 'Universidades de primer nivel',
    text: 'UCR, TEC, ULACIT — llevamos 20 años reclutando en estas instituciones.',
  },
  {
    num: '04',
    title: 'Talento preparado para la IA',
    text: '#1 en América Latina en adopción de IA generativa — la usa el 29.7% de la población en edad de trabajar (Microsoft, Q2 2026) — y 3.º de la región en talento de IA (Latin American AI Index, ILIA 2025).',
  },
  {
    num: '05',
    title: 'Marco legal favorable',
    text: 'Infraestructura legal reconocida por Chambers. Creación de entidades, legislación laboral y protección de la propiedad intelectual (IP) claras.',
  },
  {
    num: '06',
    title: 'Cultura de trabajo profesional',
    text: 'Creativos, recursivos, resilientes, comprometidos. Los profesionales costarricenses no solo ocupan un puesto — lo hacen suyo.',
  },
]

const comparisonRows = [
  { factor: 'Alineación horaria', cr: 'Coincidencia total', other: 'Hasta 12 h de diferencia (Asia, Europa del Este)' },
  { factor: 'Dominio del inglés', cr: 'Sobre el promedio mundial', other: 'Muy variable' },
  { factor: 'Adopción de IA generativa', cr: '#1 en América Latina', other: 'Menor en el resto de la región' },
  { factor: 'Estabilidad política', cr: '75+ años', other: 'Variable' },
  { factor: 'Marco legal', cr: 'Claro y probado', other: 'Complejo' },
  { factor: 'Afinidad cultural', cr: 'Muy alta', other: 'Moderada' },
  { factor: 'Retención de talento', cr: '<1% de rotación involuntaria*', other: 'Depende del operador' },
]

const talentProfiles = [
  'Ingenieros de software — Full-stack, backend, frontend',
  'Ingenieros de IA y Machine Learning — LLMs, IA generativa, MLOps, despliegue de modelos',
  'Científicos de datos — Machine learning, modelado estadístico, analítica predictiva',
  'Ingenieros de datos — ETL, pipelines, data warehouses, analytics engineering',
  'Analistas de inteligencia de negocios — Dashboards, reportes, visualización de datos',
  'Ingenieros DevOps y cloud — Kubernetes, CI/CD, GCP, AWS',
  'Ingenieros de QA y automatización — Selenium, Cypress',
  'Product y project managers — Agile, Scrum, bilingües',
  'Liderazgo de ingeniería — Tech leads, directores, VPs',
]

const fundamentals = [
  { val: '75+', label: 'Años de democracia' },
  { val: '99%', label: 'Energía renovable' },
  { val: 'Gratuito', label: 'Sistema universitario público' },
  { val: 'Sólida', label: 'Protección legal y de la propiedad intelectual' },
]

export default function WhyCostaRicaPageEs() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-5">Por qué Costa Rica</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-5">
              Un mercado probado. Un modelo probado. Pensado para el largo plazo.
            </h1>
            <p className="text-[16px] text-[#3E4C59] font-normal leading-relaxed">
              Los profesionales costarricenses son creativos, recursivos, resilientes y comprometidos.
              No solo ocupan un puesto. Lo hacen suyo. Es el resultado de un país que, por generaciones,
              eligió la educación y la estabilidad por encima de todo. Nuestros clientes no hacen outsourcing
              en Costa Rica. Construyen aquí. Vienen por el talento. Se quedan porque Costa Rica pasa a ser
              parte de cómo operan — no una extensión de su operación.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 self-center">
            {heroStats.map((s) => (
              <div key={s.value} className="border border-[#D8E2EA] rounded-[10px] p-5">
                <p className="text-[26px] font-bold text-[#2574A7] leading-none mb-1.5">{s.value}</p>
                <p className="text-[13px] text-[#5A6A7A] font-normal leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Section (black) ── */}
      <section className="bg-[#0E2233] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">El verdadero retorno del talento</p>
          <h2 className="text-3xl font-bold text-white mb-4 max-w-2xl">
            La pregunta no es cuánto cuesta un desarrollador por hora. Es lo que su operación entrega con el tiempo.
          </h2>
          <p className="text-[15px] text-white/60 font-normal max-w-2xl mb-12">
            Cuando se toman en cuenta la retención, los ciclos de reclutamiento, el tiempo de onboarding, la alineación
            en la comunicación y la continuidad operativa, el retorno total de construir en el mercado correcto crece de forma significativa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((c) => (
              <div key={c.val} className="border border-white/10 rounded-[10px] p-7">
                <p className={`text-[40px] font-bold leading-none mb-3 ${c.color}`}>{c.val}</p>
                <p className="text-[15px] font-bold text-white mb-3">{c.title}</p>
                <p className="text-[14px] text-white/60 font-normal leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Works ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Por qué funciona</p>
        <h2 className="text-3xl font-bold text-black mb-12 max-w-xl">
          Seis razones que una y otra vez inclinan la decisión.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.num} className="border border-[#D8E2EA] rounded-[10px] p-7 hover:border-[#2574A7] transition-colors">
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{r.num}</p>
              <h3 className="text-[16px] font-bold text-black mb-2">{r.title}</h3>
              <p className="text-[#3E4C59] font-normal leading-relaxed text-[16px]">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-black mb-5">
                Los factores que más pesan al elegir dónde construir.
              </h2>
              <p className="text-[#3E4C59] font-normal leading-relaxed text-[16px]">
                Cada mercado tiene sus pros y contras. Tras 20 años ayudando a empresas de EE. UU. a elegir dónde
                construir, estos son los factores que una y otra vez inclinan la decisión.
              </p>
            </div>
            <div className="bg-white border border-[#D8E2EA] rounded-[12px] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#F4F7FA] border-b border-[#D8E2EA]">
                <div className="p-4 col-span-1">
                  <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A]">Factor</p>
                </div>
                <div className="p-4 border-l border-[#D8E2EA]">
                  <p className="text-[12px] font-bold tracking-widest uppercase text-[#2574A7]">Costa Rica</p>
                </div>
                <div className="p-4 border-l border-[#D8E2EA]">
                  <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A]">Otros mercados</p>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? 'border-b border-[#D8E2EA]' : ''}`}>
                  <div className="p-4">
                    <p className="text-[14px] text-black font-normal">{row.factor}</p>
                  </div>
                  <div className="p-4 border-l border-[#D8E2EA] bg-[#F9FEFE]">
                    <p className="text-[14px] text-[#00A79D] font-bold">{row.cr}</p>
                  </div>
                  <div className="p-4 border-l border-[#D8E2EA]">
                    <p className="text-[14px] text-[#5A6A7A] font-normal">{row.other}</p>
                  </div>
                </div>
              ))}
              <div className="px-4 py-3 bg-[#F4F7FA] border-t border-[#D8E2EA]">
                <p className="text-[12px] text-[#5A6A7A] font-normal">*Con el operador y el modelo cultural adecuados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regional Hub ── */}
      <section className="py-14 md:py-16 border-b border-[#1C3A52] bg-[#0E2233]">
        <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-3">Costa Rica como hub regional</p>
          <h2 className="text-3xl font-bold text-white leading-tight mb-5">
            No es solo donde vive su equipo.<br/>
            Es el centro operativo de toda su presencia en América Latina.
          </h2>
          <p className="text-base font-normal text-white/70 leading-relaxed mb-8">
            La estabilidad política de Costa Rica, su dominio del inglés, su infraestructura legal y su ubicación central la convierten en la opción natural para empresas que quieren algo más que una oficina satélite — quieren un ancla regional. Varios de nuestros clientes usan su operación en Costa Rica como centro de mando para equipos y operaciones en toda América Latina.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-white/10 rounded-lg p-5">
              <div className="text-sm font-bold text-white mb-2">Zona horaria central</div>
              <div className="text-sm font-normal text-white/60 leading-relaxed">Alineada con EE. UU. y con coincidencia horaria con toda América Latina — el punto de coordinación ideal para operaciones regionales.</div>
            </div>
            <div className="border border-white/10 rounded-lg p-5">
              <div className="text-sm font-bold text-white mb-2">Estabilidad política y legal</div>
              <div className="text-sm font-normal text-white/60 leading-relaxed">Más de 75 años de democracia y un marco legal claro para entidades extranjeras — la base más confiable de la región.</div>
            </div>
            <div className="border border-white/10 rounded-lg p-5">
              <div className="text-sm font-bold text-white mb-2">Conectividad regional</div>
              <div className="text-sm font-normal text-white/60 leading-relaxed">Vuelos directos a las principales ciudades de América Latina, una sólida infraestructura bancaria y una red creciente de operaciones multinacionales.</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── Talent Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-black mb-5">
              Ingenieros, profesionales de datos y operadores — formados y retenidos para el largo plazo.
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { val: '20 años', label: 'reclutando en CR' },
                { val: '1000+', label: 'Empleos tecnológicos de alto valor creados en Costa Rica' },
                { val: '<1%', label: 'de rotación involuntaria' },
                { val: '11+ años', label: 'nuestra alianza activa más larga' },
              ].map((s) => (
                <div key={s.val} className="border border-[#D8E2EA] rounded-[10px] p-4">
                  <p className="text-[22px] font-bold text-[#2574A7] leading-none mb-1">{s.val}</p>
                  <p className="text-[12px] text-[#5A6A7A] font-normal">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-5">Perfiles de talento</p>
            <ul className="space-y-0">
              {talentProfiles.map((p) => (
                <li key={p} className="flex items-center gap-3 py-3.5 border-b border-[#D8E2EA] last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A79D] shrink-0" />
                  <span className="text-[14px] text-black font-normal">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Country Fundamentals ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-8">Fundamentos del país</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {fundamentals.map((f) => (
              <div key={f.val} className="bg-white border border-[#D8E2EA] rounded-[10px] p-6">
                <p className="text-[32px] font-bold text-[#2574A7] leading-none mb-2">{f.val}</p>
                <p className="text-[14px] text-[#5A6A7A] font-normal">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">¿Listo para construir aquí?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors">
              Agende una llamada de 30 min
            </BookCallLink>
            <Link
              href={localHref('/case-studies', 'es')}
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              Vea los casos de éxito →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
