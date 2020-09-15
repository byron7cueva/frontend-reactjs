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