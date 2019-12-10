const baseConf = require('./baseConf')
const merge = require('webpack-merge')

const config = merge(baseConf, {
    mode: 'development',
    devtool: 'devtool',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})

module.exports = config
