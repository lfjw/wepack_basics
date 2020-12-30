const babelCore = require('@babel/core')

/**
 * 
 * @param {*} source 源文件内容  let sum = (a,b) => a+b
 * 
 * babel-loader 的作用就是调用babel-core 转化代码
 * babel-loader 把源代码转成抽象语法树，进行遍历和生成，它本身也并不知道具体转成什么语法，以及语法如何转换
 * 那么此时就需要另一个包@babel/preset-env
 */
function loader(source) {
    // 需要将es6转化成es5
    let es5 = babelCore.transform(source, {
        presets: ["@babel/preset-env"]
    })
    return es5;
}

module.exports = loader;


/**
 * 1 先把es6转成es6语法树 （@babel/core做的）
 * 2 然后调用预设把 es6语法树转成es5语法树（@babel/preset-env做的）
 * 3 es5语法树生成es5代码（@babel/core做的）
 */