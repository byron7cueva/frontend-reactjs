import React from 'react'

import { GlobalStyles } from './styles/GlobalStyles'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './container/ListOfPhotoCard'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard categoryId={2} />
  </div>
)
