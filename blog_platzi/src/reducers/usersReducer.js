import {
  GET_ALL,
  LOADING,
  ERROR
} from '../types/usersTypes'

// Estado inicial
const INITIAL_STATE = {
  users: [],
  loading: false,
  error:  ''
}

export default ( state = INITIAL_STATE, action) => {
  // Casos
  switch (action.type) {
    case GET_ALL:
      // Modificando estado a traves del action recibido
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case LOADING:
      return { ...state, loading: true}

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    default: return state
  }
}