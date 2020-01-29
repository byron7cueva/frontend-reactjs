import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    // Actualiza el estado indocando que el usuario esta logeado
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
