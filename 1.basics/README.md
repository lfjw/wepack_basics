cnpm install  webpack webpack-cli --save-dev
cnpm i less less-loader -D
cnpm i node-sass sass-loader -D
cnpm i file-loader url-loader html-loader -D


webpack 是一个构建工作流

## webpack 学习顺序
- webpack5 实战使用
- webpack 优化
- webpack 工作流 ast抽象语法树
- loader
- plugin tapable
- hmr 手写热更新 实现原理

## 分包
- 现代软件开发中，分包是一个非常重要的思路
- 把一个大仓库尽可能拆分成不同的小仓库，不同的模块，lerna 
- webpack webpack-cli webpack-dev-server


## memory-fs
内存文件系统


## 引入图片方式
- 放在静态文件根目录中，通过html 中的image直接引用，需要配置`devServer.contentBase`
- 通过require import 引入
- 可以在css中通过url 引入图片， css-loader 来进行解析处理