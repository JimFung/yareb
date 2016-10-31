let HtmlWebpackPlugin = require('html-webpack-plugin')
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: `index.html`,
  inject: `body`
})

let CopyWebpackPlugin = require('copy-webpack-plugin')
let CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: `${__dirname}/src/logic`,
    to: `${__dirname}/build/`
  },{
    from: `${__dirname}/src/views/styles`,
    to: `${__dirname}/build/styles`
  }])

module.exports = {
  entry: './src/views/index.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
}
