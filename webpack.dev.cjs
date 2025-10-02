// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.cjs");
const path = require('path')

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // Membantu debugging dengan menunjukkan error di file asli
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true, // Membuka browser secara otomatis
    port: 50000, // Port server
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
