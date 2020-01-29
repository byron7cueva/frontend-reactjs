import React, { Fragment } from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'

export const Home = ({ categoryId }) => (
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCard categoryId={categoryId} />
  </Fragment>
)
