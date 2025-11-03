/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   inlineCss: true, // Disabled - causes large bundles
  // },
  transpilePackages: [],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
