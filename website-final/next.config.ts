// next.config.ts
const nextConfig = {
  experimental: {
    turbo: {
      loaders: {}, // explicitly fallback
    },
    serverActions: true, // optional: if you use it
  },
};

export default nextConfig;
