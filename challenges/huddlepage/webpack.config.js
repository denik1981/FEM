const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const config = {
  stats: 'summary',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    404: path.resolve(__dirname, 'src/404/404.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/huddlelandingpage/',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets'),
    },
  },
  devServer: {
    open: { app: [''] },
    openPage: 'huddlelandingpage/',
    host: 'localhost',
  },

  plugins: [
    new HtmlWebpackPlugin({ chunks: ['main'], filename: 'index.html', template: 'html-loader!src/index.html' }),
    new HtmlWebpackPlugin({ chunks: ['404'], filename: '404.html', template: 'html-loader!src/404/404.html' }),
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
    config.output.publicPath = '/huddlelandingpage/';
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }));
  } else {
    config.mode = 'development';
    config.devServer.open.app = env.browser;
  }
  return config;
};
