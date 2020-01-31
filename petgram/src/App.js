import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyles } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { NotFound } from './pages/NotFound'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />

        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}

        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  )
}
