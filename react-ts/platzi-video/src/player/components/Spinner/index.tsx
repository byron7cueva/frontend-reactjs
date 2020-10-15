import React from 'react';

import './spinner.css';

interface SpinnerProps {
  active: boolean;
}

export const Spinner = (props: SpinnerProps): JSX.Element | null => {
  if (!props.active) return null;

  return (
    <div className="Spinner">
      <span>Cargando...</span>
    </div>
  );
}