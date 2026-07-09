import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '6a4fb165ae4883bf378c6a69.imgix.net' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options',           value: 'DENY'                              },
        { key: 'X-Content-Type-Options',    value: 'nosniff'                           },
        { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin'   },
      ],
    }]
  },
  async redirects() {
    return [
      { source: '/give',    destination: '/donate', permanent: true  },
      { source: '/partner', destination: '/church', permanent: false },
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
