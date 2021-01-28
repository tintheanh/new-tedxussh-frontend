module.exports = {
	env: {
		SERVER: process.env.BACKEND_URI,
	},
	async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		];
	},
};
