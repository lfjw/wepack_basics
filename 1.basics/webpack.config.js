const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
//const rawLoader = require('./loaders/raw-loader')

module.exports = {
  mode: 'development',// 开发、生产、不指定环境
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),// 
    filename: 'main.js', // 输出文件名
    publicPath: '/', // 插入到html文件的前缀  /xx.js 或者 /weixin/xx.js
  },
  module: { // 转化代码
    rules: [
      {
        test: /\.txt$/,
        //use: resolve(__dirname, 'loaders', 'raw-loader.js')//'raw-loader'
        use: "raw-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // 多个从左往右执行
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // 多个从左往右执行
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] // 多个从左往右执行
      },
      {
        test: /\.(jpg|png|gif|bmp)$/,
        use: [
          // {
          //   loader:'file-loader',// require('./img') 读取文件，copy到dist目录,改名字
          //   options:{
          //     name:'[hash:10].[ext]', // ext 扩展名
          //     esModule: false, //esModule 为true, 需要通过default 取值img.src = logo.default; 可以不写default
          //   }
          // }, 

          {
            loader: 'url-loader',// url-loader 对file-loader增强
            options: {
              name: '[hash:10].[ext]', // ext 扩展名
              esModule: false, //esModule 为true, 需要通过default 取值img.src = logo.default; 可以不写default
              limit: 8 * 1024 // 文件体积小于limit 8kb，就转成base 64
            }
          },
        ]
      },

      {
        test:/\.html$/, // 解析html 中的引入图片的方式
        use:['html-loader']
      }
    ]
  },
  plugins: [ // 插件 扩展很多功能
    new htmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),// 以此项目为模板
    })
  ],
  // devserver 会启动一个http开发服务器，把一个文件夹当作静态根目录
  // 为了提高性能，使用内存文件系统，所以启动项目后，看不到静态目录
  // 默认情况下，devServer 会读取打包后的路径
  // 静态文件根目录是可以有多个的
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    writeToDisk: true, //会把打包后的文件，写到硬盘里
    port: 8080,
    open: true,
  }
}