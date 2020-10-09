import React, { useState } from 'react';
import { connect, DispatchProp } from 'react-redux';

import { Search } from '../components/Seacrh';
import { DataActionType } from '../../store/reducers/data';

const SearchComponent = (props: DispatchProp): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit', value);
    props.dispatch({
      type: DataActionType.SearchVideo,
      payload: {
        query: value
      }
    })
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

const SearchContainer = connect()(SearchComponent);

export {
  SearchContainer
}