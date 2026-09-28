import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import { BookCallLink, WhatsAppLink } from '@/components/CtaLinks'

const services = [
  { label: 'Launch', href: '/services#launch' },
  { label: 'Build', href: '/services#build' },
  { label: 'Operate', href: '/services#operate' },
]

const company = [
  { label: 'Who we are', href: '/who-we-are' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Why Costa Rica', href: '/why-costa-rica' },
  { label: 'Careers', href: '/careers' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#D8E2EA] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/crest-partners-logo/svg/crest-partners-logo-color.svg"
                alt="Crest Partners"
                width={685}
                height={100}
                unoptimized
                className="h-[32px] w-auto"
              />
            </Link>
            <p className="text-[#3E4C59] leading-relaxed font-normal text-[16px]">
              We help tech companies establish and operate their own dedicated tech entity in Costa Rica — your team, your brand, fully administered by us.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[13px] text-black hover:text-[#2574A7] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Company</p>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-[13px] text-black hover:text-[#2574A7] transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[13px] text-black hover:text-[#2574A7] transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <WhatsAppLink className="text-[13px] text-black hover:text-[#2574A7] transition-colors" />
              </li>
              <li>
                <BookCallLink className="text-[13px] text-[#2574A7] font-semibold hover:underline transition-colors">
                  Book a 30-min call →
                </BookCallLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D8E2EA]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#5A6A7A]">
            © {new Date().getFullYear()} Crest Partners · San José, Costa Rica
          </p>
        </div>
      </div>
    </footer>
  )
}
