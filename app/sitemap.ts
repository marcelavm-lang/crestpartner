import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { CASE_STUDIES } from '@/lib/case-studies'

const STATIC_ROUTES = [
  '/',
  '/services',
  '/case-studies',
  '/why-costa-rica',
  '/who-we-are',
  '/careers',
  '/contact',
  '/expansion-plan',
  '/impact',
  '/lp',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  const now = new Date()
  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${base}${path === '/' ? '' : path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.7,
    })),
    ...CASE_STUDIES.map((c) => ({
      url: `${base}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
