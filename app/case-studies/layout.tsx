import { pageMetadata } from '@/lib/metadata'

// Metadata for /case-studies (the index page is a client component).
// Each /case-studies/<slug> page exports its own metadata, which overrides this.
export const metadata = pageMetadata({
  title: 'Case Studies — Teams Built in Costa Rica Since 2006 | Crest Partners',
  description: 'Six companies, from 8 people to 200+: TARGUSinfo, Infutor (now Verisk), 66degrees, LTV Co., Think Unlimited and Strategio.',
  path: '/case-studies',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
