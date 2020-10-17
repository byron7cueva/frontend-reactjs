import React from 'react'
import { Router, Route, Link } from "react-router-dom"
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'

import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Timer from './pages/Timer'
import IfOffLine from './components/IfOffline'
import './App.css'

// Bindiar al historial de react router
// Traquear que paginas visita los usuarios
const history = createBrowserHistory()

// Iniciando
ReactGA.initialize('UA-000000-01')
// Traquear la pageView inicial
ReactGA.pageview(window.location.pathname + window.location.search)

// Cuando un usuario cambia de pagina
history.listen(function(locations) {
  ReactGA.pageview(window.location.pathname + window.location.search)
})


export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <header>
            <Link to="/">Recetas <IfOffLine>Offline</IfOffLine></Link>
            <Link to="/timer" className="timerLink">⏱</Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/timer" component={Timer} />
          </main>
        </div>
      </Router>
    );
  }
}
