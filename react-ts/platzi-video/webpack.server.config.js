const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
  const plugins = [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
    },
    entry: {
      app: path.resolve(__dirname, 'src/pages/container/App.tsx')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ssr/[name].js',
      publicPath: "/",
      chunkFilename: 'js/[id].[chunkhash].js',
      libraryTarget: 'commonjs2',
    },
    devServer: {
      port: 9000,
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            'css-loader'
          ],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
