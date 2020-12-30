## eslint 

- 安装 `cnpm install eslint eslint-loader babel-eslint --D`


- eslint `核心包`
- eslint-loader `webpack loader`
- babel-eslint `转成es6的工具`

```js
{
    test:/\.jsx?$/,
    loader:'eslint-loader', // 先进行代码校验，然后在编译代码
    enforce:'pre', // 强制指定顺序 pre之前 pre normal inline post 必须在转化前进行校验
    options:{
        fix：true // 启动自动修复
    }, 
    include:resolve(__dirname,'src') // 只检查src目录的文件  白名单
    exclude:/node_modules/ // 不需要检查里面的代码
}
```


## 配置文件.eslintrc.js
```js
module.exports = {
    root: true, //根配置文件 如果使用airbnb 那么就需要改成extends:'airbnb'
    parser:"babel-eslint", // 需要一个parser解析器把源代码转成抽象语法树  babel-eslint将源代码转成语法树
    //指定解析器选项
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2015
    },
    //指定脚本的运行环境
    env: {
        browser: true,
    },
    // 启用的规则及其各自的错误级别
    rules: { // 这里的规则可以覆盖上面继承的规则
        "indent": "off",//缩进风格 ['error', 2 ]  不是2个缩进就报错
        "quotes":  "off",//引号类型 
        "no-console": "error",//禁止使用console
    }
}
```


## 自动修复
安装vscode eslint插件