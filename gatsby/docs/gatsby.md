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

  