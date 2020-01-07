const path = require('path')
const webpack = require('webpack')
const htmlWabpackPlugin = require('html-webpack-plugin')

const config = {
    context: path.resolve(__dirname, '../'),
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../cx-react'),
        chunkFilename: '[name].[hash].js',
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: ["ts", "tsx", ".js", '.jsx', ".json", ".html", ".scss", '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: [
                                'react-hot-loader/babel'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [path.resolve('../src/assets/svg')],
                options: {
                    symbolId: '[name]'
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                exclude: [path.resolve('../src/assets/svg')],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'src/assets/img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/index')
        }),
        new htmlWabpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}

module.exports = config
