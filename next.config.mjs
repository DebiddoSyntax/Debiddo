/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      type: 'asset/resource',
    });
    return config;
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
