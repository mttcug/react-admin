const path = require('path')
const webpack = require('webpack')
const htmlWabpackPlugin = require('html-webpack-plugin')

const config = {
    context: path.resolve(__dirname, '../'),
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../cx-react'),
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: [".js", '.jsx', ".json", ".html", ".scss"],
        alias: {
            '@': './src',
            "$C": "./src/Components"
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWabpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}

module.exports = config
