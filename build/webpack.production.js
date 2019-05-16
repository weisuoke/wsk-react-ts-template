const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 分离CSS
    new MiniCssExtractPlugin({
      filename: "./assets/style/[name].[contenthash:5].css"
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin({ sourceMap: false })],
    // minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: "manifest"
    }
  }
}