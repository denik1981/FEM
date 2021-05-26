const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    publicPath: '/huddlelandingpage/',
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets'),
    },
  },
  devServer: {
    open: true,
    openPage: 'huddlelandingpage/',
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.stats = 'summary';
    config.output.path = path.resolve(__dirname, `../../public/${path.basename(__dirname)}`);
    config.output.publicPath = '/huddlelandingpage/';
  } else {
    config.mode = 'development';
    config.stats = 'normal';
    config.stats.errorStack = false;
  }
  return config;
};
