import React from 'react';

import './Home/generic-page.css';

export const NotFound = (): JSX.Element => (
  <div className="Page">
    <h1>404</h1>
    <h3 className="SadFace">:(</h3>
    <h2>No hemos encontrado la página que buscabas</h2>
  </div>
);