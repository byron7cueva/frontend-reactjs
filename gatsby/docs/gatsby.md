# Gatsby

* Es un framework abierto y gratuito con una comunidad increíble.
* Apuesta a un stack innovador.
* Es inclreíblemente rápido en desarrollo como en producción.
* Funciona como un generador de sitios estáticos.

<img src="E:\projects\frontend\reactjs\frontend-reactjs\gatsby\docs\assets\gatsby_funcionamiento.png" alt="image-20201017180615753" style="zoom:33%;" />

## Como funciona?

* Recolecta información previamente, funciona como un sistema de Server Site Render.
* Recolecta la información de diversas fuentes puede ser de una base de datos, CMS, React y el sistema de archivos a través de graphql y genera las vistas con react.
* Ayuda generar un sitio estático y rápido.
* Colecciona toda la información, genera las vistas y nos estrega un sitio optimizado y rápido, en un archivo estático que se lo puede alojar en cualquier dominio.

## Porque Gatsby?

* nuxtjs - Sanity  - Contentfull
* Se apoya de plugins para traer información o funcionalidad y también utiliza Gaphql y react para generar las vistas. Cada una de las rutas forman parte de un componente que después gatsby junto con weback empaquetan para generar un sitio estático.

## Ventajas

* Acceso al virtual DOM.
* Componentes
* Hot Reloading
* Code Splitting
* Imágenes responsivas.
* El Despliegue es simple dado que es un sitio estático podemos alojarlo en servicios como: Now, Netlifive, GithubPages.

## Seguridad

* La información la coloca en tiempo de construcción generando un sitio estático con todo lo que necesita.

## Herramientas

* Prettier: Es una herramienta que nos va ayudar a formatear nuestro código. Con el fin de estandarizar nuestro código. En visual studio code: CMD + Shift + P.
* EsLint: Nos ayuda a detectar errores incluso antes de ejecutar el proyecto.

## Scripts

Ejecutar en ambiente de desarrollo

```shell
gatsby develop
```

Crear un proyecto nuevo.

```shell
gatsby new nombre
```



## Starters

* Son proyectos que ya vienen configurados.

* Están echos para solo agregar el contenido.

* Son proyectos generados con ciertas dependencias que resuelven cierta problematica

* Crear un proyecto a base de un starter

  ```shell
  gatsby new nombre quienLoEscribio/nombreStarter
  ```


## Archivos de configuración

### gatsby-config.js

* Tiene configuración importante de gatsby entre ellos metadatos importantes para el sitio como: el titulo, descripción y autor del proyecto.
* También contiene una serie de configuraciones de plugins.
  * gatsby-plugin-react-helmet: Nos ayuda con el SEO.

### gatsby-browser.js

* Tiene una serie de métodos, que me ayuda a ejecutar algo cuando el proyecto esta en el cliente.
* Nos ayuda para generar vistas.
* Añadir un store en el proyecto, como context API o redux.
* También nos permite cargar una librería como puede ser google maps.
* Todo lo que se ponga acá sucede después del render de la aplicación.

### gatsby-node.js

* Su nombre viene de nodos. Piezas de construcción del sitio.
* Aquí sucede todo lo que refiere a Graphql y a las vistas o páginas del sitio.
* En este punto es donde puedo tomar piezas de Graphql y generar vistas en función de la información que tenga o incluso consumir un API y dársela a Graphql generando así mis propios plugin de fuente de datos.

### gatsby-ssr.js

* Es muy similar al gatsby-browser. A diferencia que aquí configura la lógica que sucede en tiempo de construcción cuando se esta preparando el sitio.
* También se puede agregar el store de redux o context API.

## Plugins

* Son piezas de código como paquetes que podemos agregar a nuestro proyecto que nos pueden ayudar a resolver algunas cosas.
* Permiten acelerar el proceso de desarrollo y lo hace mucho mas simple.
* Tipo de plugins
  * Como un componente: Esta configurado para resolver una problemática.
  * Agregan una funcionalidad en concreto o agregando un comportamiento. Se ayuda de un plugin de funcionalidad llamado de  transformación, el cual toma la imagen para darnos ciertas versiones de la imagen permitiendo el Lazy loading.
  * Plugins de fuentes de datos. Estos se ayudan de Graphql y node.js para consumir la información de un Endpoint (firebase, API rest, GrapServer, Wordpress o sistema de archivos) .

### gatsby-plugin-typography

* Gestiona las fuentes del proyecto independiente de la vista, sin configurar en css.

### Helmet

* Su funcionalidad es llevar la configuración a los meta tags del sitio en producción.

## Graphql

* Es un lenguaje tipado que nos ayuda a comunicar servicios.
* En gatsby recolecta toda la información y la coloca en un servidor de graphql interno. Poniendo disponible un schema con la información que recolecto.
* **GraphiQL:** Es un cliente que nos ayuda a probar los queries y mutaciones de Graphql. La gran mayoría los datos vienen desde el archivo gatsby-config.js

## Style Components

* Tener css en javascript

## Stripe

### Stripe Checkout





