const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TersertJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new TersertJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        // Que archivos quiero excluir
        exclude: /node_modules/
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
           limit: 1000,
           name: '[hash].[ext]',
           outputPath: 'assets'
          }
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    }),
    new AddAssetHtmlPlugin({
      // Que archivo quiero importar, puede ser un patron
      filepath: path.relative(__dirname, 'dist/js/*.dll.js'),
      // Donde quiero liberar
      outputPath: 'js',
      publicPath: '/js'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*']
    })
  ]
}