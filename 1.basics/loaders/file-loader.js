/**
 * loader raw
 * 
 * true loader得到的是一个二进制的buffer
 * fasle loader 得到的是一个utf-8字符串
 */

function loader(source) {
    // fs.readFile 拿到source

    // 1 先生成文件名
    let filename = 'cb408f46b0.png'
    // 2 向输出目录写入一个文件 this.emitFile(filename)

    // 3 返回一个js脚本
    return `module.exports = "${filename}"`
}

loader.raw = true;
module.exports = loader;