import React from 'react';

import './App.css';
import { Media, MediaType } from './playlist/components/Media';

const App = () => (
  <Media
    title="¿Que es responsive design?"
    author="Byron Cueva"
    image="./src/assets/images/covers/bitcoin.jpg"
    type={MediaType.Video}
  />
)

export default App;
