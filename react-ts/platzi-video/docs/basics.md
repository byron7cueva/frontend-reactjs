## Ciclo de Vida

### Montaje

<img src="./assets/constructor.png" alt="constructor" style="zoom: 25%;" />

<img src="./assets/componentWillMount.png" alt="componentWillMount" style="zoom:25%;" />

<img src="./assets/render.png" alt="render" style="zoom:25%;" />

<img src="./assets/componentDidMount.png" alt="componentDidMount" style="zoom:25%;" />



### Actualización

<img src="./assets/componentWillReceiveProps.png" alt="componentWillReceiveProps" style="zoom: 33%;" />

<img src="./assets/shouldComponentUpdate.png" alt="shouldComponentUpdate" style="zoom: 33%;" />

<img src="./assets/componentWillUpdate.png" alt="componentWillUpdate" style="zoom:33%;" />

<img src="./assets/rerender.png" alt="re-render" style="zoom:33%;" />

<img src="./assets/componentDidUpdate.png" alt="componentDidUpdate" style="zoom:33%;" />



### Desmontaje

<img src="./assets/componentWillUnmount.png" alt="componentWillUnmount" style="zoom:33%;" />

### Manejo de Errores

<img src="./assets/componentDidCatch.png" alt="componentDidCatch" style="zoom:33%;" />

## Componentes Puros

* Se crea heredando de PureComponent.
* Estos ya tienen el shouldComponentUpdate definido.

## División de componentes

La finalidad de dividirlos es por:

* Separación de responsabilidades
* Mejora la capacidad de reutilizar los componentes

**Smart Componet:** Statefull, Containers, Flat.

* Que hace
* Concentrado en el funcionamiento de la aplicación
* Conteninen componentes de UI u otros containers.
* No tienen estilos.
* Proveen de datos a componentes de UI u otros contenedores.
* Proveen de callbacks a la UI.
* Normalmente tienen estado.
* Llaman acciones.
* Generados por higher order components.

**Dumb Component:** Stateless, Pure, Presentational, Skinny.

* Como se ve.
* Puede contener smart components u otros componentes de UI.
* Permiten composición con {props.children}
* No dependen del resto de la aplicación.
* No especifica como los datos son cargados o mutados.
* Recibe datos y callbacks solo con propiedades.
* Rara vez tienen su propio estado.
* Están escritos como componentes funcionales a menos que necesiten mejoras de performance (PureComponent).