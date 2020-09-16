const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    // Dependencias comunes en toda la aplicacion
    // Se va llamar modules
    modules: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // Como se va enlzar de manera global el modulo con la aplicacion
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ]
}