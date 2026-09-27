import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og'
import { getCaseStudy } from '@/lib/case-studies'

const cs = getCaseStudy('ltv-co')

export const alt = `${cs.client} case study — Crest Partners`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({ eyebrow: 'Case study', title: cs.client, subtitle: cs.summary })
}
