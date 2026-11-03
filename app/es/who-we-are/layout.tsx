import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Quiénes somos — 20 años en la tecnología de Costa Rica | Crest Partners',
  description: 'Los fundadores y socios detrás de Crest Partners, que construyen operaciones tecnológicas en Costa Rica desde 2006.',
  path: '/es/who-we-are',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
