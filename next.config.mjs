/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.beehiiv.com',
      },
      {
        protocol: 'https',
        hostname: 'beehiiv-marketing-images.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
