/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig
