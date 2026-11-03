import Link from 'next/link'
import Image from 'next/image'
import HeroVideo from '@/components/HeroVideo'
import { BookCallLink, WhatsAppLink } from '@/components/CtaLinks'
import { SITE } from '@/lib/site'
import { localHref, type Locale } from '@/lib/i18n'

const ownershipRowsByLocale = {
  en: [
    { label: 'Legal employer', outsourcing: 'The vendor', eor: 'The EOR', crest: 'Your company' },
    { label: 'Team works under', outsourcing: 'Their brand', eor: 'Your brand', crest: 'Your brand' },
    // TODO: Marco must confirm this row before merging to production
    { label: 'IP', outsourcing: 'By contract', eor: 'By contract', crest: 'Your entity' },
    { label: 'Going in-house later', outsourcing: 'Start over', eor: 'Move every hire', crest: 'Already yours' },
  ],
  es: [
    { label: 'Empleador legal', outsourcing: 'El proveedor', eor: 'El EOR', crest: 'Su empresa' },
    { label: 'El equipo trabaja bajo', outsourcing: 'Marca del proveedor', eor: 'Su marca', crest: 'Su marca' },
    // TODO: Marco must confirm this row before merging to production
    { label: 'IP', outsourcing: 'Por contrato', eor: 'Por contrato', crest: 'Su entidad' },
    { label: 'Internalizarlo después', outsourcing: 'Empezar de cero', eor: 'Trasladar a cada persona', crest: 'Ya es suyo' },
  ],
}

const resultsByLocale = {
  en: [
    { value: '$650M', text: "Neustar's acquisition of TARGUSinfo, with our founders' team inside", mobile: false },
    { value: '$400M', text: 'LTV Co. exit, built on a 120-person Costa Rica hub', mobile: true },
    { value: '11+ yrs', text: 'with 66degrees, and still growing', mobile: true },
    { value: '$1B+', text: 'combined revenue of the companies we support', mobile: false },
    { value: '1000+', text: 'high-value tech jobs created in Costa Rica', mobile: true },
    { value: '<1%', text: 'involuntary turnover across our client teams', mobile: true },
  ],
  es: [
    { value: '$650M', text: 'Adquisición de TARGUSinfo por parte de Neustar, con el equipo de nuestros fundadores adentro', mobile: false },
    { value: '$400M', text: 'Exit de LTV Co., construido sobre un hub de 120 personas en Costa Rica', mobile: true },
    { value: '11+ años', text: 'con 66degrees, y sigue creciendo', mobile: true },
    { value: '$1B+', text: 'ingresos combinados de las empresas que apoyamos', mobile: false },
    { value: '1000+', text: 'empleos tecnológicos de alto valor creados en Costa Rica', mobile: true },
    { value: '<1%', text: 'de rotación involuntaria en los equipos de nuestros clientes', mobile: true },
  ],
}

const COPY = {
  en: {
    h1: 'Build your own engineering team in Costa Rica: we set it up and run it for you.',
    sub: (
      <>
        We set up your Costa Rican legal entity, hire your team under your brand, and run payroll,
        HR, accounting and compliance — so the team, the IP and the upside stay yours.
      </>
    ),
    talk: 'Talk to a founder →',
    plan: 'Get your expansion plan in 5 min →',
    reply: 'A founder replies within 24 hours — never a sales rep.',
    write: 'Prefer to write?',
    email: 'Email',
    table: 'Who owns what?',
    logos: "Teams we've built for",
    logoAlt: (name: string) => `${name} logo`,
  },
  es: {
    h1: 'Construya su propio equipo de ingeniería en Costa Rica: nosotros lo creamos y lo administramos.',
    sub: (
      <>
        Creamos su entidad legal en Costa Rica, contratamos a su equipo bajo su marca y administramos
        planilla, recursos humanos, contabilidad y cumplimiento — para que el equipo, la propiedad
        intelectual (IP) y el valor que generan sigan siendo suyos.
      </>
    ),
    talk: 'Hable con un fundador →',
    plan: 'Arme su plan de expansión en 5 min →',
    reply: 'Un fundador responde en menos de 24 horas — nunca un vendedor.',
    write: '¿Prefiere escribir?',
    email: 'Correo',
    table: '¿De quién es cada cosa?',
    logos: 'Equipos que hemos creado para',
    logoAlt: (name: string) => `Logo de ${name}`,
  },
}

// White single-ink versions of the client logos (public/logos/white).
const clientLogos = [
  { name: 'TARGUSinfo', src: '/logos/white/targusinfo.png', width: 147, height: 32, h: 18 },
  { name: 'Verisk', src: '/logos/white/verisk.svg', width: 210, height: 52, h: 24 },
  { name: 'LTV Co.', src: '/logos/ltv-co.svg', width: 60, height: 60, h: 30 },
  { name: '66degrees', src: '/logos/white/66degrees.svg', width: 3649, height: 860, h: 20 },
  { name: 'Think Unlimited', src: '/logos/white/think-unlimited.png', width: 1605, height: 842, h: 26 },
  { name: 'Strategio', src: '/logos/white/strategio.png', width: 1280, height: 255, h: 20 },
  { name: 'Forward Costa Rica', src: '/logos/white/fwd.png', width: 1200, height: 471, h: 30 },
]

export default function HomeHero({ locale = 'en' }: { locale?: Locale }) {
  const t = COPY[locale]
  const ownershipRows = ownershipRowsByLocale[locale]
  const results = resultsByLocale[locale]
  return (
    <section className="relative isolate overflow-hidden bg-[#0E2233] text-white">
      {/* Background: poster/video under a navy overlay */}
      <HeroVideo />
      {/* Overlay: uniform on mobile/tablet (poster only), left-to-right gradient on desktop so the video shows */}
      <div
        className="absolute inset-0 bg-[rgba(14,34,51,0.70)] lg:bg-transparent lg:bg-[linear-gradient(90deg,rgba(14,34,51,0.85)_0%,rgba(14,34,51,0.60)_40%,rgba(14,34,51,0.20)_100%)]"
        aria-hidden="true"
      />

      {/* Top fade so the (fixed) navigation stays legible over the brightest video frames */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0E2233]/60 to-transparent" aria-hidden="true" />
      {/* Bottom fade so the results strip and logo banner stay legible across the whole width */}
      <div className="absolute inset-x-0 bottom-0 h-[26rem] bg-gradient-to-t from-[#0E2233]/90 via-[#0E2233]/60 to-transparent" aria-hidden="true" />

      {/* Extra top padding: on Home the navigation floats over the hero */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] gap-10 lg:gap-14 items-center">
          {/* ── Left column ── */}
          <div className="min-w-0">
            <h1 className="text-[34px] leading-[1.1] md:text-[46px] lg:text-[42px] xl:text-[52px] lg:leading-[1.08] font-bold text-white mb-6">
              {t.h1}
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-[#C9D5E0] max-w-[36rem] mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              {t.sub}
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-4">
              <BookCallLink className="w-full sm:w-auto whitespace-nowrap text-center bg-[#3CC4B9] text-[#0E2233] font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:bg-[#5FD4CB] transition-colors">
                {t.talk}
              </BookCallLink>
              <Link
                href={localHref('/expansion-plan', locale)}
                className="w-full sm:w-auto whitespace-nowrap text-center border border-[#5B7A94] text-white font-bold text-[14px] sm:text-[15px] px-5 sm:px-7 py-3.5 rounded-[10px] hover:border-white transition-colors"
              >
                {t.plan}
              </Link>
            </div>
            <p className="text-[15px] text-[#9FB3C4] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              {t.reply}
            </p>
            <p className="mt-2 text-[14px] text-[#9FB3C4] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              {t.write}{' '}
              <a href={`mailto:${SITE.email}`} className="text-white underline underline-offset-2 decoration-white/40 hover:decoration-white">
                <span className="sm:hidden">{t.email}</span>
                <span className="hidden sm:inline">{SITE.email}</span>
              </a>
              {' · '}
              <WhatsAppLink className="text-white underline underline-offset-2 decoration-white/40 hover:decoration-white">
                WhatsApp
              </WhatsAppLink>
            </p>
          </div>

          {/* ── Right column: "Who owns what?" ── */}
          <div className="min-w-0 bg-[rgba(20,48,74,0.62)] backdrop-blur-[6px] border border-[#2A4B68] rounded-[16px] p-3 sm:p-6 lg:p-5 xl:p-7">
            <table className="w-full table-fixed border-collapse text-left text-[11px] min-[360px]:text-[12px] leading-snug [hyphens:auto] sm:text-[15px] lg:text-[14px] xl:text-[15px]">
              <caption className="text-left text-[17px] sm:text-[19px] font-bold text-white mb-4">
                {t.table}
              </caption>
              <colgroup>
                <col className="w-[25%] sm:w-[28%]" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <td className="px-1 py-2 sm:p-3 lg:px-2 xl:p-3" />
                  <th scope="col" className="px-1 py-2 sm:p-3 lg:px-2 xl:p-3 font-bold text-[#C9D5E0] align-bottom">
                    {/* Soft hyphen lets the word break cleanly on narrow phones */}
                    Out­sourcing
                  </th>
                  <th scope="col" className="px-1 py-2 sm:p-3 lg:px-2 xl:p-3 font-bold text-[#C9D5E0] align-bottom">
                    EOR
                  </th>
                  <th scope="col" className="px-1 py-2 sm:p-3 lg:px-2 xl:p-3 font-bold bg-[#3CC4B9] text-[#0E2233] rounded-t-[10px] align-bottom">
                    <span className="sm:hidden">Crest</span>
                    <span className="hidden sm:inline">Crest Partners</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ownershipRows.map((row, i) => (
                  <tr key={row.label} className="border-t border-[#2A4B68]">
                    <th scope="row" className="px-1 py-2 sm:p-3 lg:px-2 xl:p-3 font-bold text-[#C9D5E0] align-top">
                      {row.label}
                    </th>
                    <td className="px-1 py-2 sm:p-3 lg:px-2 xl:p-3 text-[#C9D5E0] align-top">{row.outsourcing}</td>
                    <td className="px-1 py-2 sm:p-3 lg:px-2 xl:p-3 text-[#C9D5E0] align-top">{row.eor}</td>
                    <td
                      className={`px-1 py-2 sm:p-3 lg:px-2 xl:p-3 bg-[#1C4A63] font-bold text-white align-top ${
                        i === ownershipRows.length - 1 ? 'rounded-b-[10px]' : ''
                      }`}
                    >
                      {row.crest}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Results strip ── */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[#2A4B68] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
          {results.map((r) => (
            <div key={r.value} className={r.mobile ? '' : 'hidden md:block'}>
              <p className="text-[30px] md:text-[34px] lg:text-[32px] xl:text-[34px] font-bold leading-none text-white mb-2 whitespace-nowrap">{r.value}</p>
              <p className="text-[14px] md:text-[15px] lg:text-[14px] xl:text-[15px] leading-snug text-[#C9D5E0] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">{r.text}</p>
            </div>
          ))}
        </div>

        {/* ── Logo banner (infinite marquee; pauses on hover, static with reduced motion) ── */}
        <div className="mt-10 md:mt-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#9FB3C4] mb-5">
            {t.logos}
          </p>
          <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full">
              {[false, true].map((isCopy) => (
                <ul
                  key={String(isCopy)}
                  aria-hidden={isCopy ? 'true' : undefined}
                  className={`flex shrink-0 items-center gap-12 md:gap-16 pr-12 md:pr-16 ${
                    isCopy ? 'motion-reduce:hidden' : 'motion-reduce:flex-wrap motion-reduce:gap-y-6'
                  }`}
                >
                  {clientLogos.map((logo) => (
                    <li key={logo.name} className="flex items-center">
                      <Image
                        src={logo.src}
                        alt={isCopy ? '' : t.logoAlt(logo.name)}
                        width={logo.width}
                        height={logo.height}
                        sizes={`${Math.round((logo.h * logo.width) / logo.height)}px`}
                        unoptimized={logo.src.endsWith('.svg')}
                        style={{ height: logo.h, width: 'auto' }}
                        className="opacity-90 max-w-none"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
