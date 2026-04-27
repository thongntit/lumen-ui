/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@thongntit/lumen-ui"],
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@thongntit/lumen-ui", "lucide-react"],
  },
};

export default nextConfig;
