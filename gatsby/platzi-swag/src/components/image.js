import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// StaticQuery es un render props, necesita del query y lo que vamos a renderizar
// GatsbyImageSharpFluid es un fragment para obtener la informacion de la imagen
export default function Image({ name }) {
  const data = useStaticQuery(
    graphql`
      query {
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Img fluid={data[name].childImageSharp.fluid} />
  )
}
