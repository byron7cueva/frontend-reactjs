import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/publicationsActions'
import { Spinner } from '../General/Spinner'
import { Fatal } from '../General/Fatal'
import { Comments } from './Comments'

// Destructurando y renombrando las funciones
const { getAll: usersGetAll } = usersActions
const {
  getByUser: publicationsGetByUser,
  openClose,
  getComments
} = publicationsActions

class PublicationsComponent extends Component {

  async componentDidMount() {
    const {
      usersGetAll,
      publicationsGetByUser,
      match: { params: { key }}
    } = this.props

    if (!this.props.usersReducer.users.length) {
      await usersGetAll()
    }

    // Si no hay publicaciones de ese usuario
    if (this.props.usersReducer.users[key] &&
      !('publicatonsKey' in this.props.usersReducer.users[key])) {
      publicationsGetByUser(key)
    }
  }

  ponerUsuario = () => {
    // usersReducer no es bueno destructurar ya que vine del store el cual puede cambiar
    // pero en este caso como se esta realizando el render no importaria
    const {
      usersReducer,
      match: { params: { key }}
    } = this.props;

    if (usersReducer.error) {
      return <Fatal message={ usersReducer.error } />
    }

    if (!this.props.usersReducer.users.length || usersReducer.loading) {
      return <Spinner />
    }

    const { name } = usersReducer.users[key]
    return  (
      <h1>Publicaciones de {name}</h1>
    )
  }

  pushPublications = () => {
    const {
      usersReducer: { users },
      publicationsReducer,
      publicationsReducer: { publications },
      match: { params: { key }}
    } = this.props

    if (publicationsReducer.loading) {
      return <Spinner />
    }

    if (publicationsReducer.error) {
      return <Fatal message={publicationsReducer.error} />
    }

    if (!users.length) return
    const { publicatonsKey } = users[key]

    if (!publications[publicatonsKey]) return

    return this.showInfo(publications[publicatonsKey], publicatonsKey)
  }

  showInfo = (publications, publicatonsKey) => (
    publications.map( (publication, index) => (
      <div
        key={publication.id }
        className='pub__title'
        onClick={
          () => this.showComments(publicatonsKey, index, publication.comments)
        }
      >
        <h2>{ publication.title }</h2>
        <p>{ publication.body }</p>
          {
            (publication.open) ? <Comments comments={publication.comments}/> : null
          }
      </div>
    ))
  )

  showComments = (publicatonsKey, publicationIndex, comments) => {
    this.props.openClose(publicatonsKey, publicationIndex)

    if (!comments.length) {
      this.props.getComments(publicatonsKey, publicationIndex)
    }
  }

  render() {
    return (
      <div>
        { this.ponerUsuario() }
        { this.pushPublications() }
      </div>
    )
  }
}

// Reducers
const mapStateToProps = ({ usersReducer, publicationsReducer}) => {
  return {
    usersReducer,
    publicationsReducer
  }
}

// Actions
const mapDispatchToProps = {
  usersGetAll,
  publicationsGetByUser,
  openClose,
  getComments
}

export const Publications = connect(mapStateToProps, mapDispatchToProps)(PublicationsComponent)