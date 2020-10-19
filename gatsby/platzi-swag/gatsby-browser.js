/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

const Layout = require("./src/components/layout").default
const { GlobalStyles } = require("./src/styles")

// #Todo lo que va encerrar este elemento a las páginas del sitio
// Existen algunos tipos de exports documentados en el API de gatsby
exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </>
)
