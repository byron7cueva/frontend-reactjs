const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'assets/',
              name: "[name].[ext]",
              esModule: false
            }
          }
        ],
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
    host: '0.0.0.0',
    publicPath: "/",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};