import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}
