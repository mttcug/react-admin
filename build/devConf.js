const baseConf = require('./baseConf')
const merge = require('webpack-merge')

const config = merge(baseConf, {
    mode: 'development',
    devtool: 'devtool'
    // devServer: {
    //     inline: true,
    //     port: 9006,
    //     compress: true,
    //     open: true
    // }
})

module.exports = config
