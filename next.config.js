/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config,{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },) => {
    if(isServer === false){
      config.node = {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
      };
      config.plugins.push(new webpack.IgnorePlugin(/^(whatap)$/));
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


