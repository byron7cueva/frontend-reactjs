/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

// Resuelve un query y realiza ciertas acciones
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_PRICE{
      allStripePrice {
        edges {
          node {
            id
            unit_amount
            product {
              name
              metadata {
                description
                img
                wear
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // node es cada uno de los productos que vienen del query. Catálogo del e-comerce
  result.data.allStripePrice.edges.forEach(({node}) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node
    })
  })
}