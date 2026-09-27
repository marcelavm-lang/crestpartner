import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata({
  title: 'Build Your Engineering Hub in Costa Rica | Crest Partners',
  description: 'We help US companies launch, hire, and operate high-performing engineering teams in Costa Rica — fully owned, fully integrated, and built for long-term scale.',
  path: '/lp',
})

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
