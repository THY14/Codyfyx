import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Pin the workspace root so Next.js doesn't pick up an unrelated lockfile
  // elsewhere on the machine (it stays correct on Vercel too).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
