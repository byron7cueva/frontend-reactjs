import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

export const Header = (): JSX.Element => (
  <header className="Header">
    <img src={logo} width={250}/>
    <nav>
      <ul>
        <li>
          {/* Con excat diferencia bien la ruta */}
          <NavLink exact to="/" activeClassName="is-selected">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/videos" activeClassName="is-selected">
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink to="/v" activeClassName="is-selected">
            Redirect
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" activeClassName="is-selected">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/perfil" activeClassName="is-selected">
            Perfil
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);