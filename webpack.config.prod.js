const base = require("./webpack.config")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin


module.exports = Object.assign({}, base, {
  mode: "production",
  plugins: [
    //直接写会覆盖基础的plugins
    ...base.plugins,
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  //不需要打包的依赖
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: 'ReactDOM',
  //   },
  // }
})
