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

*  Se crean poniendoles como nombre al archivo entre  corchetes [].js. 
Ejemplo:
/product/nombreParametro
carpeta product
  [nombreParametro].js

## Code Splitting

* Agregar hash a los assets para solucionar el problema de cache que tienen los navegadores.

##  Pre-rendering

* Server side rendering (SSR).
* Es prerenderizado cuando el contido principal de la página ya viene renderizado en el html en la primer respuesta.
* Es importante cuando nos importa el SEO (Search Engine Optimization), optimización para buscadores.