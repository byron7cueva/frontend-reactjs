import React, { Component } from 'react'
import axios from 'axios'

export class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  ponerFilas = () => (
    this.state.users.map(user => (
      <tr key={ user.id }>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  )

  async componentDidMount() {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: respuesta.data
    })
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

// stateless -> Componente funcional
// statefull -> Componente de clase