/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	rewrites: () => {
		return [
			{
				source: "/api/:path*",
				destination: "https://gorakuc.iro.ooo/api/v1/:path*",
			},
		];
	},
};

module.exports = nextConfig;
