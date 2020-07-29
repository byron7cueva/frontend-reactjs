import axios from 'axios'

import { GET_ALL, LOADING, ERROR } from '../types/usersTypes'

export const getAll = () => {
  // Funcion para hacer la modificación
  return async (dispatch) => {
    dispatch({
      type: LOADING
    })

    try {
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');

      // Realizando la modificación a través del dispatch
      // Modificando al reducer
      dispatch({
        type: GET_ALL,
        // Informacion
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