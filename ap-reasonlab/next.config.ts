import type { NextConfig } from "next";
import { KNOWN_REDIRECTS } from "./lib/known-redirects";

const nextConfig: NextConfig = {
  // Large managed-content saves / base64 file uploads (App Router).
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  async redirects() {
    return KNOWN_REDIRECTS.map((entry) => ({
      source: entry.from,
      destination: entry.to,
      permanent: true,
    }));
  },
};

export default nextConfig;
