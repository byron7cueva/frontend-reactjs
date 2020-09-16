import React, { useState } from 'react'

import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

const App = () => {
  const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <p className='post-css'>
        esto es post-css
      </p>
      <p className='sass'>
        esto es sass
      </p>
      <p className='less'>
        esto es less
      </p>
      <p className='stylus'>
        esto es stylus
      </p>
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