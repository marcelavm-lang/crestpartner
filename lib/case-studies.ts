/** Case study registry — used for metadata, Open Graph images and the sitemap. */
export type CaseStudy = {
  slug: string
  client: string
  /** Short line used as the Open Graph image subtitle. */
  summary: string
  /** Search-result description (120–160 chars), built only from facts stated on the case page. */
  seoDescription: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'targusinfo',
    client: 'TARGUSinfo',
    summary: `Where the model was born — before Crest.`,
    seoDescription: `Before founding Crest Partners in 2006, our founders built TARGUSinfo's Costa Rica operation to 200+ collaborators — a key part of Neustar's $650M acquisition.`,
  },
  {
    slug: 'verisk',
    client: 'Infutor (now part of Verisk)',
    summary: `From a small analytics team to a 55x revenue multiple.`,
    seoDescription: `Infutor Data Solutions (now part of Verisk): a Costa Rica data and software center built from scratch, 55x revenue growth and a $225M acquisition by Verisk.`,
  },
  {
    slug: '66degrees',
    client: '66degrees',
    summary: `11+ years and counting.`,
    seoDescription: `11+ years building 66degrees' Costa Rica engineering team — a Google Cloud Partner of the Year — with less than 1% involuntary turnover.`,
  },
  {
    slug: 'ltv-co',
    client: 'LTV Co.',
    summary: `The definitive case study.`,
    seoDescription: `How LTV Co. grew from one person in Costa Rica to a 120-person engineering and data hub — 13x revenue, a 97.6 GPTW Trust Index and a $400M exit.`,
  },
  {
    slug: 'think-unlimited',
    client: 'Think Unlimited',
    summary: `A fully product-driven team built entirely in Costa Rica.`,
    seoDescription: `Think Unlimited's product is built 100% by its Costa Rica team — a product-driven engineering operation with less than 1% involuntary turnover.`,
  },
  {
    slug: 'strategio',
    client: 'Strategio',
    summary: `A new chapter in talent.`,
    seoDescription: `Strategio's talent operation in Costa Rica, established with Crest Partners in 2025 — 8 collaborators in its talent vertical.`,
  },
]

export function getCaseStudy(slug: string): CaseStudy {
  const found = CASE_STUDIES.find((c) => c.slug === slug)
  if (!found) throw new Error(`Unknown case study: ${slug}`)
  return found
}
