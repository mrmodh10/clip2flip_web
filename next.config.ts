import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/clip2flip_web",
  assetPrefix: "/clip2flip_web/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
        pathname: "/api/v1/image/**",
      },
    ],
  },
};

export default nextConfig;
