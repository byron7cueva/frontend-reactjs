import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../actions/usuariosActions'

class UsersComponent extends Component {

  ponerFilas = () => (
    this.props.users.map(user => (
      <tr key={ user.id }>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  )

  componentDidMount() {
    // Llamando al action creator
    this.props.getAll()
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
        { this.ponerFilas() }
        </tbody>
      </table>
    )
  }
}

// Para mapear el estado a las props
const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

// Conectando el reducer al componente
// Se debe indicar que reducer se va utilizar
// La lista de las acciones que se le va aplicar
// El componente al cual se lo va aplicar
// connect(reducer a utilizar, actions)(componente)
export const Users = connect(mapStateToProps, {
  getAll
})(UsersComponent)

// stateless -> Componente funcional
// statefull -> Componente de clase