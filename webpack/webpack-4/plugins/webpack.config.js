const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Esto hace segundo
          {
            loader: MiniCSSExtractPlugin.loader
          },
          // Esto hace Primero
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      // Donde se va exportar el archivo css
      // toma el nombre del entry point
      filename: 'css/[name].css'
    }),
    new HTMLWebpackPlugin({
      title: 'Plugins'
    })
  ]
}