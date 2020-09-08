import React from 'react';

import '../assets/styles/App.scss';

import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CorouselItem';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState.json';

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loadding...</h1>
  ) : (
    <>
      <Search />
      {initialState.mylist.length > 0 && (
        <Category title="Mi Lista">
          <Carousel>
            {initialState.mylist.map(item => (
              //Pasar los datos destructurando la imformacion
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Category>
      )}

      {initialState.trends.length > 0 && (
        <Category title="Tendencias">
          <Carousel>
            {initialState.trends.map(item => (
              //Pasar los datos destructurando la imformacion
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Category>
      )}

      {initialState.originals.length > 0 && (
        <Category title="Originales de Platzi Video">
          <Carousel>
            {initialState.originals.map(item => (
              //Pasar los datos destructurando la imformacion
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Category>
      )}
    </>
  );
};

export default Home;
