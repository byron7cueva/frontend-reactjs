import React, { Component } from 'react'

import data from './data'

const ProductCategoryRow = ({ category }) => (
  <tr>
    <th colSpan='2'>
      {category}
    </th>
  </tr>
)

const ProductRow = ({ product }) => {
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  ) 
}

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = []
  let lastCategory = null

  products.forEach(product => {
    if (product.name.indexOf(filterText) === -1) {
      return
    }

    if (inStockOnly && !product.stocked) {
      return
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    )

    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange (event) {
    this.props.onFilterTextChange(event.target.value)
  }

  handleInStockChange (event) {
    this.props.onInStockChange(event.target.checked)
  }

  render() {
    const {filterText, inStockOnly} = this.props
    return (
      <form>
        <input
          type='text'
          placeholder='Busrcar..'
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type='checkbox'
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Visualizar solo productos en stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange (filterText) {
    this.setState({filterText})
  }

  handleInStockChange (inStockOnly) {
    this.setState({inStockOnly})
  }

  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={data}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

export {
  FilterableProductTable
}