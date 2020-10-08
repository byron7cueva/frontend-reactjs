import React from 'react';

import { Playlist } from './playlist/components/Playlist';
import data from '../data/api.json';

const playlist = data.categories[0].playlist;

const App = () => (
  <Playlist data={playlist}/>
)

export default App;
