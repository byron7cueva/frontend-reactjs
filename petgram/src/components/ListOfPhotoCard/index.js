import React from 'react'

import { PthotoCard } from '../PhotoCard'

export const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => (
        <PthotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
