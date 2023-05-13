/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config,{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },) => {
    if(isServer === false){
      config.resolve.fallback = {fs: false , cluster: false , net: false, child_process: false, v8: false}
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;


