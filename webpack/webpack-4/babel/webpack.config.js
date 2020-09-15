const path = require('path');
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        // Que archivos quiero excluir
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'webpac-dev-server'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}