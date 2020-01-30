import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => (
  <Layout
    title="Tu app de fotos de mascotas"
    subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
  >
    <ListOfCategories />
    <ListOfPhotoCard categoryId={categoryId} />
  </Layout>
)

//Indicando que no se renderice mientras no cambie categoryId
export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
