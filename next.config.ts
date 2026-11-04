import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{
    dangerouslyAllowSVG: true,
  remotePatterns:[{protocol:"https", hostname:"commons.wikimedia.org"}]
 }
};

export default nextConfig;
