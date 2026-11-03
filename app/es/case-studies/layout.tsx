import { pageMetadata } from '@/lib/metadata'

// Metadata for /es/case-studies (the index page is a client component).
export const metadata = pageMetadata({
  title: 'Casos de éxito — Hubs de ingeniería en Costa Rica | Crest Partners',
  description: 'Seis empresas, de 8 personas a más de 200: TARGUSinfo, Infutor (hoy Verisk), 66degrees, LTV Co., Think Unlimited y Strategio.',
  path: '/es/case-studies',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
