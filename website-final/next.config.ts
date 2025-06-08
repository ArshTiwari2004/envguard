// next.config.ts
const nextConfig = {
  experimental: {
    turbo: {
      loaders: {}, // explicitly fallback
    },
    serverActions: true, // optional: if you use it
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during build
  },
};

export default nextConfig;
