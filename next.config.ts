import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/clip2flip_web" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/clip2flip_web/" : "",
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
