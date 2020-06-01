const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
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
    publicPath: "./",
  },
  // dev-server配置
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    // stats: 'none'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
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
        use: [{loader: MiniCssExtractPlugin.loader}, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            //小体积图片会转译成base64打包到JS文件中，大文件会通过file-loader单独拷贝
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images'
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/,
      //   loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
      // },
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
    //把CSS文件单独打包压缩
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
}
