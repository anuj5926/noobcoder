import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: __dirname },
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "gsap"],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/our-work", destination: "/portfolio", permanent: true },
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/services/ai", destination: "/services/ai-solutions", permanent: true },
      { source: "/services/ai-machine-learning", destination: "/services/ai-solutions", permanent: true },
      { source: "/services/seo", destination: "/services/digital-marketing", permanent: true },
      { source: "/services/devops", destination: "/services/cloud-devops", permanent: true },
      { source: "/services/maintenance", destination: "/services/maintenance-support", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
