import Link from 'next/link'

export default function CareersPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
      <p className="eyebrow mb-5">Careers</p>
      <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-5 max-w-2xl">
        Join the team building Costa Rica's tech future.
      </h1>
      <p className="text-[16px] text-[#5A6A7A] font-light max-w-xl mb-10">
        We're always looking for exceptional people. Open positions in San José, Costa Rica.
      </p>
      <Link
        href="/contact"
        className="bg-[#2574A7] text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-[#1f6391] transition-colors"
      >
        Get in touch
      </Link>
    </section>
  )
}
