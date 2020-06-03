import { gql } from 'apollo-server-koa'

export const NewTutorialRole = gql`
  input NewTutorialRole {
    name: String!
    tutorial: ObjectRef!
    roles: [ObjectRef]!
  }
`
