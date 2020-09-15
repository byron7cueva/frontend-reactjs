const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
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
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Esto hace segundo
          /*{
            loader: MiniCSSExtractPlugin.loader
          },*/
          // Para el hot module replacement es mejor ya que es mas rapido
          // Esto seria solo para desarrollo
          'style-loader',
          // Esto hace Primero
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    /*new MiniCSSExtractPlugin({
      // Donde se va exportar el archivo css
      // toma el nombre del entry point
      filename: 'css/[name].css'
    }),*/
    new HTMLWebpackPlugin({
      title: 'webpac-dev-server'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}