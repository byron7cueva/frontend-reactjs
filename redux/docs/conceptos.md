# Redux

Es un contenedor predecible para el estado de nuestras aplicaciones.
Permite generar un solo centro de la verdad.

## Store

* Es el centro de la verdad de todo.
* Se crea pasando el reducer y tiene un método getState para devolver el estado actual  de la aplicacion
* Contiene el estad de la aplicacion
* Se puede acceder al estado con getState()
* Se puede actualizar el estado con el método dispatch
* Escucha cambios con el método subscribe(listener)
* Deja de escuchar cambios retornando la función del método subscribe(listener)
* Se crea a traves del método createStore(reducer, initialState, Enhancer)
* Reducer: Función para retornar el proximo estado
* InitialState: Estado inicial de la aplicación, primera carga, lamado al api. Puede ser de cualquier tipo de dato.
* Enhancer: Función para poder extender redux con capacidades añadidas por librerias externas. Este es opcional

## Acciones

Son un bloque de información que envía datos desde la aplicación hacia el store.
* Se envian usando el método dispatch() del store
* Son la única fuente de información del Store
* Son objetos planos de JavaScript

## Reducers

* Son funciones pures que permiten cambiar el estado de la aplicacion, esta devuelve el siguiente estado
* Puede haber más de un reducer en una aplicación pero solo debe haber un store

Lo que no se debe hacer en un reducer:
* Modificar sus argumentos.
* Realzizar tareas con efectos secundarios como llamados a APIs.
* Llamar a funciones no puras.

El proceso es en un solo sentido
State - UI - Action - Reducer -Store - State

## Principios

1. Unica fuente de la verdad. Po cada aplicación Single Page se deberia tener un store.
2. Es estado solo es de lectura
3. Los cambios se realizan con funciones puras. Los reducer solo deben ser funciones puras. 
4. Las acciones pasan por un reducer.

### Funciones Puras

* Dados los mismo parámetros deben retornar el mismo resultado, sin importar el número de veces que se llame.
* No debe tener efectos secundarios. Como alterar los parametros