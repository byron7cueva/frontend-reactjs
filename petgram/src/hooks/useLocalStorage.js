import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      // El local storage siempre guarda en string
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStorageValue(value)
    } catch (e) {
      // Si se tiene activado la navegación privada, no se tiene acceso a el localStorage
      // Por lo cual se debe capturar este tipo de errores
      console.log(e)
    }
  }

  return [storageValue, setLocalStorage]
}
