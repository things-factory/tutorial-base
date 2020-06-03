import { tutorialResolver } from './tutorial'
import { tutorialsResolver } from './tutorials'

import { updateTutorial } from './update-tutorial'
import { updateMultipleTutorial } from './update-multiple-tutorial'
import { createTutorial } from './create-tutorial'
import { deleteTutorial } from './delete-tutorial'
import { deleteTutorials } from './delete-tutorials'

export const Query = {
  ...tutorialsResolver,
  ...tutorialResolver
}

export const Mutation = {
  ...updateTutorial,
  ...updateMultipleTutorial,
  ...createTutorial,
  ...deleteTutorial,
  ...deleteTutorials
}
