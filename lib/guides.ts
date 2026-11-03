/** Guides registry — used by /guides, the sitemap and metadata. */
export type Guide = {
  slug: string
  title: string
  description: string
  /** ISO date of the last content update (shown on the page and used in the sitemap). */
  updated: string
  readMinutes: number
}

export const GUIDES: Guide[] = [
  {
    slug: 'entity-vs-eor-costa-rica',
    title: 'Entity vs EOR in Costa Rica: Which Is Right for Your Engineering Team?',
    description:
      'Own entity or Employer of Record in Costa Rica? Compare cost, IP, control, timelines and Free Trade Zone eligibility — and when each one makes sense.',
    updated: '2026-11-03',
    readMinutes: 8,
  },
]
