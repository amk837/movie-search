/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 30 * 24 * 60 * 60, // 30days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '**/**',
      },
    ],
  },
};

module.exports = nextConfig;
