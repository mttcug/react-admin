const baseConf = require('./baseConf')
const merge = require('webpack-merge')

const config = merge(baseConf, {
    mode: 'development',
    devtool: 'devtool',
    optimization: {
        runtimeChunk: true,// 将webpack打包后的主文件单独分离，默认是将主文件放在入口文件当中，当需要在入口文件之前引入打包的公共代码时需要用到，此项建议对webpack有一定了解后再理解，关于打包后的代码分析我会单独写一篇

        // 抽离公共代码
        splitChunks: {
            cacheGroups: {
                vendor: { // 抽离第三方插件
                    test: /node_modules/, // 指定是 node_modules 下的第三方包
                    chunks: 'initial', // initial 对于异步导入的文件不处理;async 异步chunk，只对异步导入的文件处理;all 全部chunk
                    name: 'common/vendor', // 打包后的文件名，任意命名,会逆优化首屏加载的速度,慎用，建议每个公共代码块都单独抽离或者手动配置
                    priority: 10 // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                },
                utils: { // 抽离自定义公共代码
                    test: /\.js$/,
                    chunks: 'initial',
                    name: true, // 每个页面的包只包含需要的文件,不会影响首屏加载的速度，good job
                    minSize: 0 // 只要超出 0 字节就生成一个新包,默认30000B
                }
            }
        }
    }
    // devServer: {
    //     inline: true,
    //     port: 9006,
    //     compress: true,
    //     open: true
    // }
})

module.exports = config
