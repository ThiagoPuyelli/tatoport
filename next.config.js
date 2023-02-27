/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' }
    }
  },
  images: {
    loader: 'akamai',
    path: 'public/img',
    unoptimized: true
  },
}

module.exports = nextConfig
