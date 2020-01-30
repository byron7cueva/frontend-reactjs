import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import Context from './Context'

import { App } from './App'

const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: 'https://petgram-server-byroncueva.now.sh/graphql'
})

// La siguinete funcion se va ejecutar siempre antes que se realice una peticion
const authLink = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })
  return forward(operation)
})

const client = new ApolloClient({
  cache,
  // link: authLink.concat(httpLink),
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors)
      console.log(networkError)
      // Si existe un error de token

      if (
        graphQLErrors &&
        graphQLErrors[0].extensions.code === 'INTERNAL_SERVER_ERROR'
      ) {
        // Se elimina del session storage
        // window.sessionStorage.removeItem('token')
        // Se le envia al usuario a la pagina de inicio
        // window.location.href = '/'
        console.log('ERROR')
      }
    }),
    authLink,
    httpLink
  ])
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
