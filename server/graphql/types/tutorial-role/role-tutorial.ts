import { gql } from 'apollo-server-koa'

export const RoleTutorial = gql`
  type RoleTutorial {
    id: String
    name: String
    role: Role
    tutorial: Tutorial
    assigned: Boolean
  }
`
