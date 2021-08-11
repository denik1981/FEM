const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isMonoBuild = process.env.MONO_BUILD ? process.env.MONO_BUILD === "mono" : false;
const isProduction = process.env.NODE_ENV === "production";
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";
const cssLoader = { loader: "css-loader", options: { sourceMap: true } };
const publicPath =
  isProduction && !process.env.WEBPACK_DEV_SERVER ? path.sep + path.basename(__dirname) + path.sep : "";

const config = {
  mode: isProduction ? "production" : "development",
  stats: isMonoBuild ? "summary" : "detailed",
  devtool: "source-map",
  devServer: { host: "localhost" },
  optimization: {
    runtimeChunk: "single",
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
  },

  entry: {
    main: path.resolve(__dirname, "src/index.js"),
    svg4everybody: path.resolve(__dirname, "src/utils/svg4everybody.js"),
  },
  output: {
    clean: isProduction && !process.env.WEBPACK_DEV_SERVER,
    path: isProduction ? path.resolve("..", "..", "public", path.basename(__dirname)) : path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
    filename: "[name].[contenthash].js",
    publicPath: publicPath,
  },

  resolve: { alias: { assets: path.resolve(__dirname, "assets") } },

  module: {
    rules: [
      { test: /\.css$/i, use: [stylesHandler, cssLoader, "postcss-loader"] },
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
