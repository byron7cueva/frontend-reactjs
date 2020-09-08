const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //Entrada
  entry: './src/index.js',
  //Archivos resultantes
  output: {
    //Donde se va guardar
    path: path.resolve(__dirname, 'dist'),
    //Ponerle un nombre al archivo principal
    filename: 'bundle.js'
  },
  //Resolver las extensiones que va soportar el proyecto
  resolve: {
    extensions: ['.js', '.jsx']
  },
  //Reglas
  module: {
    rules: [
      {
        //Expresion para poder identificar archivos js y jsx
        test: /\.(js|jsx)$/,
        //Esclucion de la carpeta node_modules
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      //Template
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      //Archivo resultante
      filename: 'assets/[name].css'
    })
  ]
};
