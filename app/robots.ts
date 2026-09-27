import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  // Only the production deployment is indexable; Vercel previews are blocked.
  if (process.env.VERCEL_ENV === 'production') {
    return {
      rules: { userAgent: '*', allow: '/' },
      sitemap: `${SITE.url.replace(/\/$/, '')}/sitemap.xml`,
    }
  }
  return { rules: { userAgent: '*', disallow: '/' } }
}
