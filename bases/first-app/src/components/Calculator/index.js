/* Levantando el estado al ancestro mas comun convirtiendole en la fuente de la verdad*/

import React, {Component} from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit'
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>EL agua puede hervir</p>
  }
  return <p>EL agua no puede hervir</p>
}

class TemperatureInput extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.onChangeTemperature(event.target.value)
  }

  render () {
    return (
      <fieldset>
        <legend>Ingrese la temperatura en {scaleNames[this.props.scale]}</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: 0,
      scale: 'c'
    }
  }

  onChangeCelsiusTemperature = temperature => {
    this.setState({
      scale: 'c',
      temperature: temperature
    })
  }

  onChangeFarenheitTemperature = temperature => {
    this.setState({
      scale: 'f',
      temperature: temperature
    })
  }

  render () {
    const {scale, temperature} = this.state
    const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
    const farenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)

    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onChangeTemperature={this.onChangeCelsiusTemperature} />
        <TemperatureInput scale='f' temperature={farenheit} onChangeTemperature={this.onChangeFarenheitTemperature} />
        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}

export {
  Calculator
}