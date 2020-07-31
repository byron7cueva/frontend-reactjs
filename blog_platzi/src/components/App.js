import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Menu } from './Menu'
import { Users } from './Users'
import { Tasks } from './Tasks'
import { Publications } from './Publications'
import { Save as SaveTasks } from './Tasks/Save'

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margen'>
      <Route exact path='/' component={Users} />
      <Route exact path='/tareas' component={Tasks} />
      <Route exact path='/publicaciones/:key' component={Publications} />
      <Route exact path='/tareas/guardar' component={SaveTasks} />
      <Route exact path='/tareas/guardar/:userId/:taskId' component={SaveTasks} />
    </div>
  </BrowserRouter>
)

export default App

// stateless -> Componente funcional
// statefull -> Componente de clase