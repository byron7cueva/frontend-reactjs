import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { Search } from '../components/Seacrh';
import { searchVideo } from '../../store/actions';

const mapDispatchToProps = {
  searchVideo
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

const SearchComponent = (props: PropsFromRedux): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.searchVideo(value);
  }

  // Obtener referencia de un elemento input html
  const setRefInput = (instance: HTMLInputElement | null) => {
    console.log(instance);
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

const SearchContainer = connector(SearchComponent);

export {
  SearchContainer
}