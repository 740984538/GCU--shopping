const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  //关闭eslint
  lintOnSave:false,
  //代理跨域   解决由于域名、端口号、协议引起的跨域问题
  devServer:{
    proxy:{
      '/api':{
        target:'http://39.98.123.211',
        }
      }
    }
  })
