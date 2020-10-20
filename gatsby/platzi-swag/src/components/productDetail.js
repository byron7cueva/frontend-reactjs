import React, { useState, useContext } from 'react'

import priceFormat from '../utils/priceFormat'
import {
  Tag,
  SizeButton,
  SizeSelect,
  StyledProductDetail,
  QtySelect,
  Button
} from '../styles/components'
import { SEO, Stars } from './'
import { CartContext } from '../context'

export default function ProductDetail ({id, unit_amount, product: { name, metadata} }) {
  const { addToCart } = useContext(CartContext)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const price = priceFormat(unit_amount)

  const handleSelectQty = () => qty > 1 ? setQty(qty - 1) : null
  const handleAddQty = () => setQty(qty + 1)
  const handleSubmit = () => {
    addToCart({price: unit_amount, id, name, metadata, quantity: qty})
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {price}</b>
        <Stars />
        { metadata.wear && <h3>Color: Azul</h3> }
        <small>{metadata.description}</small>
        {
          metadata.wear && (
            <SizeSelect selected={size}>
              <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
              <SizeButton onClick={() => setSize(2)}>S</SizeButton>
              <SizeButton onClick={() => setSize(3)}>M</SizeButton>
              <SizeButton onClick={() => setSize(4)}>L</SizeButton>
            </SizeSelect>
          )
        }
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={handleSelectQty}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={handleAddQty}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}