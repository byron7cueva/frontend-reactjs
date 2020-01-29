import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyles } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  // Recuperando parametros
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:categoryId" />
        </Router>
      )}
    </div>
  )
}
