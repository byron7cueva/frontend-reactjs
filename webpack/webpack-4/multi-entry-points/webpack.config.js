const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    prices: path.resolve(__dirname, 'src/js/prices.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    // Utilizando templates
    // Como nombre toma el key de los entries
    filename: 'js/[name].js'
  }
}