import React from "react"
// Para conectarse al servidor de graphql de gatsby
import { graphql } from "gatsby"

import { SEO, Jumbo, Products } from "../components"

// Query para obtener la informacion del sitio
// Se debe exportar el query
// Gatsby va tomar el query, trae el resultado y lo va poner en el compenete como una prop "data"
// Tag template literal
export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          unit_amount_decimal
          type
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
`

// Genera una copia de un componente primitivo de HTML
// Los estilos solo se mantienen para este componente y llegan al html con un id en especifico
/*const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  // Accediendo a los props enviados al componente
  color: ${props => props.color};
  &:hover {
    transform: scale(1.4);
  }
`*/

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
      <Products products={data.allStripePrice.edges} />
    </>
  )
}

export default IndexPage
