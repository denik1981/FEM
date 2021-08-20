const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const config = {
  mode: isProduction ? "production" : "development",
  stats: isProduction ? "summary" : "detailed",
  devtool: "inline-source-map",
  entry: { main: path.resolve(__dirname, "src/index.js") },
  resolve: { alias: { assets: path.resolve(__dirname, "assets") } },
  devServer: { host: "localhost" },
  optimization: { runtimeChunk: "single" },
  output: {
    clean: isProduction,
    path: isProduction ? path.resolve("..", "..", "public", path.basename(__dirname)) : path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
    filename: "[name].[contenthash].js",
    // publicPath: ''
    publicPath: isProduction ? path.sep + path.basename(__dirname) + path.sep : "",
  },
  module: {
    rules: [
      { test: /\.css$/i, use: [stylesHandler, "css-loader", "postcss-loader"] },
      { test: /\.(|svg|png|jpg|gif)$/i, type: "asset/resource" },
    ],
  },
  plugins: [],
};

module.exports = (env) => {
  config.plugins.push(
    new HtmlWebpackPlugin({ minify: false, favicon: "assets/misc/favicon.png", template: "index.html" })
  );
  if (isProduction) config.plugins.push(new MiniCssExtractPlugin({ filename: "[contenthash].css" }));
  return config;
};
