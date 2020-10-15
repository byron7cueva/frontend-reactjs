import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/styles/components/Register.scss';

import { registerRequest } from '../actions';
import Header from '../components/Header';

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <div className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
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
            <button className="button" type="submit">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(null, mapDispatchToProps)(Register);
