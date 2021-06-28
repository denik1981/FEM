const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const config = {
  stats: 'summary',
  devtool: 'source-map',
  entry: { main: path.resolve(__dirname, 'src/index.js') },
  resolve: { alias: { assets: path.resolve(__dirname, 'assets') } },
  devServer: { open: { app: [''] }, host: 'localhost' },
  optimization: { runtimeChunk: 'single' },
  module: {
    rules: [
      { test: /\.css$/i, use: [stylesHandler, 'css-loader', 'postcss-loader'] },
      { test: /\.(|svg|png|jpg|gif)$/i, type: 'asset/resource' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'assets/misc/favicon.png',
      template: 'index.html',
      minify: false
    })
  ]
}

module.exports = (env) => {
  if (isProduction) {
    config.mode = 'production'
    config.output.clean = true
    config.output.path = path.resolve(__dirname, `../../public/${path.basename(__dirname)}`)
    config.output.publicPath = '/huddlepagecurved/'
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[contenthash][ext]' }))
  } else {
    config.mode = 'development'
    config.devServer.open.app = env.browser
  }
  return config
}
