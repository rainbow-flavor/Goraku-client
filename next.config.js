// @ts-ignore
import WhatapAgent from 'whatap';
WhatapAgent.NodeAgent;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config,{ isServer,webpack },) => {
    if(isServer === false){
      config.plugins.push(new webpack.IgnorePlugin({resourceRegExp: /^whatap/, contextRegExp: /.*$/}));
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


