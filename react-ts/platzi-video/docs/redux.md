# Redux

## Múltiples reducers

* Cuando existe solo un reducer este se encarga de gestionar todos los keys del estado inicial del estore.
* Cada key del estado inicial del store podría ser un reducer.

## Creadores de acciones

* Son funciones que engloban acciones y returnan el objeto de la accion.

## Bind Action creators

* Es una forma de enlazar las acciones como propiedades al componente.
* Recibe un grupo de acciones y las va combinar con el dispatch para no tener que llamar a props.dispatch si no directamente el nombre de la accion.

