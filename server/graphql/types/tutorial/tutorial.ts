import { gql } from 'apollo-server-koa'

export const Tutorial = gql`
  type Tutorial {
    id: String
    name: String
    domain: Domain
    description: String
    resourceUrl: String
    value: String
    duration: String
    rank: String
    roles: [Role]
    updater: User
    creator: User
    updatedAt: String
    createdAt: String
  }
`
