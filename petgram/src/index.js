import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import { App } from './App'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://petgram-server-byroncueva.now.sh/graphql'
})
const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
