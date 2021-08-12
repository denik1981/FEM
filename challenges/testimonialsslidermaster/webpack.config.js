const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const cssMinimizerPluginSetttings = { minimizerOptions: { preset: ['default', { discardComments: { removeAll: true } }] } };
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isMonoBuild = process.env.MONO_BUILD ? process.env.MONO_BUILD === 'mono' : false;
const isProduction = process.env.NODE_ENV === 'production';
const isServe = process.env.WEBPACK_DEV_SERVER;

const publicPath = isProduction && !isServe ? path.sep + path.basename(__dirname) + path.sep : '';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const jsLoader = { loader: 'babel-loader', options: { presets: ['@babel/preset-env'], plugins: ['@babel/plugin-transform-runtime'] } };

const HTMLwebpackPluginSettings = {
  minify: false,
  favicon: 'assets/misc/favicon.png',
  template: 'index.html',
  filename: 'index.html'
};
const MiniCssExtractPluginSettings = { filename: '[contenthash].css' };
const bundleAnalizerPluginSettings = { openAnalyzer: false };

const statsSettings = {
  preset: 'detailed',
  assets: true,
  assetsSort: 'size',
  modules: false,
  moduleAssets: false,
  modulesSort: 'size',
  cachedAssets: false,
  cachedModules: false,
  runtimeModules: false,
  children: false,
  chunks: false,
  hash: false,
  outputPath: false,
  entrypoints: false,
  logging: 'none' //'info': 'none' | 'error' | 'warn' | 'info' | 'log' | 'verbose' | false
  // loggingDebug: ['HTMLWebpackPlugin', /HTMLWebpackPlugin/, /webpack/, (name) => name.contains('HTMLWebpackPlugin')],
  // loggingTrace: false,
  // reasons: true
};

const optimizationSettings = {
  runtimeChunk: 'single',
  moduleIds: 'deterministic',
  usedExports: true,
  minimize: isProduction,
  minimizer: ['...', new CssMinimizerPlugin(cssMinimizerPluginSetttings)],
  splitChunks: {
    cacheGroups: {
      vendor: { name: 'vendors', test: /[\\/]node_modules[\\/]/, chunks: 'all' },
      styles: { name: 'styles', test: /\.css$/, chunks: 'all', enforce: true }
    }
  }
};

const outputSettings = {
  path: isProduction ? path.resolve('..', '..', 'public', path.basename(__dirname)) : path.resolve(__dirname, 'dist'),
  publicPath: publicPath,
  clean: !isServe,
  assetModuleFilename: 'assets/[hash][ext]',
  filename: '[name].[contenthash].js'
};

const config = {
  mode: isProduction ? 'production' : 'development',
  stats: isMonoBuild ? 'summary' : statsSettings,
  devtool: 'source-map',
  devServer: { host: 'localhost' },
  optimization: optimizationSettings,
  entry: { main: path.resolve(__dirname, 'src/index.js') },
  output: outputSettings,
  resolve: { alias: { assets: path.resolve(__dirname, 'assets') } },
  module: {
    rules: [
      { test: /\.css$/i, use: [stylesHandler, 'css-loader', 'postcss-loader'] },
      { test: /\.(|svg|png|jpg|gif)$/i, type: 'asset/resource' },
      { test: /\.m?js$/, exclude: /node_modules/, use: jsLoader }
    ]
  }
};

module.exports = (env) => {
  config.plugins = [new HtmlWebpackPlugin(HTMLwebpackPluginSettings)];
  config.plugins.push();
  if (isProduction) config.plugins.push(new MiniCssExtractPlugin(MiniCssExtractPluginSettings));
  if (env.analyze === true) config.plugins.push(new BundleAnalyzerPlugin(bundleAnalizerPluginSettings));
  if (!isMonoBuild) config.plugins.push(new WebpackManifestPlugin());
  return config;
};
