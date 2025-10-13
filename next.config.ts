import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true, // <-- enables Partial Prerendering
  },
};

export default nextConfig;
