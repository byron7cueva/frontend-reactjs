import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

// StaticQueryes un render props, necesita del query y lo que vamos a renderizar
// GatsbyImageSharpFluid es un fragment para obtener la informacion de la imagen
export default function Image({ name }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          icon: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => <Img fluid={data[name].childImageSharp.fluid} />}
    />
  )
}
