import Link from 'next/link'

export const metadata = {
  title: 'Impact — Crest Partners',
  description: 'How Crest Partners co-created Forward Costa Rica to develop the next generation of tech professionals in Costa Rica.',
}

const pillars = [
  {
    title: 'FWD Academy',
    text: 'Web development, AI business solutions and English courses — technical skills for the modern job market.',
  },
  {
    title: 'FWD Sports',
    text: 'Sport as a tool for civic formation — discipline, teamwork and values.',
  },
  {
    title: 'FWD Arts',
    text: 'Music and artistic expression that strengthen identity and community.',
  },
]

const approach = [
  {
    title: 'Safe academy',
    text: 'A safe learning environment built on respect, inclusion and trust across all academic, sports and cultural spaces.',
  },
  {
    title: 'Active citizenship',
    text: 'Programs motivate young people to be agents of positive change — participating in community activities and developing social awareness.',
  },
  {
    title: 'Soft skills',
    text: 'Leadership, communication, discipline, resilience and teamwork — skills that help young people face personal, academic and professional challenges.',
  },
  {
    title: 'Employability support',
    text: 'Every participant builds a personal and professional growth plan with real opportunities to enter the formal job market.',
  },
]

const founders = [
  {
    name: 'Marcela Villalta',
    role: 'Co-founder & CEO, Crest Partners',
    fwdRole: 'Curriculum design, implementation and partnerships at Forward CR',
  },
  {
    name: 'Cristian Chacón',
    role: 'Financial Compliance Analyst, Crest Partners',
    fwdRole: 'Co-founder, Forward Costa Rica',
  },
]

export default function ImpactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <p className="eyebrow mb-5">Social impact</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-black max-w-3xl mb-6">
          Growth only makes sense when everyone grows.
        </h1>
        <p className="text-[17px] text-[#5A6A7A] font-light leading-relaxed max-w-2xl mb-10">
          That's why our founders co-created Forward Costa Rica — a non-profit committed to developing
          the next generation of tech professionals in Costa Rica. Not as a program we run, but as a
          cause we believe in.
        </p>
        <a
          href="https://www.fwdcostarica.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#2574A7] text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-[#1f6391] transition-colors tracking-wide"
        >
          Visit Forward Costa Rica →
        </a>
      </section>

      {/* ── What is Forward CR ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <p className="eyebrow mb-4">About Forward Costa Rica</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Education, sport and art that develop people and strengthen communities.
              </h2>
              <p className="text-[16px] text-[#5A6A7A] font-light leading-relaxed mb-5">
                Forward Costa Rica is an independent non-profit co-founded by Marcela Villalta and
                Cristian Chacón. Its mission is to develop young Costa Ricans through three pillars —
                technology education, sports and arts — all completely free for those who pass the
                admission process.
              </p>
              <p className="text-[16px] text-[#5A6A7A] font-light leading-relaxed">
                All programs are fully funded. No economic support or meals included — the scholarship
                focuses exclusively on the learning process.
              </p>
            </div>

            {/* Right — 3 pillar cards */}
            <div className="flex flex-col gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="bg-white border border-[#D8E2EA] rounded-[10px] p-6">
                  <p className="text-[14px] font-bold text-[#2574A7] mb-2">{p.title}</p>
                  <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── How they do it ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="eyebrow mb-4">Their approach</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 max-w-xl">
          Four pillars behind every program.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {approach.map((a) => (
            <div key={a.title} className="border border-[#D8E2EA] rounded-[10px] p-8 hover:border-[#00A79D] transition-colors">
              <p className="text-[14px] font-bold text-[#00A79D] mb-3">{a.title}</p>
              <p className="text-[14px] text-[#5A6A7A] font-light leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founders Connection ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl">
            Why our founders helped build it.
          </h2>
          <p className="text-[17px] text-white/70 font-light leading-relaxed max-w-2xl mb-12">
            After 25+ years operating in Costa Rica's tech ecosystem, Marcela Villalta and Cristian
            Chacón saw firsthand that the talent pipeline needed investment — not just consumption.
            The professionals they work with every day come from communities worth investing in.
            Forward CR was born from that conviction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {founders.map((f) => (
              <div key={f.name} className="border border-white/20 rounded-[10px] p-8">
                <p className="text-[18px] font-bold text-white mb-1">{f.name}</p>
                <p className="text-[13px] text-[#00A79D] font-light mb-4">{f.role}</p>
                <p className="text-[14px] text-white/60 font-light leading-relaxed">{f.fwdRole}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-[#F4F7FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[22px] md:text-[26px] font-light text-black leading-relaxed mb-6">
              "My experience at FWD was incredibly enriching. I learned a skill that allowed me to enter
              the tech industry. Thanks to FWD, I can say I improved my professional situation."
            </p>
            <p className="text-[13px] font-bold tracking-widest uppercase text-[#5A6A7A]">
              Roger Elliasson — FWD Graduate
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2574A7] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to support Forward Costa Rica?
          </h2>
          <p className="text-[17px] text-white/80 font-light mb-10">
            Forward CR is an independent non-profit. If you'd like to learn more, collaborate or get
            involved, reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.fwdcostarica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2574A7] font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-gray-50 transition-colors tracking-wide"
            >
              Visit fwdcostarica.com →
            </a>
            <a
              href="mailto:contacto@fwdcostarica.com"
              className="border border-white/50 text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:border-white transition-colors"
            >
              Contact Forward CR →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
