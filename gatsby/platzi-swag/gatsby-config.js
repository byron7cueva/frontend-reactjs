require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Platziwag`,
    description: `El mejor swag de platzi disponible para ti.`,
    author: `@byron7cueva`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // Servir imagenes a través de graphql
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // Nombre de la configuración
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, // Convierte en diferentes tipos de imagenes. svg (la imagen borrosa que se muestra al cargar). Y tambien diferentes tamaños
    `gatsby-plugin-sharp`, // Tomar las imagenes que estan en el proyecto
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        // Obtener el stock de la tienda
        objects: ['Product', 'Price'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
