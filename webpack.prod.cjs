// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.cjs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Ekstrak CSS ke file terpisah
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Gunakan contenthash untuk caching
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Memisahkan kode vendor (node_modules)
    },
  },
});
