import Link from 'next/link'
import CompanyLogo from '@/components/CompanyLogo'

export default function VeriskPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/case-studies" className="text-[13px] text-[#5A6A7A] hover:text-[#2574A7] mb-8 inline-block">
        ← All case studies
      </Link>
      <div className="mb-6">
        <CompanyLogo company="verisk" variant="page" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] bg-[#F4F7FA] text-[#5A6A7A]">Pioneer</span>
        <span className="text-[13px] text-[#5A6A7A]">2007–2013</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Verisk Marketing Solutions</h1>
      <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed mb-12 max-w-2xl">
        From a small analytics team to a 55x revenue multiple. Verisk Marketing Solutions' Costa Rica operation became one of the most successful nearshore partnerships in the data industry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          { value: '55x', label: 'Revenue growth multiple' },
          { value: '$250M', label: 'Exit valuation' },
          { value: '6 yrs', label: 'Partnership duration' },
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
          Following the TARGUSinfo acquisition, the Verisk Marketing Solutions team needed to continue building in Costa Rica — this time with even greater ambition. The goal was to scale a world-class analytics operation that could drive exponential revenue growth.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">What we built</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          Crest Partners managed the complete operational infrastructure: entity management, payroll, HR, recruiting, compliance, and office operations. We built the team from a handful of analysts to a full-scale data and engineering organization, recruiting top Costa Rican talent and keeping turnover near zero throughout the engagement.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">The outcome</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
          Revenue grew 55x over the engagement period. The company was acquired for $250M — with the Costa Rica team as a central driver of value. This partnership cemented Crest Partners' reputation as the go-to operator for data companies expanding into Costa Rica.
        </p>
      </div>
    </main>
  )
}
