import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig