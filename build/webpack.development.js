const devServer = require('webpack-dev-server')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    overlay: {
      errors: true,
      warnings: true
    },
    historyApiFallback: true
  }
}