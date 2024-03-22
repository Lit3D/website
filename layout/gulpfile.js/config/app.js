const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
	isProd: isProd,
	isDev: isDev,

	webpack: {
		mode: isProd ? "production" : "development",
		output: {
			filename: 'main.min.js',
		},
		// devServer: {
		// 	watchContentBase: true
		// },
		module: {
			rules: [
				{
					test: /\.(glsl|vs|fs|vert|frag)$/,
					include: /files/,
					exclude: /node_modules/,
					use: [
						'raw-loader',
						{
							loader: 'glslify-loader',
							options: {
								transform: [
									['glslify-hex', { 'option-1': true, 'option-2': 42 }]
								]
							}
						}
					]
				}
			]
		},
		// optimization: {
		// 	minimize: false
		// },
		// devtool: 'source-map',
	},
	imagemin: {
		verbose: true
	},
	fonter: {
		formats: ['ttf', 'woff']
	},
	favicons: {
		appName: '',
		appShortName: '',
		appDescription: '',
		icons: {
			favicons: true,
			appleIcon: true,
			android: true,
			windows: false,
			yandex: false,
			coast: false,
			firefox: false,
			appleStartup: false
		},
		path: "img/favicon/"
	}
}
