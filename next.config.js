const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
	exclude: path.resolve(__dirname, 'assets/icons'),
	webpack: (config) => {
		config.resolve.alias['~'] = path.resolve(__dirname);
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
});
