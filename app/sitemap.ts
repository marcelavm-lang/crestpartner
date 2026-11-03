import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { CASE_STUDIES } from '@/lib/case-studies'
import { GUIDES } from '@/lib/guides'
import { ES_ROUTES } from '@/lib/i18n'

const STATIC_ROUTES = [
  '/',
  '/services',
  '/case-studies',
  '/why-costa-rica',
  '/ai-engineering-teams',
  '/guides',
  '/who-we-are',
  '/careers',
  '/contact',
  '/expansion-plan',
  '/impact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  // Date of the last content update — bump when page content changes (not the build time).
  const now = new Date('2026-11-03')
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
    ...GUIDES.map((g) => ({
      url: `${base}/guides/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...Object.values(ES_ROUTES).map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '/es' ? 0.9 : 0.6,
    })),
  ]
}
