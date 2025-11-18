import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    // Use remotePatterns instead of the deprecated `domains` list.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.icecastleusa.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  output: 'export',
  distDir: 'out',
};

export default nextConfig;
