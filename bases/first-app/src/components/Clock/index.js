import React, {Component} from 'react'


/**
 * Componente de tipo clase
 */
class Clock extends Component {

    /**
     * Orden ejecucion 1
     * Se debe pasar al contructor base las props
     * Aqui se debe definir el estado local inicial
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        // this.state solo se puede utilizar en el constructor
        this.state = {date: new Date()}

        // Bindiando el contexto de la clase al manejador del evento
        this.handleClickDespedida = this.handleClickDespedida.bind(this)
    }

    /**
     * Orden de ejecucion 3
     * Montaje
     * Se ejecuta una sola vez despues que salida del componente ha sido renderizada en el DOM
     */
    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }


    /**
     * Desmontaje
     * Se ejecuta cuando react elimina el componente
     */
    componentWillUnmount () {
        clearInterval(this.timerID)
    }

    /**
     * Actualiza el temporiador
     */
    tick () {
        // Actlizando el estado local del componente
        // Se planifica una actualizacion de la interfaz de usuario
        // Al llamar a setState, react se entera que hubo un cambio de estado e invoca nuevamente a rende()
        this.setState({date: new Date()})
    }

    /**
     * Bindiando el contexto de la clase al manejador del evento con campos publicos de clase
     * Esta sintaxis es experimental
     */
    handleClickSaludo = () => {
        console.log('Hola mundo')
    }

    handleClickDespedida () {
        console.log('Que tenga un buen dia')
    }

    /**
     * Handle con argumento pasado
     * @param {*} id 
     */
    handleClickPassArgs (id) {
        console.log('El id pasado es: ', id)
    }

    /**
     * Orden de ejecucion 2
     * Metodo para renderizar el componente
     */
    render () {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <p>
                    <button onClick={this.handleClickSaludo}>Saludar</button>
                </p>
                <p>
                    <button onClick={this.handleClickDespedida}>Despedida</button>
                </p>
                <p>
                    <button onClick={this.handleClickPassArgs.bind(this, 20)}>Pass Argument</button>
                </p>
            </div>
        )
    }
}

export {
    Clock
}