import { gql } from 'apollo-server-koa'

export const TutorialRolePatch = gql`
  input TutorialRolePatch {
    id: String
    name: String
    role: ObjectRef
    tutorial: ObjectRef
    cuFlag: String
  }
`
