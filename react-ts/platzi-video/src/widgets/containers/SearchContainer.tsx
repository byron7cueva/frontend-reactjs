import React, { useState } from 'react';

import { Search } from '../components/Seacrh';

export const SearchContainer = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit', value);
  }

  // Obtener referencia de un elemento input html
  const setRefInput = (instance: HTMLInputElement | null) => {
    // console.log(instance);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.replace(' ', '-'));
  }

  return (
    <Search onSubmit={handleSubmit} setRef={setRefInput} onChange={handleInputChange} value={value} />
  );
}