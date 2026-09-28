import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExpansionPlanWidget from '@/components/ExpansionPlanWidget'
import LinkedInInsight from '@/components/LinkedInInsight'
import { Analytics } from '@vercel/analytics/next'
import { SITE } from '@/lib/site'

const spartan = localFont({
  src: [
    { path: '../public/fonts/Spartan-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Spartan-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Spartan-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-spartan',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Crest Partners — Build Your Tech Operation in Costa Rica',
  description:
    'We help tech companies establish their own dedicated entity in Costa Rica — your team, your brand, fully administered by us. Not outsourcing. Ownership.',
  keywords: 'Costa Rica operations, dedicated entity, tech expansion, Latin America hub, nearshore operations, dedicated team',
  openGraph: {
    siteName: 'Crest Partners',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/crest-partners-logo/png/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/crest-partners-logo/png/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/crest-partners-logo/png/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/crest-partners-logo/png/apple-touch-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Crest Partners',
  url: SITE.url,
  logo: `${SITE.url.replace(/\/$/, '')}/crest-partners-logo/png/crest-partners-logo-color-1200.png`,
  email: SITE.email,
  telephone: '+506 8891-3444',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San José',
    addressCountry: 'CR',
  },
  // TODO: add the company LinkedIn URL, e.g. ['https://www.linkedin.com/company/<crest-partners>']
  sameAs: [] as string[],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spartan.variable}>
      <body className="font-spartan antialiased pb-16 md:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ExpansionPlanWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        <LinkedInInsight />
      </body>
    </html>
  )
}
