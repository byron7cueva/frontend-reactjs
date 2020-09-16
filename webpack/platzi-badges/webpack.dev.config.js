const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:3000/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devServer: {
    open: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
         'style-loader',
         'css-loader'
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/'
          }
        }
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}