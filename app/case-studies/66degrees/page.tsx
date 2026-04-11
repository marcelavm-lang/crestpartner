import Link from 'next/link'
import CompanyLogo from '@/components/CompanyLogo'

export default function SixtyDegreesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/case-studies" className="text-[13px] text-[#5A6A7A] hover:text-[#2574A7] mb-8 inline-block">
        ← All case studies
      </Link>
      <div className="mb-6">
        <CompanyLogo company="66degrees" variant="page" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] bg-[#E6F7F6] text-[#00A79D]">Active</span>
        <span className="text-[13px] text-[#5A6A7A]">2014–present</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">66degrees</h1>
      <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed mb-12 max-w-2xl">
        11+ years and counting. 66degrees' Costa Rica engineering team has become an integral part of one of Google Cloud's top partners — with zero percent turnover throughout the entire engagement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          { value: '11+', label: 'Years active partnership' },
          { value: '0%', label: 'Turnover rate' },
          { value: 'Active', label: 'Ongoing engagement' },
        ].map((s) => (
          <div key={s.label} className="border border-[#D8E2EA] rounded-[10px] p-6">
            <p className="text-[32px] font-bold text-[#2574A7] leading-none mb-2">{s.value}</p>
            <p className="text-[13px] text-[#5A6A7A] font-light">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-[22px] font-bold text-black mb-4">The challenge</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          66degrees needed a stable, high-quality engineering team in Costa Rica that could grow alongside their business as a leading Google Cloud partner. The challenge wasn't just hiring — it was building a culture that retained top talent for the long haul.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">What we built</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          Crest Partners has managed every layer of 66degrees' Costa Rica operation for over a decade — from legal entity and payroll to culture programs, career development, and retention. We've recruited and onboarded multiple cohorts of engineers, architects, and technical leads.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">The outcome</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
          Zero percent turnover across 11+ years of partnership. The Costa Rica team has become deeply embedded in 66degrees' product and client delivery — not a satellite office, but a core part of the company. This engagement is a proof point for what long-term operational excellence looks like.
        </p>
      </div>
    </main>
  )
}
