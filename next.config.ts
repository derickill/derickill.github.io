import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true, 
  },
  // On ne met RIEN dans basePath car ton dépôt est derickill.github.io
};

export default nextConfig;