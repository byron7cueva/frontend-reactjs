import React from 'react';

import { HomeLayout } from '../components/HomeLayout';
import { Categories } from '../../categories/components/Categories';
import data from '../../../data/api.json';

export const Home = (): JSX.Element => (
  <HomeLayout>
    <Categories data={data.categories} />
  </HomeLayout>
);
