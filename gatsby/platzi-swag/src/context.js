import React, { createContext, useState } from 'react'

// Context resulve la problematica de pasar las propiedades y métodos de los componentes hacia abajo
// ejecutando donde sea donde lo necesitamos, en la altura que necesitemos y tener que devolver a un componente hasta arriba de la
// gerarquia de la aplicacion, para que se ejecute y cambie los valores.
// Pone la información disponible en toda la aplicacion en donde se necesite, podemos tomar la información
// utilizando useContext utilizando el contexto que generamos
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCart = element => {
    setCart([...cart, element])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}