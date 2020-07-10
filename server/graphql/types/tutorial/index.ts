import { Tutorial } from './tutorial'
import { NewTutorial } from './new-tutorial'
import { TutorialPatch } from './tutorial-patch'
import { TutorialList } from './tutorial-list'

export const Mutation = `
  createTutorial (
    tutorial: NewTutorial!
  ): Tutorial

  updateTutorial (
    name: String!
    patch: TutorialPatch!
  ): Tutorial

  updateMultipleTutorial (
    patches: [TutorialPatch]!
  ): [Tutorial]

  deleteTutorial (
    id: String!
  ): Boolean

  deleteTutorials (
    ids: [String]!
  ): Boolean
`

export const Query = `
  tutorials(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TutorialList
  tutorialsWithRoles(roleNames: String!): [Tutorial]
  tutorial(name: String!): Tutorial
`

export const Types = [Tutorial, NewTutorial, TutorialPatch, TutorialList]
