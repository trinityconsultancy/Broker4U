/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [400, 600, 800, 1200],
    minimumCacheTTL: 60,
  },
}

export default nextConfig
