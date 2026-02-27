import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@firecms/core", "@firecms/firebase", "@firecms/ui"],
};

export default nextConfig;
