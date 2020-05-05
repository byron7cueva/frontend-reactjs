import React, { Component } from 'react'

function WarningBanner (props) {
    // Si la prop warn es falso no se renderiza nada
    if (!props.warn) {
        return null
    }

    return (
        <div className='warning'>
            Warning!
        </div>
    )
}

class Page extends Component {
    constructor (props) {
        super(props)
        this.state = {showWarning: false}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick () {
        // Cuando se altera el estado del componente con this.state o this.props
        // Se debe hacer a traves de una funcion ya que los cambios en state y props es asincrono
        // La funcion recibe como parametros el estado anterior y las props actuales
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }

    render () {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export {
    Page
}