## js兼容性

- 安装webpack `cnpm i webpack webpack-cli -D`
- 安装babel `cnpm i babel-loader @babel/core @babel/preset-env @babel/preset-react  -D`


1 直接输入代码
```js
const a = (n1,n2) => n1+n2; 
console.log(a);
```
webpack后变成了
```js
console.log(((o,l)=>o+l));
```


此处肯定不能识别



## 为什么安装了babel-loader 还要安装@babel/preset-env

- babel-loader 默认转换器
- babel-core


1 先把es6转成es6语法树 （@babel/core做的）
2 然后调用预设把 es6语法树转成es5语法树（@babel/preset-env做的）
3 es5语法树生成es5代码（@babel/core做的）



## 使用装饰器

cnpm i @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D


## 转换promise

"@babel/preset-env"
如果不加选项，index.js中写入promise时，不会转成es5
所以需要加选项

- 一种方案
可以直接在Index.js 文件顶部引入 require('@babel/polyfill')
- 另一种按需加载
```JS
[
   "@babel/preset-env",
   {
       useBuiltIns:'usage', // 按需加载polyfill
       corejs:{version:3}, // 制定core,js的版本号 2 或者3 polyfill
       target:{ // 指定要兼容那些浏览器
        chrome:'60',
        firefox:'60',
        ie:'9',
        safari:'10',
        edge:'17'

       }
   } 
]
```

core-js是什么
它是JavaScript标准库的polyfill

是一个给低版本的浏览器提供接口的库 如promise map set



