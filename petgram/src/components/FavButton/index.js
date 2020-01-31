import React from 'react'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  // Debe ir la primera letra en mayúsculas para que react entienda que queremos renderizar un componente
  const Icon = liked === true ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  )
}

// Este objeto va especificar que props le llegan
FavButton.propTypes = {
  liked: PropTypes.bool.isRequired, // Indicandole que la propiedad es requerida
  likes: PropTypes.number,
  onClick: PropTypes.func
}
