const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.conf')
const webpackConfigDev = {
  mode: 'development', // 通过 mode 声明开发环境

  output: {
    path: path.resolve(__dirname, '../dist'),
    // 打包多出口文件
    filename: './js/[name].bundle.js'
  },

  plugins: [
    //热更新
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // eslint-disable-next-line no-useless-escape
      'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
    })
  ],

  devtool: 'cheap-module-eval-source-map', // 开启调试模式

  devServer: {
    contentBase: path.join(__dirname, '../src'),
    publicPath: '/',
    host: '127.0.0.1',
    port: '8090',
    overlay: true, // 浏览器页面上显示错误
    // open: true, // 开启浏览器
    stats: 'errors-only', //stats: "errors-only"表示只打印错误：
    hot: true, // 开启热更新
    //服务器代理配置项
    proxy: { //启动代理服务器
      '/api': {
        target: 'http://www.127.0.0.1:3000', //把本地api转发到3000端口
        secure: false, //如果是https网址,设置这个
        // pathRewrite: {
        //   'header.json': 'demo.json' //把3000端口的header接口转发到demo接口
        // },
        changeOrigin: true //如果网站设置了changeOrigin不允许爬虫,设置这个
      }
    }
  }
}
module.exports = merge(webpackConfigBase, webpackConfigDev)
