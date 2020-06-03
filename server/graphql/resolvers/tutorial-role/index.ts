import { tutorialRoleResolver } from './tutorial-role'
import { tutorialRolesResolver } from './tutorial-roles'
import { tutorialRoleAssignmentsResolver } from './tutorial-role-assignments'
import { listByRolesResolver } from './list-by-roles'
import { updateRoleTutorial } from './update-role-tutorial'

import { updateTutorialRole } from './update-tutorial-role'
import { updateMultipleTutorialRole } from './update-multiple-tutorial-role'
import { createTutorialRole } from './create-tutorial-role'
import { deleteTutorialRole } from './delete-tutorial-role'
import { deleteTutorialRoles } from './delete-tutorial-roles'

export const Query = {
  ...tutorialRolesResolver,
  ...tutorialRoleResolver,
  ...tutorialRoleAssignmentsResolver,
  ...listByRolesResolver
}

export const Mutation = {
  ...updateTutorialRole,
  ...updateMultipleTutorialRole,
  ...createTutorialRole,
  ...deleteTutorialRole,
  ...deleteTutorialRoles,
  ...updateRoleTutorial
}
