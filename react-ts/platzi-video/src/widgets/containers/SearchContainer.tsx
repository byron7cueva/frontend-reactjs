import React, { useState } from 'react';
import { connect, DispatchProp } from 'react-redux';

import { Search } from '../components/Seacrh';
import { searchVideo } from '../../store/actions';

const SearchComponent = (props: DispatchProp): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.dispatch(searchVideo(value));
  }

  // Obtener referencia de un elemento input html
  const setRefInput = (instance: HTMLInputElement | null) => {
    // console.log(instance);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.replace(' ', '-'));
  }

  return (
    <Search
      onSubmit={handleSubmit}
      setRef={setRefInput}
      onChange={handleInputChange}
      value={value}
    />
  );
}

const SearchContainer = connect()(SearchComponent);

export {
  SearchContainer
}