const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[hash:5].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // 预设presets是插件plugins的一个集合
                // 可以去node_module 查看@babel/preset-env下的package.json
                // 因为这两个不常用，所以需要单独安装
                // 举例：套餐没有的，需要单点
                "@babel/preset-env", // 可以转换js语法
                "@babel/preset-react", // 可以转换jsx语法
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                ["@babel/plugin-proposal-class-properties", { loose: true }],
              ],
            },
          },
        ],
      },
    ],
  },
};
