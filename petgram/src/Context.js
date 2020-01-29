import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    console.log('SOLICITA DATOS')
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    // Actualiza el estado indocando que el usuario esta logeado
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
