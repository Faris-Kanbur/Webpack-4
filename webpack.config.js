const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin")


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
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
  }),
],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // "style-loader",   // 3. inject styles into DOM
          MiniCssExtractPlugin.loader, //3. Extract css into files
          // Translates CSS into CommonJS
          "css-loader",    //2.Turn css into commenjs
          // Compiles Sass to CSS 
          "sass-loader",   // 1. Turn sass into css
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