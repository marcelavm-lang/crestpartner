import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crest Partners',
    short_name: 'Crest',
    start_url: '/',
    display: 'standalone',
    theme_color: '#0E2233',
    background_color: '#FFFFFF',
    icons: [
      { src: '/crest-partners-logo/png/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/crest-partners-logo/png/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
