/**
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:19:20
 * @LastEditTime: 2021-10-12 15:43:12
 * @LastEditors: 郑钊宇
 * @Description: 
 */

 const path = require('path')// 引入path模块
 var webpack = require('webpack');
 
 function resolve(dir) {
   return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
 }
 
 module.exports = {
   publicPath: './',
   chainWebpack: (config) => {
     config.resolve.alias
       .set('@', resolve('./src'))
       .set('components', resolve('./src/components'))
       .set('views', resolve('src/views'))
       .set('assets', resolve('src/assets'))
   },
   configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
 }
 
