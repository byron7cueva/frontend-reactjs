import React, { Fragment } from 'react'

import { Article, ImgWrapper, Img } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [element, show] = useNearScreen()

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            {// A esta funcion le va llegar como parametro la mutacion
            toggleLike => {
              const handleFavClick = () => {
                // Necesitamos pasar los parametros que necesita la mutacion
                !liked && toggleLike({ variables: { input: { id } } })
                setLiked(!liked)
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
