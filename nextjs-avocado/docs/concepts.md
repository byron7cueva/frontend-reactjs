# Next.js

## Hot Realoadind

## Fast Refresh

## Páginas Básicas

Son aquellas no reciben información

## Rutas Básicas

Se las agrega debajo de a la carpeta raíz pages
index.js es el home o página inicial de la aplicación.

### Routing based on file system

Next.js va hacer routing dependiendo de lo que nosotros pongamos dentro de pages.

## Rutas Dinámicas

- Se crean poniendoles como nombre al archivo entre corchetes [].js.
  Ejemplo:
  /product/nombreParametro
  carpeta product
  [nombreParametro].js

## Code Splitting

- Agregar hash a los assets para solucionar el problema de cache que tienen los navegadores.

## Pre-rendering

- Server side rendering (SSR).
- Es prerenderizado cuando el contido principal de la página ya viene renderizado en el html en la primer respuesta.
- Es importante cuando nos importa el SEO (Search Engine Optimization), optimización para buscadores.

## Enlazando páginas

Link: Para crear links y enlazar las páginas

## Prefetching Automático

- Al pasar el mouse sobre el link, se descarga esa página.

Descargar tags
git fetch --tags

Ver tags
git tag

Crear un branch a partir de un tag
git checkout -b nombre-branch nombre-tag

## API

- Se debe crear una carpeta con el nombre de api, dentro de la carpeta pages. Para construit las rutas del api se debe hacer de forma similar que el routing de las paginas.
- En cada archivo se debe retornar una funcion la cual recibe como parametros (request, response)

## Config debuggin

- Cambiar la tarea de dev a:

```json
"dev": "NODE_OPTIONS='--inspect' next",
```

- Abrir desde chrome la url

chrome://inspect

## Extender Next JS

- La aplicacion se renderiza dentro del siguiente de arbol de componentes

* App
  - Document
    - Nuestra Aplicación

- Modificando el Documento:
  Para eso se debe agregar un archivo llamado \_document y Next.js nos ofrece
  un template con las configuraciones basicas que se pueden hacer ahi.
  Este se lo debe implementar cuando un requerimiento sea: Agregar el favicon, fuentes, estilos, scrips js externos. Agregar elementos html que quermos que esten por fuera de la aplicación react. Agregar control en el <body>, como puede ser asignar una clase
- Esta es la forma de extender el documento de html cosas que no lo podemos hacer desde dentro de la aplicacion React.
