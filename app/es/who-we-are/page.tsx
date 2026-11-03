import Link from 'next/link'
import { BookCallLink } from '@/components/CtaLinks'
import TeamEditorial from '@/components/TeamEditorial'

const values = [
  { title: 'Responsabilidad total', text: 'No trasladamos la responsabilidad a otros. El resultado es nuestro.' },
  { title: 'La cultura es estrategia', text: 'Menos del 1% de rotación involuntaria no sucede por casualidad.' },
  { title: 'Todos en la misma mesa', text: 'Horarios alineados, la misma cultura de trabajo y la misma ejecución que su casa matriz.' },
]

export default function WhoWeArePageEs() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-3">Quiénes somos</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              20 años construyendo el ecosistema tecnológico de Costa Rica — desde adentro.
            </h1>
            <p className="text-[16px] font-normal text-[#3E4C59] leading-relaxed">
              Antes de que alguien lo llamara nearshore, nuestros fundadores ya estaban construyendo aquí. 20 años después, las empresas que ayudaron a crecer han tenido exits de $400M, han ganado el premio Google Cloud Partner of the Year y han formado equipos que nunca se fueron. Eso no es una estrategia. Es una trayectoria comprobada.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-w-0">
            {[
              { val: '2006', label: 'Fundación de Crest Partners — antes de que el nearshore tuviera nombre', color: 'text-[#2574A7]' },
              { val: '1000+', label: 'Empleos tecnológicos de alto valor creados en Costa Rica', color: 'text-[#2574A7]' },
              { val: '<1%', label: 'Rotación involuntaria en todas nuestras alianzas', color: 'text-[#00A79D]' },
              { val: '$1B+', label: 'Ingresos combinados de las empresas cliente', color: 'text-[#2574A7]' },
              { val: '97.6', label: 'GPTW Trust Index en LTV Co. — entre los puntajes más altos del mundo', color: 'text-[#00A79D]' },
              { val: '98/100', label: 'eNPS en LTV Co.', color: 'text-[#2574A7]' },
            ].map((s) => (
              <div key={s.val} className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-5 min-w-0">
                <div className={`text-2xl sm:text-3xl font-bold ${s.color}`}>{s.val}</div>
                <div className="text-xs text-[#5A6A7A] mt-1">{s.label}</div>
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
                <p className="text-[14px] text-[#5A6A7A] font-normal">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team: co-founder + partners ── */}
      <TeamEditorial locale="es" />

      {/* ── Forward CR ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-black mb-5">
              Democratizamos la educación tecnológica para quienes la economía deja por fuera.
            </h2>
            <p className="text-[#3E4C59] font-normal leading-relaxed text-[16px]">
              Forward Costa Rica — cofundada por nuestro equipo — ofrece formación en ingeniería full-stack, inglés y habilidades profesionales a jóvenes costarricenses que de otro modo no podrían pagarla. Totalmente gratis.
            </p>
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Programas</p>
            <ul className="space-y-3">
              {[
                '01  Desarrollo fullstack',
                '02  Idioma inglés',
                '03  Empleabilidad y habilidades profesionales',
                '04  Formación en deportes y artes',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-[14px] text-black font-normal border-b border-[#D8E2EA] pb-3 last:border-0">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#D8E2EA]">
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-3">Cofundadora de Crest Partners</p>
              <p className="text-[14px] text-black font-normal">Marcela Villalta — diseño curricular</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">¿Quiere trabajar con nosotros?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors">
              Agende una llamada de 30 min
            </BookCallLink>
            <Link
              href="/careers"
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              Únase a nuestro equipo →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
