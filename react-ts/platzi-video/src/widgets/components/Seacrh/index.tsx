import React from 'react';

import './search.css';

interface SearchProps {
  value: string;
  setRef: (instance: HTMLInputElement | null) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Search = (props: SearchProps): JSX.Element => (
  <form className="Search" onSubmit={props.onSubmit}>
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      placeholder="Busca tu video favorito"
      value={props.value}
      onChange={props.onChange}
    />
  </form>
);
