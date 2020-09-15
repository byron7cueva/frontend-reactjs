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
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            // lo convierte en formato base 64 en inline en el codigo
            // la cantidad de bytes de los datos que vas a cargar
            // Se debe dar soporte solo para imagenes pequeñas
           limit: 90000 
          }
        }
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'webpac-dev-server',
      // Se necesita indicar de donde queremos que tome como template el html
      // para que no lo crea automaticamente
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}