import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CorouselItem';

const Home = ({ myList, trends, originals }) => (
  <>
    <Header />
    <Search isHome />
    {myList.length > 0 && (
      <Category title="Mi Lista">
        <Carousel>
          {myList.map(item => (
            //Pasar los datos destructurando la imformacion
            <CarouselItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Category>
    )}

    {trends.length > 0 && (
      <Category title="Tendencias">
        <Carousel>
          {trends.map(item => (
            //Pasar los datos destructurando la imformacion
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
    )}

    {originals.length > 0 && (
      <Category title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item => (
            //Pasar los datos destructurando la imformacion
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
    )}
  </>
);

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// connect(mapeo de las props, actions)(Component)
export default connect(mapStateToProps, null)(Home);
