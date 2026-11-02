import { TESTIMONIALS } from '@/lib/testimonials'

/** Client testimonials — featured quote (Josh Levy) plus three supporting voices. */
export default function ClientVoices({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const [featured, ...rest] = TESTIMONIALS
  const dark = tone === 'dark'
  return (
    <section className={dark ? 'bg-[#0E2233] py-20' : 'bg-white py-20'}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-3">Client voices</p>
        <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-12 max-w-3xl ${dark ? 'text-white' : 'text-black'}`}>
          In the words of the leaders who built with us.
        </h2>

        <figure className={`rounded-[14px] p-8 md:p-10 mb-6 border ${dark ? 'border-white/10 bg-white/[0.04]' : 'border-[#D8E2EA] bg-[#F7FAFB]'}`}>
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{featured.topic}</p>
          <blockquote className={`text-[18px] md:text-[21px] leading-relaxed font-normal ${dark ? 'text-white' : 'text-black'}`}>
            “{featured.quote}”
          </blockquote>
          <figcaption className="mt-6">
            <span className={`block text-[16px] font-bold ${dark ? 'text-white' : 'text-black'}`}>{featured.name}</span>
            <span className={`block text-[14px] ${dark ? 'text-white/60' : 'text-[#5A6A7A]'}`}>{featured.title}</span>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((t) => (
            <figure
              key={t.id}
              className={`rounded-[14px] p-7 border flex flex-col ${dark ? 'border-white/10' : 'border-[#D8E2EA] bg-white'}`}
            >
              <p className="text-[12px] font-bold tracking-widest uppercase text-[#00A79D] mb-4">{t.topic}</p>
              <blockquote className={`text-[16px] leading-relaxed font-normal flex-1 ${dark ? 'text-white/90' : 'text-[#3E4C59]'}`}>
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className={`block text-[15px] font-bold ${dark ? 'text-white' : 'text-black'}`}>{t.name}</span>
                <span className={`block text-[14px] ${dark ? 'text-white/60' : 'text-[#5A6A7A]'}`}>{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
