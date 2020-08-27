import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// useRouter
// Hook que nos permite hacer uso del touter que tiene next

const Product = () => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const {
    query: { productId },
  } = useRouter()
  
  useEffect(() => {
    if (productId) {
      window.fetch(`/api/avo/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(console.error)
    }
  }, [productId])

  if (!product) return <p>El producto no existe</p>

  return (
    <div>
      <h2>{product?.name}</h2>
      <p><strong>Price: </strong>{product?.price}</p>
      <h3>Descripción</h3>
      <p>{product?.attributes.description}</p>
    </div>
  )
}

export default Product
