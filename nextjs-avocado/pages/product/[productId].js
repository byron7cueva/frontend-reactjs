import React from 'react'
import { useRouter } from 'next/router'

// useRouter
// Hook que nos permite hacer uso del touter que tiene next

const Product = () => {
  const { query: { productId }} = useRouter()

  return (
    <div>
      Esta es la pagina de prueba de producto { productId }
    </div>
  )
}

export default Product