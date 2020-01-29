import React from 'react'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  // Debe ir la primera letra en mayúsculas para que react entienda que queremos renderizar un componente
  const Icon = liked === true ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  )
}
