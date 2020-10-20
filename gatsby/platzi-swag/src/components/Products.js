import React from 'react'
import { Link } from 'gatsby'

import formatPrice from '../utils/priceFormat'
import { StyledProducts } from '../styles/components'

const Products = ({ products }) => (
  <StyledProducts>
    <h2>Productos</h2>
    <section>
      { products.map(({node}) => {
        const price = formatPrice(node.unit_amount)
        return (
          <article key={node.id}>
            <img src={node.product.metadata.img} alt={node.product.name} />
            <p>{node.product.name}</p>
            <small>USD {price}</small>
            <Link to={`/${node.id}`}>
              Comprar ahora <span role="img" aria-label="emoji">👉</span>
            </Link>
          </article>
        )
      })}
    </section>
  </StyledProducts>
)

export default Products