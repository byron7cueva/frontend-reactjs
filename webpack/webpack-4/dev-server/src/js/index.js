import '../css/index.css';
import text from './text';

text();

// Verificando si el modo hot esta activado
if (module.hot) {
  // Indicando que cambios va aceptar
  module.hot.accept('./text.js', function() {
    // Indicando que debe hacer cuando recargue los cambios
    console.log('He recargado en caliente');
    text()
  })
}