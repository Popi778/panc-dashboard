import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   images: {
    // 'remotePatterns' é a forma moderna e segura de autorizar domínios
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crioula.net',
        port: '',
        pathname: '/site/wp-content/uploads/**', // Autoriza tudo dentro dessa pasta
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Autoriza qualquer imagem do placehold.co
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Autoriza qualquer imagem do cloudinary
      },
    ],
  },
};

export default nextConfig;
