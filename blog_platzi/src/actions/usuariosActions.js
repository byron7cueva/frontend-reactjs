import axios from 'axios'

export const getAll = () => {
  // Funcion para hacer la modificación
  return async (dispatch) => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');

    // Realizando la modificación a través del dispatch
    // Modificando al reducer
    dispatch({
      type: 'get_users',
      // Informacion
      payload: respuesta.data
    })
  }
}