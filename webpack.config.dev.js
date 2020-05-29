const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack= require("webpack")

//与基础配置进行组合
//特定的环境配置会覆盖基础配置,基础配置里不要写plugin

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    index: "./example/example.tsx"
  },
  //配置其他插件
  plugins: [
    //自动关联HTML用的插件
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: "JD-React-UI"
    }),
    //注入全局环境变量
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      'process.env': JSON.stringify(process.env.NODE_ENV)
    })
  ],
})
