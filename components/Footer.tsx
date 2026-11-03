'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import { BookCallLink, WhatsAppLink } from '@/components/CtaLinks'
import { usePathname } from 'next/navigation'
import { UI, localeFromPath } from '@/lib/i18n'

export default function Footer() {
  const locale = localeFromPath(usePathname())
  const t = UI[locale]
  const services = t.services
  const company = t.company
  return (
    <footer className="border-t border-[#D8E2EA] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={locale === 'es' ? '/es' : '/'} className="flex items-center mb-4">
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
              {t.footerTagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">{t.footerServices}</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[14px] text-black hover:text-[#2574A7] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">{t.footerCompany}</p>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-[14px] text-black hover:text-[#2574A7] transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6A7A] mb-4">{t.footerContact}</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[14px] text-black hover:text-[#2574A7] transition-colors [overflow-wrap:anywhere]"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <WhatsAppLink className="text-[14px] text-black hover:text-[#2574A7] transition-colors" />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/102177861/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-black hover:text-[#2574A7] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <BookCallLink className="text-[14px] text-[#2574A7] font-semibold hover:underline transition-colors">
                  {t.bookCall} →
                </BookCallLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D8E2EA]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[13px] text-[#5A6A7A]">
            © {new Date().getFullYear()} Crest Partners · {SITE.address.short}
          </p>
        </div>
      </div>
    </footer>
  )
}
