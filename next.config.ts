import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The knowledge files are read with fs at request time: make sure Vercel
  // bundles them with the chat route.
  outputFileTracingIncludes: {
    "/api/chat": ["./knowledge/**"],
    "/api/status": ["./knowledge/**"],
  },
};

export default nextConfig;
