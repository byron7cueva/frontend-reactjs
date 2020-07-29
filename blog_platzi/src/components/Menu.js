import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => (
  <nav className='menu'>
    <Link to='/'>Usuarios</Link>
    <Link to='/tareas'>Tareas</Link>
  </nav>
)
