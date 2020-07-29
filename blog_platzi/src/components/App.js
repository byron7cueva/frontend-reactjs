import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Menu } from './Menu'
import { Users } from './Users'
import { Tasks } from './Tasks'

const App = () => (
  <BrowserRouter>
    <Menu />
    <div>
      <Route exact path='/' component={Users} />
      <Route exact path='/tareas' component={Tasks} />
    </div>
  </BrowserRouter>
)

export default App

// stateless -> Componente funcional
// statefull -> Componente de clase