import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../actions/usersActions'
import { Spinner } from '../General/Spinner';
import { Fatal } from '../General/Fatal'
import { Table } from './Table'

class UsersComponent extends Component {

  ponerContenido = () => {
    if (this.props.loading) {
      return <Spinner />
    }

    if (this.props.error) {
      return <Fatal message={ this.props.error }/>
    }

    return (
      <Table />
    )
  }

  componentDidMount() {
    if (!this.props.users.length) {
      // Llamando al action creator
      this.props.getAll()
    }
  }

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        { this.ponerContenido() }
      </div>
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