const path = require('path')
const baseConf = require('./baseConf')
const merge = require('webpack-merge')

const config = merge(baseConf, {
    mode: 'production',
    devtool: 'source-map'
})

module.exports = config
