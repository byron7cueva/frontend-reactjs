const path = require('path');

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
      // Se puede agregar loaders solo a traves de una cadena de texto
      // o tambien pasandole un objeto de configuracion
      {
        // Que tipo de archivo quiero que interprete
        // debe ser una expresion regular
        test: /\.css$/,
        // Indicar que loader va utilizar
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}