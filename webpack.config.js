const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")
module.exports = {
  mode: "development",
  // 入口 这里应用程序开始执行
  // 配置多入口使第三方JS库与业务代码分离
  entry: {
    main: path.resolve(__dirname, "src/index.tsx"),
    vendor: ["react", "react-dom", "axios"],
  },
  // 打包出口
  output: {
    // 输出文件的目标路径
    path: path.resolve(__dirname, "dist"),
    // 输出的文件名  默认为main.js
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    // 静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
    // 一般用于PRD环境下静态资源CDN的路径
    publicPath: "./",
  },
  // dev-server配置
  devServer: {
    hot: true,
    port: 3000,
    compress: true,
    // 代表本地端口的根目录localhost:8080/ 默认请求index.html
    publicPath: "/",
    // 静态资源路径，本地内存中没有静态资源会去对应路径找
    contentBase: path.resolve(__dirname, "dist"),
    // 感觉没用
    // stats: 'none'
  },
  resolve: {
    //自动补充导入模块的后缀
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    //绝对路径的缩写
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
        // style-loader会把css文件写进js里面，可以单独分离出来
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // dist的CSS中的相对路径
            options: {publicPath: "../"},
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            //小体积图片会转译成base64打包到JS文件中，大文件会通过file-loader单独拷贝
            loader: "url-loader",
            options: {
              limit: 8192,
              outputPath: "img",
              name: `[name]_[hash:8].[ext]`,
            },
          },
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: {
      //     loader: 'file-loader'
      //   }
      // }
    ],
  },
  optimization: {
    minimizer: [
      //压缩JS文件
      new UglifyWebpackPlugin({
        //并行数量
        parallel: 4,
      }),
    ],
    //   把vendor中共用模块抽离出来复用
    splitChunks: {
      chunks: "all",
      // cacheGroups: {
      // vendors: {
      //   test: /[\\/]node_modules[\\/]/i,
      //   chunks: "all"
      // }
      // }
    },
    // The runtime should be in its own chunk
    // runtimeChunk: {
    //   name: "runtime"
    // }
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
