import type { Metadata } from 'next'

export const SITE_NAME = 'Crest Partners'

// Default share image (app/opengraph-image.tsx). Case studies pass their own
// (app/case-studies/<slug>/opengraph-image.tsx) via the `image` option.
const DEFAULT_OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Crest Partners — Your engineering hub in Costa Rica. Owned by you. Run by us.',
}

/** Builds per-page metadata with canonical URL + matching Open Graph / Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image?: { url: string; alt: string }
}): Metadata {
  const ogImage = image ? { ...DEFAULT_OG_IMAGE, ...image } : DEFAULT_OG_IMAGE
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.url],
    },
  }
}
