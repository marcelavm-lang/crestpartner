import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Who We Are — 25+ Years Building Tech Teams in Costa Rica | Crest Partners',
  description: 'The founders and partners behind Crest Partners, building tech operations in Costa Rica since 2001.',
  path: '/who-we-are',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
