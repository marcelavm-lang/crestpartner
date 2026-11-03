import { TESTIMONIALS } from '@/lib/testimonials'
import type { Locale } from '@/lib/i18n'

// Quotes stay verbatim in English on every locale (brand rule); only labels around them are translated.
const COPY = {
  en: { eyebrow: 'Client voices', title: 'In the words of the leaders who built with us.' },
  es: { eyebrow: 'Lo que dicen nuestros clientes', title: 'En palabras de los líderes que construyeron con nosotros.' },
}

const ES_TOPICS: Record<string, string> = {
  'josh-levy': 'Construir desde cero',
  'gary-walter': 'Liderazgo',
  'justin-turner': 'Búsqueda de talento',
  'james-ryan': 'Escalar operaciones',
}

const ES_TITLES: Record<string, string> = {
  'josh-levy': 'CEO and Co-Founder, LTV Co. · alianza de más de 10 años',
  'gary-walter': 'Business Owner · recomendación en LinkedIn',
}

/** Client testimonials — featured quote (Josh Levy) plus three supporting voices. */
export default function ClientVoices({ tone = 'dark', locale = 'en' }: { tone?: 'dark' | 'light'; locale?: Locale }) {
  const t = COPY[locale]
  const es = locale === 'es'
  const topic = (id: string, en: string) => (es ? ES_TOPICS[id] ?? en : en)
  const title = (id: string, en: string) => (es ? ES_TITLES[id] ?? en : en)
  const [featured, ...rest] = TESTIMONIALS
  const dark = tone === 'dark'
  return (
    <section className={dark ? 'bg-[#0E2233] py-20' : 'bg-white py-20'}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-3">{t.eyebrow}</p>
        <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-12 max-w-3xl ${dark ? 'text-white' : 'text-black'}`}>
          {t.title}
        </h2>

        <figure className={`rounded-[14px] p-8 md:p-10 mb-6 border ${dark ? 'border-white/10 bg-white/[0.04]' : 'border-[#D8E2EA] bg-[#F7FAFB]'}`}>
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{topic(featured.id, featured.topic)}</p>
          <blockquote lang={es ? 'en' : undefined} className={`text-[18px] md:text-[21px] leading-relaxed font-normal ${dark ? 'text-white' : 'text-black'}`}>
            “{featured.quote}”
          </blockquote>
          <figcaption className="mt-6">
            <span className={`block text-[16px] font-bold ${dark ? 'text-white' : 'text-black'}`}>{featured.name}</span>
            <span className={`block text-[14px] ${dark ? 'text-white/60' : 'text-[#5A6A7A]'}`}>{title(featured.id, featured.title)}</span>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((v) => (
            <figure
              key={v.id}
              className={`rounded-[14px] p-7 border flex flex-col ${dark ? 'border-white/10' : 'border-[#D8E2EA] bg-white'}`}
            >
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{topic(v.id, v.topic)}</p>
              <blockquote lang={es ? 'en' : undefined} className={`text-[16px] leading-relaxed font-normal flex-1 ${dark ? 'text-white/90' : 'text-[#3E4C59]'}`}>
                “{v.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className={`block text-[15px] font-bold ${dark ? 'text-white' : 'text-black'}`}>{v.name}</span>
                <span className={`block text-[14px] ${dark ? 'text-white/60' : 'text-[#5A6A7A]'}`}>{title(v.id, v.title)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
