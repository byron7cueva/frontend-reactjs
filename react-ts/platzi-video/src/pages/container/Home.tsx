import React from 'react';

import { HomeLayout } from '../components/HomeLayout';
import { Categories } from '../../categories/components/Categories';
import { Related } from '../components/Related';

import data from '../../../data/api.json';

export const Home = (): JSX.Element => (
  <HomeLayout>
    <Related />
    <Categories data={data.categories} />
  </HomeLayout>
);
