const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

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
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      shortname: 'Petgram',
      description:
        'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      ios: true,
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          size: [96, 128, 192, 256, 384, 512]
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: [120, 152, 167, 180, 1024],
          ios: true
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: 1024,
          ios: 'startup'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        // Cache para las imagenes
        {
          // Url que quiero cachear, una expresion regular con las urls donde se trae las imagenes
          urlPattern: new RegExp(
            'https://(res.cloudinary.com | images.unsplash.com)'
          ),
          // La estrategia
          handler: 'CacheFirst',
          options: {
            // Nombre de la cache
            cacheName: 'images'
          }
        },
        // Cache para el API
        {
          // Url que quiero cachear, Url del API
          urlPattern: new RegExp('https://petgram-server-byroncueva.now.sh'),
          // La estrategia, primero desde la red
          handler: 'NetworkFirst',
          options: {
            // Nombre de la cache
            cacheName: 'api'
          }
        }
      ]
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
