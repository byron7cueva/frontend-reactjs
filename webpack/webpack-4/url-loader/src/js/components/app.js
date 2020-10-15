import React, { useState } from 'react'

import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

const App = () => {
  const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <p>Que linda aplicación hecha en React.js</p>
      <video src={video} width={360} controls poster={logo}/>
      <p>
        <img src={logo} alt='logo' width={40} />
      </p>
      <ul>
        {
          loaderList.map(item => (
            <Loader key={item.id} {...item} />
          ))
        }
      </ul>
      <button onClick={handleClick}>Mostrar loaders</button>
    </div>
  )
}

export default App