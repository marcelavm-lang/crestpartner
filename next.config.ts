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
}

export default nextConfig
