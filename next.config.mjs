/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable optimized package imports for better performance
    optimizePackageImports: ['lucide-react', '@radix-ui/react-toast', '@radix-ui/react-avatar'],
  },
  compiler: {
    // Enable optimizations
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },
  // Enable webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    return config
  },
  // Power optimizations
  poweredByHeader: false,
  // Generate static pages for better performance
  output: 'standalone',
};

export default nextConfig;
