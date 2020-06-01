const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")
module.exports = {
  mode: "development",
  // 入口 这里应用程序开始执行
  entry: path.resolve(__dirname, "src/index.tsx"),
  // 打包出口
  output: {
    // 输出文件的目标路径
    path: path.resolve(__dirname, "dist"),
    // 输出的文件名  默认为main.js
    filename: "index.js",
    // 输出解析文件的目录。静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
    publicPath: "/",
  },
  // dev端口
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    // stats: 'none'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      //压缩JS文件
      new UglifyWebpackPlugin({
        parallel: 4,
      }),
    ],
  },
  plugins: [
    //自动关联HTML用的插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      title: "webpack-template",
    }),
    //注入全局环境变量
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env": JSON.stringify(process.env.NODE_ENV),
    }),
    new CleanWebpackPlugin(),
  ],
}
