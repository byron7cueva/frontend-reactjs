const path = require('path');
const webpack = require('webpack');
const TersertJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js',
    library: '[name]'
  },
  optimization: {
    minimizer: [
      new TersertJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ]
}