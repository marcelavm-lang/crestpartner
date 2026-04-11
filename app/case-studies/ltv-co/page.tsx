import Link from 'next/link'
import CompanyLogo from '@/components/CompanyLogo'

export default function LTVCoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/case-studies" className="text-[13px] text-[#5A6A7A] hover:text-[#2574A7] mb-8 inline-block">
        ← All case studies
      </Link>
      <div className="mb-6">
        <CompanyLogo company="ltv-co" variant="page" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] bg-[#EBF4FA] text-[#2574A7]">Flagship</span>
        <span className="text-[13px] text-[#5A6A7A]">2015–2025</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">LTV Co.</h1>
      <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed mb-12 max-w-2xl">
        The definitive case study. 13x revenue growth. A $400M exit. A 98/100 eNPS score. LTV Co.'s Costa Rica operation — built and run entirely by Crest Partners — became the gold standard for nearshore excellence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12">
        {[
          { value: '13x', label: 'Revenue growth' },
          { value: '$400M', label: 'Exit valuation' },
          { value: '98/100', label: 'eNPS score' },
          { value: '10 yrs', label: 'Partnership duration' },
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
          LTV Co. needed to build a world-class engineering and data team in Costa Rica from scratch — with a culture so strong that people would stay, grow, and drive the company's most ambitious product bets. They needed a partner who owned the operation completely, not a recruiter who handed over CVs.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">What we built</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          Crest Partners ran every aspect of LTV Co.'s Costa Rica operation for a decade: legal entity, payroll, HR, recruiting, compliance, back office, culture programs, career ladders, and leadership development. We built a team that didn't just execute — they innovated. The Costa Rica team delivered 100% of the company's core product bets.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">The outcome</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
          13x revenue growth over the engagement. A 98 out of 100 eNPS score — among the highest ever recorded for a nearshore engineering team. And a $400M exit that validated the model: a completely integrated Costa Rica operation isn't a cost center, it's a competitive moat. LTV Co. remains the benchmark we hold every engagement to.
        </p>
      </div>
    </main>
  )
}
