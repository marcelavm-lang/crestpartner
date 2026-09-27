import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Book a Call | Crest Partners',
  description: 'Tell us about your company — a founder replies within 24 hours.',
  path: '/contact',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
