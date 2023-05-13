/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config,{ isServer,webpack },) => {
    if(isServer === false){
      config.plugins.push(new webpack.IgnorePlugin({resourceRegExp: /^whatap/, contextRegExp: /WhatapAgent$/}));s
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


