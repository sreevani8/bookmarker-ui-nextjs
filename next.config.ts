/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  serverRuntimeConfig: {
    API_BASE_URL:
        process.env.SERVER_SIDE_API_BASE_URL ||
        (isDev ? 'http://localhost:8080' : 'http://bookmarker-api:8080'),
  },
  publicRuntimeConfig: {
    API_BASE_URL:
        process.env.CLIENT_SIDE_API_BASE_URL ||
        (isDev ? 'http://localhost:8080' : 'http://localhost:18080'),
  },
/**
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    API_BASE_URL: process.env.SERVER_SIDE_API_BASE_URL || 'http://bookmarker-api:8080',
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.CLIENT_SIDE_API_BASE_URL || 'http://localhost:18080',
  },*/

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

module.exports = nextConfig