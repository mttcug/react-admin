const config = require('./devConf.js')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const compiler = webpack(config)
var server = new webpackDevServer(compiler, {
  inline: true,
  hot: true,
  compress: true,
  open: true
})

server.listen('8008', 'localhost', () => {})
