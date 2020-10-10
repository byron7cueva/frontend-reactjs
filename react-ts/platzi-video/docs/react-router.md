# React Router

## Code Spliting

## Tipos de Enrutadores

### Browser Router

Utiliza por defecto el HTML5 History API .

Tiene las siguientes propiedades:

* basename: Para indicar desde donde quiero que arranque la ruta
* getUserConfirmation: Recibe una funcion la cual nos permite validar cuando se esta dejando alguna página y mandarle un mensaje de advertencia.
* forceRefresh: Es un boleano, permite forzar hacer una recarga de la página. 
* keyLength: Son los Ids unicos que recibe cada vez que se navega entre páginas. Por defecto es de 6 caracteres. Aca se puede ampliar la longitud.
* children: Aca se puede incluir las rutas.

### Hash Router

* Funciona de manera similar al Browser router. Pero se antepone un hash al inicio de cada ruta.
* Esto se utilizaba cuando las SPA heran nuevas y esta hera la manera de enrutar solo en el frontend.

### Memory Router

* Mantiene el historial de búsqueda en memoria, perfecto para pruebas sin navegadores.

### Static Router

* Nunca cambia la dirección, perfecto para usar en Server Side Render.
* Nos sirve para renderizar alguna ruta en específico de nuestra aplicación, sin esperar que puede cambiar la vista.

### Native Router

* Para usar en React Native, pero **se recomienda React Navigation**.

## Enlaces

### <Link>

* Reemplazan a las tag <a>
* Nos ayudan a navegar dentro de la aplicacion.
* Propiedades:
  * to: Es el href de Link, donde se indica la ruta.
  * replace: Similar a to pero con una diferencia. Reemplaza el estado de la ruta actual con la ruta que le indicamos.
  * innerRef: Permite obtener el element html del link. Dentro de este componente se encuentra una etiqueta <a>.

### <NavLink>

* Es similar que Link pero agrega más características.
* Propiedades:
  * activeClassName: Permiten agregarle una clase cuando la ruta es la actual.
  * activeStyle: Asignar los estilos en linea para la ruta actual.
  * isActive: Es una funcion que se va ha mandar cuando estemos en el foco de esa vista.
  * exact
  * strict
  * location: Hacer la comparación de la ruta

## Fragment

* Me sirve para envolver hijos y devolver un solo Element, pero no va renderizar ningun elemento en el navegador.

## <Route>

* Permite definir Rutas.
* Recibe las siguientes propiedades:
  * component: Recibe el componente que queremos renderizar.
  * path: Indicarle la ruta.
  * render: Alternativa a component para hacer un renderizado en modo de funcion.
  * children: 
  * exact: Es booleano, Valida si el match con la ruta sea exacto o no.
  * strict: Es booleano. Este indica si termina con (/) o no tal cual como se puso en el path.
  * sensitive: Es boolean. Para indicarle que sea key sensitive.