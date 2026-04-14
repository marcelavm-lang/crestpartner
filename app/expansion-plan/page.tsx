import ExpansionPlanForm from '@/components/ExpansionPlanForm'

export const metadata = {
  title: 'Expansion Plan Generator — Crest Partners',
  description: 'Generate a personalized Costa Rica expansion plan in minutes.',
}

export default function ExpansionPlanPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFB]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Page header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#00A79D] mb-3">Free tool</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-5">
            Build your Costa Rica expansion plan
          </h1>
          <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed">
            Answer 5 quick questions and get a personalized plan — team structure, timeline and cost
            considerations — generated in seconds by our AI advisor, trained on 25 years of Crest
            Partners experience.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-[#D8E2EA] rounded-[16px] p-8 shadow-sm">
              <ExpansionPlanForm />
            </div>
          </div>

          {/* Sidebar — takes 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-[#D8E2EA] rounded-[12px] p-6">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Why Crest Partners</p>
              <div className="space-y-4">
                {[
                  { val: '25+', label: 'Years in Costa Rica\'s tech market', color: 'text-[#2574A7]' },
                  { val: '<1%', label: 'Involuntary turnover — industry avg. 13%', color: 'text-[#00A79D]' },
                  { val: '$1B+', label: 'Combined client revenue', color: 'text-[#2574A7]' },
                  { val: '97.6', label: 'GPTW Trust Index — one of the highest scores globally', color: 'text-[#00A79D]' },
                ].map((s) => (
                  <div key={s.val} className="flex items-start gap-3 pb-4 border-b border-[#F4F7FA] last:border-0 last:pb-0">
                    <span className={`text-[22px] font-bold shrink-0 ${s.color}`}>{s.val}</span>
                    <span className="text-[12px] text-[#5A6A7A] font-light leading-snug pt-1">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#EBF4FA] border border-[#B3D4EC] rounded-[12px] p-5">
              <p className="text-[13px] font-bold text-[#2574A7] mb-2">Prefer to talk?</p>
              <p className="text-[12px] text-[#5A6A7A] font-light mb-4 leading-relaxed">
                Skip the form and get on a call with our team. We'll design your plan in 48 hours.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#2574A7] text-white font-bold text-[12px] px-4 py-2.5 rounded-[8px] hover:bg-[#1f6391] transition-colors"
              >
                Schedule a call →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
