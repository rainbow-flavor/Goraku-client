/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	rewrites: () => {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:8085/api/v1/:path*",
			},
		];
	},
};

module.exports = nextConfig;
