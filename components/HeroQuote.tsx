import type { Locale } from '@/lib/i18n'

// The quote stays verbatim in English on every locale (brand rule); only the caption is translated.
const CAPTION = {
  en: 'CEO and Co-Founder, LTV Co. · 10+ year partnership',
  es: 'CEO and Co-Founder, LTV Co. · alianza de más de 10 años',
}

/** Short client quote directly under the Home hero (Joshua Levy, verbatim from the Handbook v2.7 §9). */
export default function HeroQuote({ locale = 'en' }: { locale?: Locale }) {
  return (
    <section className="bg-[#0E2233] border-t border-white/10">
      <figure className="max-w-4xl mx-auto px-6 py-12 md:py-14 text-center">
        <blockquote lang={locale === 'es' ? 'en' : undefined} className="text-[20px] md:text-[26px] leading-snug font-normal text-white">
          “She didn&apos;t just &lsquo;hire&rsquo; a team; she built a world-class engineering hub from scratch.”
        </blockquote>
        <figcaption className="mt-5 text-[15px] text-white/70">
          <span className="font-bold text-white">Joshua Levy</span> · {CAPTION[locale]}
        </figcaption>
      </figure>
    </section>
  )
}
