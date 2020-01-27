import React from 'react'

import { PthotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7].map(id => (
        <PthotoCard key={id} id={id} />
      ))}
    </ul>
  )
}
