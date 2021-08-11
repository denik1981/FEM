const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const config = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
    filename: "[name].[contenthash].js",
    publicPath: "/profilecard/",
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "assets"),
    },
  },
  devServer: {
    open: true,
    host: "localhost",
    contentBase: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.pug" }),
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 2 } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", { browsers: "> 0.5%" }]],
              },
            },
          },
          { loader: "sass-loader" /* , options: { sourceMap: true } */ },
        ],
      },
      {
        test: /\.pug$/i,
        use: ["html-loader", "pug-html-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.stats = "summary";
    config.output.path = path.resolve(
      __dirname,
      `../../public/${path.basename(__dirname)}`
    );
    config.output.publicPath = "/profilecard/";
  } else {
    config.mode = "development";
    config.stats = "normal";
  }
  return config;
};
