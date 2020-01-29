import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      likes
      liked
      src
      userId
    }
  }
`

export const withPhotos = graphql(GET_PHOTOS)
