# Webpack

* Es un empaquetador de módulos para aplicaciones modernas en JavaScript.

## Developer Experience

* Experiencia de Desarrollo.
* Escribir aplicaciones de manera eficiente.
* Tener un código limpio.
* Aplicar tecnología para resolver problemas.
* Tener un conjunto de reglas y convenciones.
* Entorno de desarrollo optimizado en productividad.

Instalar y decir que se guarde con la versión exacta

```shell
npm install --save-exact webpack
```

CLI (Command Line Interface)

Ejecutar binarios instalados de forma local:

```shell
npx webpack -v
```

## Webpack-cli

Generar un bundle desde cli

```shell
npx webpack --entry ./archivo.js --output ./bundle.js
```

Por defecto compila en modo de producción.

```shell
npx webpack --entry ./archivo.js --output ./bundle.js --mode development
```

npx esta disponible desde la version 5.2 de npm

## Archivo de configuración

### webpack.config.js

* Aqui se utiliza los modulos a traves de common.js, que es por defecto en node.js.

## Loaders

* Es la funcionalidad que nos da webpack para poder interpretar algún tipo de archivo, como compilarlo, inyectarlo, etc.
* css-loader: permite reconocer el import de un archivo css e interpretarlo.
* style-loader: inyecta el css en el archivo html.
* Desde la versión 4 no se requiere de un loader en especial para importar y usar archivos .json.

## Plugins

* Van extender la funcionalidad de los loaders, como utilizarlo, moverlo manipularlo a un archivo.
* mini-css-extract-plugin: extrae el codigo css y lo pone en una carpeta que le configuremos
* html-webpack-plugin: Inyecta automáticamente los bundles en el archivo html.

Pasar un flag a una tarea de npm:

En este caso se le esta pasando el flag watch al script.

```shell
npm run build:dev -- -w
```

### Hot modulo replacement

* Cambiar el código dentro del navegador pero sin recargar la página.
* Cargar solo las partes que necesitamos.

## Babel

### Presets

* Son preconfiguraciones.
* Para utilizar async/await se necesita instalar y configurar los siguientes plugins:
  * @babel/plugin-transform-runtime: Como desarrollo
  * @babel/runtime: Como producción.

### peerDpendencies

* Son dependencias que ya deben estar previamente instaladas en el proyecto.

## Code Spliting

* Es la forma de separar modulos.

## Dynamic Link Library

* Con esta utilidad podemos decirle a webpack que queremos que agrupe el código.

## Dynamic Imports

* Cargar un recurso (chunk) de forma dinámica.



