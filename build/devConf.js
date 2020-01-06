const baseConf = require('./baseConf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const utils = require('./utils.js')

const config = merge(baseConf, {
    mode: 'development',
    devtool: 'devtool',
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            usePostCSS: true
        })
    }
})

module.exports = config
