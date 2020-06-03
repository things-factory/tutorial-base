import { gql } from 'apollo-server-koa'

export const TutorialList = gql`
  type TutorialList {
    items: [Tutorial]
    total: Int
  }
`
