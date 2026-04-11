import Link from 'next/link'
import CompanyLogo from '@/components/CompanyLogo'

export default function TargusInfoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/case-studies" className="text-[13px] text-[#5A6A7A] hover:text-[#2574A7] mb-8 inline-block">
        ← All case studies
      </Link>
      <div className="mb-6">
        <CompanyLogo company="targusinfo" variant="page" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] bg-[#F4F7FA] text-[#5A6A7A]">Origin</span>
        <span className="text-[13px] text-[#5A6A7A]">2001–2007</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">TARGUSinfo</h1>
      <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed mb-12 max-w-2xl">
        The partnership that started it all. Crest Partners' founders built TARGUSinfo's Costa Rica operation from the ground up — 200+ collaborators that became the backbone of a company acquired by Neustar for $650M.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          { value: '200+', label: 'Collaborators in CR' },
          { value: '$650M', label: 'Neustar acquisition' },
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
          TARGUSinfo needed to build a high-performance data and analytics team in Costa Rica — fast — without the operational infrastructure to do it. They needed a partner who could handle everything: legal entity, payroll, compliance, recruiting, and culture, so their leadership could focus on the product.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">What we built</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          Crest Partners handled the full operational layer — from incorporating the legal entity to running day-to-day HR, payroll, and back office. We recruited and onboarded over 200 collaborators across engineering, data, and operations. The result was a fully self-sufficient Costa Rica operation that ran seamlessly alongside the U.S. headquarters.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">The outcome</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
          The Costa Rica team became a core competitive advantage for TARGUSinfo. When Neustar acquired the company for $650M, the CR operation was a key part of the value. This partnership established the Crest Partners model that every subsequent engagement has been built on.
        </p>
      </div>
    </main>
  )
}
