import { gql } from 'apollo-server-koa'

export const TutorialRole = gql`
  type TutorialRole {
    id: String
    name: String
    domain: Domain
    role: Role
    tutorial: Tutorial
    description: String
    assigned: Boolean
    updater: User
    creator: User
    updatedAt: String
    createdAt: String
  }
`
