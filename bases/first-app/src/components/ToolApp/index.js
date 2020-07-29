import React, { createContext, Component } from 'react'

// Creando un contexto para el thema con light como determinado
const ThemeContext = createContext('light')

class ThemeButton extends Component {

  static contextType = ThemeContext

  render () {
    return (
      <button theme={this.context}>Click Me</button>
    )
  }
}

const Toolbar = () => (
  <div>
    <ThemeButton />
  </div>
)

const AppToolbar = () => (
  <ThemeContext.Provider value='dark'>
    <Toolbar />
  </ThemeContext.Provider>
)

export {
  AppToolbar
}