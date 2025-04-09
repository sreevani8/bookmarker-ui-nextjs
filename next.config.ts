/** import type { NextConfig } from "next"; */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bookmarks',
        permanent: true
      }
    ]
  }

}

module.exports = nextConfig;
