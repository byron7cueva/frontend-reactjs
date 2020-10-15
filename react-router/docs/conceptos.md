## Redux

* Nace de la arquitectura Flux, tomando inspiración del lenguaje funcional Elm.
* Permite tener un contenedor predecible del estado en aplicaciones.
* Nos ayuda a escribir aplicaciones que se comportan de una manera consistente.
* Podemos utilizar esta lógica en aplicaciones del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.
* Puede ser implementado en cualquier librería o proyecto que este construido con JavaScript.
* Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.

### Principios

1. *Única fuente de la verdad:* Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.
2. *El estado es de solo lectura:* La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.
3. *Los cambios se realizan con funciones puras:* Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias..

### Proceso

UI - Action - Reducer - Storage (Estado) - UI

