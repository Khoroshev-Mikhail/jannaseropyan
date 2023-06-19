/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/pl30',
  assetPrefix: '/pl30/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
