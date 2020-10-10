import React from 'react';
import { useHistory } from 'react-router-dom';

import './Home/generic-page.css';

export const NotFound = (): JSX.Element => {
  const history = useHistory();

  const handleForwareClick = () => {
    history.goForward();
  }

  const handleBackClick = () => {
    history.goBack();
    // Regresa el numero de saltos indicados en el tiempo de navegacion
    //history.go(-1); // Es lo mismo que goBack
  }

  const handleRandomClick = () => {
    const id = Math.round(Math.random() * (15 - 1) + 1);
    history.push(`/videos?id=${id}`, {id});
  }

  return (
    <div className="Page">
      <h1>404</h1>
      <h3 className="SadFace">:(</h3>
      <h2>No hemos encontrado la página que buscabas</h2>
      <button className="Button" onClick={handleForwareClick}>
        Ir a la siguiente página 👉
      </button>
      <button className="Button" onClick={handleBackClick}>
        Ir a la ruta anterior 👈
      </button>
      <button className="Button" onClick={handleRandomClick}>
        Video random 🎞
      </button>
    </div>
  );
}