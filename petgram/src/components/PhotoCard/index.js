import React, { Fragment } from 'react'
import { Link } from '@reach/router'

import { Article, ImgWrapper, Img } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [element, show] = useNearScreen()

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {// A esta funcion le va llegar como parametro la mutacion
            toggleLike => {
              const handleFavClick = () => {
                // Necesitamos pasar los parametros que necesita la mutacion
                toggleLike({ variables: { input: { id } } })
              }
              return (
                <FavButton
                  onClick={handleFavClick}
                  liked={liked}
                  likes={likes}
                />
              )
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
