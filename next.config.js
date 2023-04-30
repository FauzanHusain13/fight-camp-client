/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fight-camp-server-130806.up.railway.app'],
  },
}

module.exports = nextConfig
