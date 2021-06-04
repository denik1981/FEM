const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const config = {
  devtool: 'inline-source-map',
  stats: 'summary',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    404: path.resolve(__dirname, 'src/404/404.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets'),
    },
  },
  devServer: {
    open: { app: [''] },
    // openPage: 'huddlepage/',
    host: 'localhost',
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: 'index.html',
      template: 'index.ejs',
    }),
    new HtmlWebpackPlugin({ chunks: ['404'], filename: '404.html', template: 'src/404/404.html' }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset/resource',
      },

    ],
  },
};

module.exports = (env) => {
  if (isProduction) {
    config.mode = 'production';
    config.output.clean = true;
    config.output.path = path.resolve(__dirname, `../../public/${path.basename(__dirname)}`);
    config.output.publicPath = '/huddlepage/';
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }));
  } else {
    config.mode = 'development';
    config.devServer.open.app = env.browser;
  }
  return config;
};
