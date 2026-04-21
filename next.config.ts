import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/offres", permanent: true },
      { source: "/tarifs", destination: "/offres", permanent: true },
    ];
  },
};

export default nextConfig;
