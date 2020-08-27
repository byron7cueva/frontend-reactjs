import { createStore } from 'redux'
import { reducer } from './reducer'

const store = createStore(reducer, [
  { title: 'Despacito' },
  { title: 'One more time' },
],
// Configurando para que se integre con el devtools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {
  store
}