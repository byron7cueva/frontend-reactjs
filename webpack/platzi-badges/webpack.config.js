const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js'
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
        test: /\.css$/i,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {importLoaders: 1},
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
           limit: 90000 
          }
        }
      },
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new HTMLWebpackPlugin({
      title: 'webpac-dev-server',
      // Se necesita indicar de donde queremos que tome como template el html
      // para que no lo crea automaticamente
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
}