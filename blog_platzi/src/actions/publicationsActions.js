import axios from 'axios'
import {
  GET_ALL,
  LOADING,
  ERROR,
  UPDATE,
  COM_LOADING,
  COM_ERROR,
  COM_UPDATE
} from '../types/publicationsType'

import { GET_ALL as USERS_GET_ALL } from '../types/usersTypes'

export const getAll = () => {
  return  async ( dispatch ) => {
    dispatch({
      type: LOADING
    })

    try {
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch({
        type: GET_ALL,
        payload: respuesta.data
      })
    } catch(error) {
      dispatch({
        type: ERROR,
        payload: 'Algo salio mal, intente más tarde.'
      })
    }
  }
}

export const getByUser = (key) => {
  return async ( dispatch, getState ) => {
    dispatch({
      type: LOADING
    })

    const { users } = getState().usersReducer
    const { publications } = getState().publicationsReducer
    const user_id = users[key].id

    try {
      const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

      const nuevas = respuesta.data.map( publication => ({
        ...publication,
        comments: [],
        open: false
      }))

      const updatedPublications = [
        ...publications,
        nuevas
      ]

      dispatch({
        type: UPDATE,
        payload: updatedPublications
      })

      const publicatonsKey = updatedPublications.length - 1
      const updatedUsers = [...users]
      updatedUsers[key] = {
        ...users[key],
        publicatonsKey
      }

      dispatch({
        type: USERS_GET_ALL,
        payload: updatedUsers
      })

    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'Publicaciones no disponibles.'
      })
    }
  }
}

export const openClose = (publicationsKey, publicationIndex) => {
  return (dispatch, getState) => {
    const {
      publications
    } = getState().publicationsReducer
    const selected = publications[publicationsKey][publicationIndex]
    const updated = {
      ...selected,
      open: !selected.open
    }
    const updatedPulications = [...publications]
    updatedPulications[publicationsKey] = [
      ...publications[publicationsKey]
    ]
    updatedPulications[publicationsKey][publicationIndex] = updated

    dispatch({
      type: UPDATE,
      payload: updatedPulications
    })
  }
}

export const getComments = (publicationsKey, publicationIndex) => {
  return async (dispatch, getState) => {
    dispatch({
      type: COM_LOADING
    })
    const {
      publications
    } = getState().publicationsReducer
    const selected = publications[publicationsKey][publicationIndex]

    try {
      const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`)

      const updated = {
        ...selected,
        comments: respuesta.data
      }

      const updatedPulications = [...publications]
      updatedPulications[publicationsKey] = [
        ...publications[publicationsKey]
      ]
      updatedPulications[publicationsKey][publicationIndex] = updated
      dispatch({
        type: COM_UPDATE,
        payload: updatedPulications
      })
    } catch (error) {
      dispatch({
        type: COM_ERROR,
        payload: 'Comentarios no disponibles.'
      })
    }
  }
}