// Файл: next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['framer-motion'], // <-- ДОБАВЬ ЭТУ СТРОКУ
};

export default config;