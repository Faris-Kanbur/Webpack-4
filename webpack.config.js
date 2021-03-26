const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: "development",
  // devtoll: "none",
  entry: {
    main: "./src/index.js",
    vendor: "./src/verdor.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  }),
  new CleanWebpackPlugin(),
],
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
      {
          test: /\.html$/,
          use: ["html-loader"]
      },
      {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
              loader: "file-loader",
              options: {
                  name: "[name].[hash].[ext]",
                  outputPath: "imgs"
              }
          }
      }

    ],
  },
};