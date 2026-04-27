/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lumen-ui"],
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lumen-ui", "lucide-react"],
  },
};

export default nextConfig;
