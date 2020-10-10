import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './header.css';
import logo from '../../../assets/images/logo.png';

export const Header = (): JSX.Element => {
  const history = useHistory();

  const handleClickBack = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    history.goBack();
  }

  return (
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
          <li>
            <a onClick={handleClickBack} style={{cursor: 'pointer'}}>
              👈
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}