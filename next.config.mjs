/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  compress: false,
  swcMinify: true,
  publicRuntimeConfig: {
    baseUrl: "http://localhost",
  },
  images: {
    domains: ["localhost", "picsum.photos"],
  },
};

export default nextConfig;
