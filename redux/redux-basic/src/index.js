import './assets/css/styles.css'
import { store } from './redux/store'

const $form = document.getElementById('form')
const $container = document.getElementById('playlist')
const $input = $form.querySelector('[name="title"]')

$form.addEventListener('submit', handleSubmit)
store.subscribe(handleChange)

function handleSubmit(event) {
  event.preventDefault()

  // Obtener los datos del furmulario
  const data = new FormData($form)
  const title = data.get('title')

  // Enviando una accion al store
  store.dispatch({
    type: 'ADD_SONG',
    payload: { title }
  })

  $input.value = ''
}

function handleChange() {
  render()
}

function render() {
  // Obteniendo datos del gestor
  const playList = store.getState()
  $container.innerHTML = ''
  playList.forEach(item => {
    const template = document.createElement('p')
    template.textContent = item.title
    $container.appendChild(template)
  })
}

render()