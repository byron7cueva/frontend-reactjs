import { useEffect, useRef, useState } from 'react'

export function useNearScreen() {
  const [show, setShow] = useState(false)
  // Guardando la referencia del DOM
  const element = useRef(null)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  return [element, show]
}
