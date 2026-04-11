import Link from 'next/link'
import CompanyLogo from '@/components/CompanyLogo'

export default function ThinkUnlimitedPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/case-studies" className="text-[13px] text-[#5A6A7A] hover:text-[#2574A7] mb-8 inline-block">
        ← All case studies
      </Link>
      <div className="mb-6">
        <CompanyLogo company="think-unlimited" variant="page" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] bg-[#E6F7F6] text-[#00A79D]">Active</span>
        <span className="text-[13px] text-[#5A6A7A]">2023–present</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Think Unlimited</h1>
      <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed mb-12 max-w-2xl">
        A fully product-driven team built entirely in Costa Rica. Zero percent turnover since day one. Think Unlimited shows what's possible when the right company meets the right operational partner.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          { value: '0%', label: 'Turnover rate' },
          { value: '100%', label: 'Product built in CR' },
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
          Think Unlimited needed to build their entire product team in Costa Rica — not a support function, but the core engineering and product organization. They needed a partner who could attract top talent, build a strong culture, and keep people engaged as the company scaled.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">What we built</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          Crest Partners runs Think Unlimited's complete Costa Rica operation — recruiting, onboarding, payroll, HR, compliance, and culture. Every member of the product team was recruited through our network and onboarded into a culture designed for long-term retention and high performance.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">The outcome</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
          Zero percent turnover since the engagement began. One hundred percent of Think Unlimited's product has been built by the Costa Rica team. This partnership demonstrates that a fully product-driven nearshore operation isn't an aspiration — it's an execution challenge. And execution is what Crest Partners does.
        </p>
      </div>
    </main>
  )
}
