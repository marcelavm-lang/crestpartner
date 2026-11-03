import Link from 'next/link'
import { pageMetadata } from '@/lib/metadata'
import { GUIDES } from '@/lib/guides'

export const metadata = pageMetadata({
  title: 'Guides: Building an Engineering Team in Costa Rica | Crest Partners',
  description:
    'Practical guides for CFOs, CTOs and founders: entity vs EOR, costs, setup and incentives for building an engineering team in Costa Rica.',
  path: '/guides',
})

export default function GuidesPage() {
  return (
    <div className="bg-[#F7FAFB] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Guides</p>
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-5">
          Building an engineering team in Costa Rica
        </h1>
        <p className="text-[18px] text-[#3E4C59] leading-relaxed mb-12 max-w-2xl">
          Straight answers for CFOs, CTOs and founders — with the numbers and sources behind them.
        </p>
        <div className="space-y-5">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block bg-white border border-[#D8E2EA] rounded-[12px] p-7 hover:border-[#2574A7] transition-colors"
            >
              <h2 className="text-[22px] font-bold text-black mb-2 leading-snug">{g.title}</h2>
              <p className="text-[16px] text-[#3E4C59] leading-relaxed mb-3">{g.description}</p>
              <p className="text-[14px] text-[#5A6A7A]">{g.readMinutes} min read · Updated November 2026</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
