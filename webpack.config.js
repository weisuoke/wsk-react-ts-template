const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const developmentConfig = require("./build/webpack.development");
const productionConfig = require("./build/webpack.production");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "src", "index.tsx"),
  build: "dist"
};

const baseConfig = {
  entry: PATHS.app,
  output: {
    filename: "[name].[chunkhash:5].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "ts-loader"
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "亦蓁家CRM系统",
      template: path.join(__dirname, "template/index.html")
    })
  ]
};

module.exports = mode => {
  const config = mode === "production" ? productionConfig : developmentConfig;

  return merge(baseConfig, config, { mode });
};