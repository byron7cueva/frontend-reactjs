import React from 'react';

import './related.css';
import logo from '../../../assets/images/logo.png';

export function Related(): JSX.Element {
  return (
    <div className="Related">
      <img src={logo} width={250} />
    </div>
  );
}