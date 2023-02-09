const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$|\.html$|.\css/,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: true // 删除源文件
      })
      // nginx配置：
      // #========gzip start
      // # gzip
      // # 开启gzip
      // gzip on;
      // # 开启gzip静态压缩功能
      // gzip_static on;
      // # gzip缓存大小
      // gzip_buffers 4 16k;
      // # gzip http版本
      // gzip_http_version 1.1;
      // # gzip压缩级别 1-10
      // gzip_comp_level 5;
      // # gzip压缩类型
      // gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
      // # 是否在http header中添加Vary: Accept-Encoding，建议开启
      // gzip_vary on;
      // #========gzip end
    ]
  }
})
