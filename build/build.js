const buildConf =require('./prodConf')
const webpack = require('webpack')

webpack(buildConf, (err, status) => {
  console.log('err:', status)
  console.log('-----------好棒啊，打包成功啦-------------')
})
