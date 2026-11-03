import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Contacte a Crest Partners | Arme su equipo en Costa Rica',
  description: '¿Planea un hub de ingeniería en Costa Rica? Cuéntenos sobre su empresa — un fundador de Crest Partners responde en menos de 24 horas, nunca un vendedor.',
  path: '/es/contact',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
