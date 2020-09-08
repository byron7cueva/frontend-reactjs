import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className="register">
    <div className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button" type="button">Registrarme</button>
      </form>
      <Link to="/login">Iniciar sesión</Link>
    </div>
  </section>
);

export default Register;
