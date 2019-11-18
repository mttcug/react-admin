const path = require('path')
const baseConf = require('./baseConf')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const config = merge(baseConf, {
    mode: 'production',
    devtool: 'source-map',
	optimization: {
		runtimeChunk: {
			name: 'manifest'
		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				uglifyOptions: {
					warnings: false
				}
			}),
			new OptimizeCSSPlugin({
				cssProcessor: require('cssnano'),
				canPrint: true,
				cssProcessorOptions: true
					? {
						parser: require('postcss-safe-parser'),
						map: { inline: false },
						autoprefixer: true,
						// 避免 cssnano 重新计算z-index
						safe: true
					}
					:
					{
						parser: require('postcss-safe-parser'),
						autoprefixer: true,
						safe: true
					}
			})
		],
		splitChunks: {
			chunks: 'all', // initial(初始块)、async(按需加载块)、all(全部块)
			minSize: 20000,
			minChunks: 1,
			maxAsyncRequests: 1024,
			maxInitialRequests: 1024,
			name: true,
			cacheGroups: {
				default: false,
				vue: {
					name: 'vue',
					chunks: 'initial',	// 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块，默认)
					minChunks: 1,
					priority: 3,
					reuseExistingChunk: false,
					test: /vue/
				},
				router: {
					name: 'router',
					chunks: 'initial',
					minChunks: 1,
					priority: 3,
					reuseExistingChunk: false,
					test: /router|service/
				},
				vendor: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 1,
					priority: 2,
					reuseExistingChunk: true,
					// test: /node_modules\/(.*)\.js/
					test: /[\\/]node_modules[\\/]/
				},
				assets: {
					name: 'assets',
					chunks: 'all',
					minChunks: 2,
					priority: 3,
					reuseExistingChunk: true,
					test: path.resolve('src/assets')
				},
				components: {
					name: 'components',
					chunks: 'all',
					minChunks: 2,
					priority: 3,
					reuseExistingChunk: true,
					test: path.resolve('src/components')
				},
				styles: {
					name: 'styles',
					chunks: 'all',
					minChunks: 2,
					reuseExistingChunk: true,
					enforce: true,
					test: /\.(styl|scss|css)$/
				}
			}
		}
	}
})

module.exports = config
