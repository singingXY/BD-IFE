const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  //生成Source Maps（使调试更容易）
  //对小到中型的项目中，eval-source-map是一个很好的选项，只应该在开发阶段使用它
  entry: __dirname + '/src/main.js', //已多次提及的唯一入口文件
  mode: 'production',
  output: {
    path: __dirname + '/dist', //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  devServer: {
    contentBase: '.', //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  module: {
    rules: [
      {
        test: /(.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /.san$/,
        use: {
          loader: 'san-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    })
  ]
}
