import { TutorialRole } from './tutorial-role'
import { NewTutorialRole } from './new-tutorial-role'
import { TutorialRolePatch } from './tutorial-role-patch'
import { TutorialRoleList } from './tutorial-role-list'
import { RoleList } from './role-list'
import { RoleTutorial } from './role-tutorial'

export const Mutation = `
  createTutorialRole (
    tutorialRole: NewTutorialRole!
  ): TutorialRole

  updateTutorialRole (
    name: String!
    patch: TutorialRolePatch!
  ): TutorialRole

  updateMultipleTutorialRole (
    patches: [TutorialRolePatch]!
  ): [TutorialRole]

  deleteTutorialRole (
    name: String!
  ): Boolean

  deleteTutorialRoles (
    names: [String]!
  ): Boolean

  updateRoleTutorial (
    tutorialId: String!
    tutorialRoles: [TutorialRolePatch]!
  ): [RoleTutorial] @priviledge(category: "tutorial", priviledge: "mutation")
`

export const Query = `
  tutorialRoles(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TutorialRoleList
  tutorialRole(name: String!): TutorialRole
  tutorialRoleAssignments(tutorialId: String!): TutorialRoleList
  listByRoles(name: String!): RoleList
`

export const Types = [TutorialRole, NewTutorialRole, TutorialRolePatch, TutorialRoleList, RoleList, RoleTutorial]
