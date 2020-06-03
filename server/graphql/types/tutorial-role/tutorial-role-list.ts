import { gql } from 'apollo-server-koa'

export const TutorialRoleList = gql`
  type TutorialRoleList {
    items: [TutorialRole]
    total: Int
  }
`
