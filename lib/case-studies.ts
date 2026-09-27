/** Case study registry — used for metadata, Open Graph images and the sitemap. */
export type CaseStudy = {
  slug: string
  client: string
  /** First sentence of the case intro (used as meta description). */
  summary: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'targusinfo',
    client: 'TARGUSinfo',
    summary: "The partnership that started it all.",
  },
  {
    slug: 'verisk',
    client: 'Verisk Marketing Solutions',
    summary: 'From a small analytics team to a 55x revenue multiple.',
  },
  {
    slug: '66degrees',
    client: '66degrees',
    summary: '11+ years and counting.',
  },
  {
    slug: 'ltv-co',
    client: 'LTV Co.',
    summary: 'The definitive case study.',
  },
  {
    slug: 'think-unlimited',
    client: 'Think Unlimited',
    summary: 'A fully product-driven team built entirely in Costa Rica.',
  },
  {
    slug: 'strategio',
    client: 'Strategio',
    summary: 'A new chapter in talent.',
  },
]

export function getCaseStudy(slug: string): CaseStudy {
  const found = CASE_STUDIES.find((c) => c.slug === slug)
  if (!found) throw new Error(`Unknown case study: ${slug}`)
  return found
}
