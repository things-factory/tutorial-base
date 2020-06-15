import { gql } from 'apollo-server-koa'

export const TutorialPatch = gql`
  input TutorialPatch {
    id: String
    name: String
    description: String
    resourceUrl: String
    value: String
    duration: String
    rank: Int
    roles: [ObjectRef]
    cuFlag: String
  }
`
