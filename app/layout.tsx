import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
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
      </body>
    </html>
  )
}
