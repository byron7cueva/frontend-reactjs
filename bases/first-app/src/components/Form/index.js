import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        inputValue: '',
        inputCheckValue: false,
        inputNumberValue: 5,
        textAreaValue: '',
        selectValue: 'coco',
        selectMultipleValue: ['azul', 'verde']
    }

    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * Componente controlado, esta es es una funcion controladora
   * Esto hace que siempre el valor del input este dirigido al stado manejado por el componente
   * Siendo este la unica fuente de la verdad
   * @param {Event} event 
   */
  handleChangeInput(event) {
    const {name, value} = event.target
    let newValue

    switch (name) {
        case 'selectMultipleValue':
            const options = event.target.options
            newValue = []

            for (let item of options) {
                if (item.selected) {
                newValue.push(item.value)
                }
            }
        break
        case 'inputCheckValue':
            newValue = event.target.checked
        break
        case 'inputNumberValue':
            newValue = parseInt(value)
        break
        default:
            newValue = value
        break
    }

    this.setState({
        [name]: newValue
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Nombre: 
            <input
              type='text'
              name='inputValue'
              value={this.state.inputValue}
              onChange={this.handleChangeInput}
            />
          </label>
        </p>
        <p>
          <label>
            Es administrador: 
            <input
              type='checkbox'
              name='inputCheckValue'
              value={this.state.inputCheckValue}
              onChange={this.handleChangeInput}
            />
          </label>
        </p>
        <p>
          <label>
            Edad: 
            <input
              type='number'
              name='inputNumberValue'
              value={this.state.inputNumberValue}
              onChange={this.handleChangeInput}
            />
          </label>
        </p>
        <p>
          <label>
            Mensaje: 
            <textarea
              name='textAreaValue'
              value={this.state.textAreaValue}
              onChange={this.handleChangeInput}
            />
          </label>
        </p>
        <p>
          <label>
            Fruta favorita: 
            <select name='selectValue' value={this.state.selectValue} onChange={this.handleChangeInput}>
              <option value='uvas'>Uvas</option>
              <option value='lima'>Lima</option>
              <option value='coco'>Coco</option>
              <option value='mango'>Mango</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Color favorito: 
            <select
              name='selectMultipleValue'
              value={this.state.selectMultipleValue}
              onChange={this.handleChangeInput}
              multiple={true}
            >
              <option value='azul'>Azul</option>
              <option value='verde'>Verde</option>
              <option value='rojo'>Rojo</option>
              <option value='blanco'>Blanco</option>
            </select>
          </label>
        </p>
        <input type='submit' value='Submit' />
    </form>
    )
  }
}

export {
    Form
}