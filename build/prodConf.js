const path = require('path')
const baseConf = require('./baseConf')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const utils = require('./utils.js')

const config = merge(baseConf, {
    mode: 'production',
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            extract: true,
            usePostCSS: true
        })
    },
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
			name: false,
			cacheGroups: {
				default: {
                    name: 'page'
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
                reactBase: {
                  test: (module) => {
                    return /react|redux|prop-types/.test(module.context);
                  }, // 直接使用 test 来做路径匹配，抽离react相关代码
                  chunks: "initial",
                  name: "reactBase",
                  priority: 1,
                }
			}
		}
	}
})

module.exports = config
