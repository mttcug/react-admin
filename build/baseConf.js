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
        extensions: [".js", '.jsx', ".json", ".html", ".scss", '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '$C': path.resolve(__dirname, '../src/components'),
            '$P': path.resolve(__dirname, '../src/page'),
            '$R': path.resolve(__dirname, '../src/router')
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
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        },
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/index')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWabpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}

module.exports = config
