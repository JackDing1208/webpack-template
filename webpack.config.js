const path = require('path');

module.exports = {
  mode: 'development',
  // 入口 这里应用程序开始执行
  entry: path.resolve(__dirname, 'src/index.tsx'),
  // 出口
  output: {
    // 输出文件的目标路径
    path: path.resolve(__dirname, 'dist'),
    // 输出的文件名
    filename: 'bundle.js',
    // 输出解析文件的目录。静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
    publicPath: '/'
  }
}
