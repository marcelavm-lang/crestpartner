import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Optimized by Next/Vercel: logos and photos are served resized (srcset) instead of full-size PNGs.
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Send the stable production *.vercel.app aliases to the real domain (preview URLs are unaffected).
  async redirects() {
    return ['crest-partners.vercel.app', 'crest-partners-marcela-7233s-projects.vercel.app'].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host' as const, value: host }],
      destination: 'https://www.crestpartnerscr.com/:path*',
      permanent: true,
    }))
  },
}

export default nextConfig
