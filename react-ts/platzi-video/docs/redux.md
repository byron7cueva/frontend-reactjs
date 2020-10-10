# Redux

## Múltiples reducers

* Cuando existe solo un reducer este se encarga de gestionar todos los keys del estado inicial del estore.
* Cada key del estado inicial del store podría ser un reducer.

## Creadores de acciones

* Son funciones que engloban acciones y returnan el objeto de la accion.

## Bind Action creators

* Es una forma de enlazar las acciones como propiedades al componente.
* Recibe un grupo de acciones y las va combinar con el dispatch para no tener que llamar a props.dispatch si no directamente el nombre de la accion.

## Middlewares (Henhanced)

* Es una forma de poder interceptar todo lo que esta ocurriendo con redux, para hacer algo extra.
* Son funciones que recibe un dispatch y el getState del store como argumentos y regresa una función. Esta función va recibir el método para despachar el siguiente middleware, y se espera que devuelva una función que recibe el action y llame next(action)

