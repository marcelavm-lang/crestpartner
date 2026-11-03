import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Talk to a Founder | Crest Partners',
  description: 'Planning an engineering hub in Costa Rica? Tell us about your company — a Crest Partners founder replies within 24 hours, never a sales rep.',
  path: '/contact',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
