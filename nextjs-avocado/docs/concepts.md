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

* Document: Contiene toda la estructura HTML
  - App: Engloba la aplicación
    - Nuestra Aplicación / pages

### Extendiendo Document:

- Para eso se debe agregar un archivo llamado \_document y Next.js nos ofrece
  un template con las configuraciones basicas que se pueden hacer ahi.
- Este se lo debe implementar cuando un requerimiento sea: Agregar el favicon, fuentes, estilos, scrips js externos. Agregar elementos html que quermos que esten por fuera de la aplicación react. Agregar control en el <body>, como puede ser asignar una clase
- Esta es la forma de extender el documento de html cosas que no lo podemos hacer desde dentro de la aplicacion React.

### Extend App

- Next.js nos ofrece un custom App, que es un template para poder iniciar a modificar el App.
- Esta configuración debe ir en un archivo \_app, dentro de la carpeta pages.

## Import Hell

Es cuando a medida que va creciendo la aplicación los imports a algun módulo se ven asi
import Modulo from '../../../../component/Modulo'
Esto se puede resolver a traves de los Path Aliases, eso se puede configurar tanto para JavaScript y TypeScript
Actualizar a VSC con Ctrl + Shift + P y seleccionar Restart TS Server

## Integrar CSS

Next.js nos ofrece 3 formas de poder integrar CSS (Built-in CSS Nex.js).

1. Global CSS (.css)

- Se lo debe de importar desde el \_app
- Entonces ya podriamos proceder a aplicar las clases del CSS en donde necesitemos

2. Module CSS (.module.css)

- Se aplica para cada componente específico.
- Se lo debe poner al lado del componente que lo utiliza
- Al aplicarlo se lo puede hacer importando el modulo y a través de ese objeto con . acceder a las clases, el cual sera parado a la propiedad className del componente a aplicar.
- Si inspeccionamos el nombre de la clase que nosotros creamos no corresponde al nombre que aparece aplicado al elemento. Next.js genera un nuevo nombre con un hash para evitar la colicion de nombres de clases.

3. CSS-in-JS Styles JSX (Next.js - Vercel)
