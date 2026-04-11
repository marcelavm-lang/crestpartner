import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-4xl font-bold text-black mb-4">Page not found.</h1>
      <p className="text-[16px] text-[#5A6A7A] font-light mb-10">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="bg-[#2574A7] text-white font-bold text-[14px] px-7 py-3.5 rounded-[8px] hover:bg-[#1f6391] transition-colors"
      >
        Back to home
      </Link>
    </section>
  )
}
