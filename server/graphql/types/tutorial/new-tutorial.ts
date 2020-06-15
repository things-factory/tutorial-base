import { gql } from 'apollo-server-koa'

export const NewTutorial = gql`
  input NewTutorial {
    name: String!
    description: String
    resourceUrl: String
    value: String
    duration: String
    rank: Int
    roles: [ObjectRef]
  }
`
