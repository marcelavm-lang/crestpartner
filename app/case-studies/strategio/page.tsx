import Link from 'next/link'
import CompanyLogo from '@/components/CompanyLogo'

export default function StrategioPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/case-studies" className="text-[13px] text-[#5A6A7A] hover:text-[#2574A7] mb-8 inline-block">
        ← All case studies
      </Link>
      <div className="mb-6">
        <CompanyLogo company="strategio" variant="page" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[6px] bg-[#E6F7F6] text-[#00A79D]">New</span>
        <span className="text-[13px] text-[#5A6A7A]">2025–present</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Strategio</h1>
      <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed mb-12 max-w-2xl">
        A new chapter in talent. Strategio is the newest Crest Partners engagement — focused on building a specialized talent vertical in Costa Rica from day one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          { value: '8', label: 'Collaborators placed' },
          { value: '2025', label: 'Engagement start year' },
          { value: 'Active', label: 'Ongoing engagement' },
        ].map((s) => (
          <div key={s.label} className="border border-[#D8E2EA] rounded-[10px] p-6">
            <p className="text-[32px] font-bold text-[#2574A7] leading-none mb-2">{s.value}</p>
            <p className="text-[13px] text-[#5A6A7A] font-light">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-[22px] font-bold text-black mb-4">The engagement</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          Strategio engaged Crest Partners to build a specialized talent vertical in Costa Rica — a team focused on connecting U.S. companies with top-tier Costa Rican professionals. This is a newer engagement, and the team is growing.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">What we&apos;re building</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed mb-8">
          Crest Partners is handling the full operational setup for Strategio's Costa Rica presence — from legal structure to talent acquisition and HR. Eight collaborators have been placed in the first phase, with more planned as the vertical scales.
        </p>
        <h2 className="text-[22px] font-bold text-black mb-4">Early results</h2>
        <p className="text-[15px] text-[#5A6A7A] font-light leading-relaxed">
          The engagement is underway and building momentum. Strategio's Costa Rica operation is being designed from the start with the same principles that made LTV Co., 66degrees, and Think Unlimited successful: operational rigor, cultural intentionality, and a long-term perspective.
        </p>
      </div>
    </main>
  )
}
