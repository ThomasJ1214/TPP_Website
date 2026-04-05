import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add external image domains here if needed in future
    remotePatterns: [],
  },
};

export default nextConfig;
