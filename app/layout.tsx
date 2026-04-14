import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExpansionPlanWidget from '@/components/ExpansionPlanWidget'

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
  title: 'Crest Partners — Nearshore Tech Operations in Costa Rica',
  description:
    'We help U.S. tech and data companies recruit, build and run high-performing engineering teams in Costa Rica — same time zone, a fraction of the cost, zero operational friction.',
  keywords: 'nearshore, Costa Rica, tech team, engineering, outsourcing, staff augmentation',
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spartan.variable}>
      <body className="font-spartan antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ExpansionPlanWidget />
      </body>
    </html>
  )
}
