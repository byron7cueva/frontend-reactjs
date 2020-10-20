import React from 'react'

import { ProductDetail } from '../components'

// pageContext es donde voy a obtener toda la información que recibio el query
const Product = ({ pageContext }) => (
  <ProductDetail {...pageContext} />
)

export default Product