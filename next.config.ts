import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         // important for static export
  images: {
    unoptimized: true,      // allows <Image /> to work without server optimization
  },
};

export default nextConfig;
