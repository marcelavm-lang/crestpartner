import Link from 'next/link'
import Image from 'next/image'
import HeroVideo from '@/components/HeroVideo'
import { BookCallLink } from '@/components/CtaLinks'

const ownershipRows = [
  { label: 'Legal employer', outsourcing: 'The vendor', eor: 'The EOR', crest: 'Your company' },
  { label: 'Team works under', outsourcing: 'Their brand', eor: 'Your brand', crest: 'Your brand' },
  // TODO: Marco must confirm this row before merging to production
  { label: 'IP', outsourcing: 'By contract', eor: 'By contract', crest: 'Your entity' },
  { label: 'Going in-house later', outsourcing: 'Start over', eor: 'Move every hire', crest: 'Already yours' },
]

const results = [
  { value: '$650M', text: "Neustar's acquisition of TargusInfo, with our team inside", mobile: false },
  { value: '$400M', text: 'LTV Co. exit, built on a 120-person Costa Rica hub', mobile: true },
  { value: '11+ yrs', text: 'with 66degrees, and still growing', mobile: true },
]

// White single-ink versions of the client logos (public/logos/white).
const clientLogos = [
  { name: 'TargusInfo', src: '/logos/white/targusinfo.png', width: 147, height: 32, h: 18 },
  { name: 'Verisk', src: '/logos/white/verisk.png', width: 600, height: 180, h: 24 },
  { name: 'LTV Co.', src: '/logos/white/ltv-co.png', width: 154, height: 156, h: 30 },
  { name: '66degrees', src: '/logos/white/66degrees.png', width: 600, height: 142, h: 20 },
  { name: 'Think Unlimited', src: '/logos/white/think-unlimited.png', width: 404, height: 188, h: 28 },
  { name: 'Strategio', src: '/logos/white/strategio.png', width: 600, height: 123, h: 20 },
]

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0E2233] text-white">
      {/* Background: poster/video under a navy overlay */}
      <HeroVideo />
      {/* Overlay: uniform on mobile/tablet (poster only), left-to-right gradient on desktop so the video shows */}
      <div
        className="absolute inset-0 bg-[rgba(14,34,51,0.70)] lg:bg-transparent lg:bg-[linear-gradient(90deg,rgba(14,34,51,0.85)_0%,rgba(14,34,51,0.60)_40%,rgba(14,34,51,0.20)_100%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] gap-10 lg:gap-14 items-center">
          {/* ── Left column ── */}
          <div className="min-w-0">
            <h1 className="text-[38px] leading-[1.08] md:text-[52px] lg:text-[48px] xl:text-[62px] lg:leading-[1.04] font-bold text-white mb-6">
              Your engineering hub in Costa Rica. Owned by you. Run by us.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-[#C9D5E0] max-w-[36rem] mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              We set up your Costa Rican legal entity, hire engineers under your brand, and run payroll,
              HR, accounting and compliance — so the team, the IP and the upside stay yours.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-4">
              <BookCallLink className="w-full sm:w-auto whitespace-nowrap text-center bg-[#3CC4B9] text-[#0E2233] font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:bg-[#5FD4CB] transition-colors" />
              <Link
                href="/expansion-plan"
                className="w-full sm:w-auto whitespace-nowrap text-center border border-[#5B7A94] text-white font-bold text-[14px] sm:text-[15px] px-5 sm:px-7 py-3.5 rounded-[10px] hover:border-white transition-colors"
              >
                Get your expansion plan in 5 min →
              </Link>
            </div>
            <p className="text-[15px] text-[#9FB3C4] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              A founder replies within 24 hours — never a sales rep.
            </p>
          </div>

          {/* ── Right column: "Who owns what?" ── */}
          <div className="min-w-0 bg-[rgba(20,48,74,0.62)] backdrop-blur-[6px] border border-[#2A4B68] rounded-[16px] p-3 sm:p-6 lg:p-5 xl:p-7">
            <table className="w-full table-fixed border-collapse text-left text-[12px] leading-snug sm:text-[15px] lg:text-[14px] xl:text-[15px]">
              <caption className="text-left text-[17px] sm:text-[19px] font-bold text-white mb-4">
                Who owns what?
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
        <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[#2A4B68] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-6 gap-y-8">
          {results.map((r) => (
            <div key={r.value} className={`lg:col-span-2 ${r.mobile ? '' : 'hidden md:block'}`}>
              <p className="text-[30px] md:text-[34px] font-bold leading-none text-white mb-2">{r.value}</p>
              <p className="text-[14px] md:text-[15px] leading-snug text-[#9FB3C4]">{r.text}</p>
            </div>
          ))}

          <div className="hidden md:block md:col-span-3 lg:col-span-6 lg:pl-6 lg:border-l lg:border-[#2A4B68]">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#9FB3C4] mb-4">
              Teams we&apos;ve built for
            </p>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-4">
              {clientLogos.map((logo) => (
                <li key={logo.name} className="flex items-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    sizes={`${Math.round((logo.h * logo.width) / logo.height)}px`}
                    style={{ height: logo.h, width: 'auto' }}
                    className="opacity-90"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
