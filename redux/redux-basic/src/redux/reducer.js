// Esta funcion debe devolver el estado
// Esta recibe el estado y la accion
const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_SONG': return [...state, action.payload]
    default: return state
  }
}

export {
  reducer
}