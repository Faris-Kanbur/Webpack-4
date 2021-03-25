const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  // devtoll: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS 
          "sass-loader",
        ],
      },
    ],
  },
};