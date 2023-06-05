const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' repo.whatap-browser-agent.io/rum/prod/ static.cloudflareinsights.com;
  connect-src 'self' rum-ap-northeast-2.whatap-browser-agent.io;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  font-src 'self' fonts.gstatic.com data:;
  worker-src 'self' blob:;
  img-src 'self' *.imgur.com blob: data:;
`;
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Timing-Allow-Origin",
    value: "*",
  },
];

module.exports = async (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    webpack: (config, { isServer, webpack }) => {
      if (isServer === false) {
        config.plugins.push(
          new webpack.IgnorePlugin({
            resourceRegExp: /^whatap/,
            contextRegExp: /.*$/,
          })
        );
      }
      return config;
    },

    async headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ];
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
  return nextConfig;
};
