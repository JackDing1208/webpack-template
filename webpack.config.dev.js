const base = require('./webpack.config')


//与基础配置进行组合
//特定的环境配置会覆盖基础配置,基础配置里不要写plugin

module.exports = Object.assign({}, base, {
  mode: 'development',
  //配置其他插件
})
