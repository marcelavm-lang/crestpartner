import Link from 'next/link'
import { BookCallLink } from '@/components/CtaLinks'
import TeamEditorial from '@/components/TeamEditorial'

const values = [
  { title: 'Full accountability', text: 'We don\'t hand off. We own the result.' },
  { title: 'Culture is strategy', text: 'Less than 1% turnover doesn\'t happen by accident.' },
  { title: 'Built around one table', text: 'Same time zone, same work culture, same execution as your HQ.' },
]

export default function WhoWeArePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-3">Who we are</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              25+ years building Costa Rica's tech ecosystem — from the inside.
            </h1>
            <p className="text-[16px] font-normal text-[#3E4C59] leading-relaxed">
              Before anyone called it nearshore, our founders started building here. 25 years later, the companies they helped grow have exited at $400M, won Google Cloud Partner of the Year, and built teams that never left. That's not a strategy. That's a track record.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-w-0">
            {[
              { val: '2001', label: 'Year of our first partnership — before nearshore had a name', color: 'text-[#2574A7]' },
              { val: '1000+', label: 'High-value tech jobs created in Costa Rica', color: 'text-[#2574A7]' },
              { val: '<1%', label: 'Involuntary turnover across all partnerships', color: 'text-[#00A79D]' },
              { val: '$1B+', label: 'Combined client revenue', color: 'text-[#2574A7]' },
              { val: '97.6', label: 'GPTW Trust Index at LTV Co. — among the highest scores globally', color: 'text-[#00A79D]' },
              { val: '98/100', label: 'eNPS at LTV Co.', color: 'text-[#2574A7]' },
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
                <p className="text-[13px] text-[#5A6A7A] font-normal">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team: co-founders + partners ── */}
      <TeamEditorial />

      {/* ── Forward CR ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-black mb-5">
              Democratizing tech education for those locked out by economics.
            </h2>
            <p className="text-[#3E4C59] font-normal leading-relaxed text-[16px]">
              Forward Costa Rica — co-founded by our team — delivers full-stack engineering, English and professional skills training to young Costa Ricans who couldn't otherwise afford it. Entirely free.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Programs</p>
            <ul className="space-y-3">
              {[
                '01  Fullstack development',
                '02  English language',
                '03  Employability & professional skills',
                '04  Sports & arts formation',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-[14px] text-black font-normal border-b border-[#D8E2EA] pb-3 last:border-0">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#D8E2EA]">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-3">Crest Partners co-founder</p>
              <p className="text-[13px] text-black font-normal">Marcela Villalta — curriculum design</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Want to work with us?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <BookCallLink className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors" />
            <Link
              href="/careers"
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              Join our team →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
