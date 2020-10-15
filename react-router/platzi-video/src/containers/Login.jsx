import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { loginRequest } from '../actions';
import Header from '../components/Header';

const Login = props => {
  const [form, setValues] = useState({
    email: ''
  });
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    // Moverse a otra ruta
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sessión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
            <button className="button" type="submit">Iniciar sesión</button>
            <div>
              <label htmlFor="cbx1">
                <input type="checkbox" id="cbx1" value="first_checkbox" />
                Recuérdame
              </label>
              {' '}
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} alt="Sesion Google" />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt="Sesion Twitter" />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta
            {' '}
            <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest
};

export default connect(null, mapDispatchToProps)(Login);
