import type { NextConfig } from "next";
import "./src/env";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  typedRoutes: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "*" }] },
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
