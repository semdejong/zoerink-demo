import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/aanleg.php", destination: "/tuinaanleg", permanent: true },
      { source: "/onderhoud.php", destination: "/onderhoud-renovatie", permanent: true },
      { source: "/informatie.php", destination: "/over-rene", permanent: true },
      { source: "/fotos.php", destination: "/fotos", permanent: true },
      { source: "/links.php", destination: "/over-rene", permanent: true },
      { source: "/privacy.php", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
