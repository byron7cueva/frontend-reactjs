import React from 'react'
import { connect } from 'react-redux'

const TableComponent = ({ users }) => {
  const ponerFilas = () => (
    users.map(user => (
      <tr key={ user.id }>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  )

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
      { ponerFilas() }
      </tbody>
    </table>
  )
}

const mapStateToProps = reducers => reducers.usersReducer

export const Table = connect(
  mapStateToProps
)(TableComponent)