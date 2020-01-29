const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Archivo de salida
  output: {
    filename: 'app.bundle.js',
    // Para que cargue el archivo bundle siempre desde la raiz, de esa forma desde una ruta no intentara buscar el archivo
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Indicando el archivo de index.html customizado
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
