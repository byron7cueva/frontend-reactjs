import React from 'react';
import { Prompt } from 'react-router';

import './search.css';

interface SearchProps {
  value: string;
  setRef: (instance: HTMLInputElement | null) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Search = (props: SearchProps): JSX.Element => (
  <form className="Search" onSubmit={props.onSubmit}>
    <Prompt
      when={props.value.length > 0}
      message="¿Estás seguro de querer dejar la página?"
    />
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
