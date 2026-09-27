import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og'

export const alt = 'Crest Partners — Your engineering hub in Costa Rica. Owned by you. Run by us.'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({ title: 'Your engineering hub in Costa Rica. Owned by you. Run by us.' })
}
