
/**
 * loader 本质是一个函数
 * 接收源文件
 * 返回一个js模块代码
 */

function loader (source) {
    // 两种写法
    //return `module.exports = "${source}"`
    return `module.exports = ${JSON.stringify(source)}`
}

module.exports = loader