// Estado inicial
const INITIAL_STATE = {
  users: []
}

export default ( state = INITIAL_STATE, action) => {
  // Casos
  switch (action.type) {
    case 'get_users':
      // Modificando estado a traves del action recibido
      return { ...state, users: action.payload}
    default: return state
  }
}