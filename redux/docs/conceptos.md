# Redux

Es un contenedor predecible para el estado de nuestras aplicaciones.
Permite generar un solo centro de la verdad.

## Store

* Es el centro de la verdad de todo.
* Se crea pasando el reducer y tiene un método getState para devolver el estado actual  de la aplicacion

## Acciones

Son un bloque de información que envía datos desde la aplicación hacia el store.

## Reducers

Cambia el estado de la aplicacion
El proceso es en un solo sentido
State - UI - Action - Reducer -Store - State

## Principios

1. Unica fuente de la verdad. Po cada aplicación Single Page se deberia tener un store.
2. Es estado solo es de lectura
3. Los cambios se realizan con funciones puras. Los reducer solo deben ser funciones puras. 