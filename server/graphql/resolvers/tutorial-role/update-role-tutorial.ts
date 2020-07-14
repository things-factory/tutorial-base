import { Role } from '@things-factory/auth-base'
import { getManager, getRepository } from 'typeorm'
import { Tutorial, TutorialRole } from '../../../entities'
import uuid from 'uuid/v4'

export const updateRoleTutorial = {
  async updateRoleTutorial(_: any, { tutorialId, tutorialRoles }, context: any) {
    return await getManager().transaction(async () => {
      try {
        const tutorial: Tutorial = await getRepository(Tutorial).findOne({
          where: { id: tutorialId }
        })
        if (!tutorial) throw new Error('tutorial not exists')

        // 1. Delete every tutorial roles related with current tutorial.
        await getRepository(TutorialRole).delete({ tutorial })

        // 2. Append new role into tutorial roles.
        tutorialRoles.forEach(async (tutorialRole: TutorialRole) => {
          await getRepository(TutorialRole).insert({
            name: uuid(),
            domain: context.state.domain,
            tutorial: tutorialId,
            role: await getRepository(Role).findOne(tutorialRole.role.id)
          })
        })

        const tutorials = await getRepository(Tutorial).find()
        const rolesTutorial = await getRepository(TutorialRole).find({ where: { tutorial }, relations: ['tutorial'] })
        return tutorials.map((tutorial: Tutorial) => {
          return {
            name: tutorial.name,
            domain: context.state.domain,
            tutorial: tutorial.id,
            assigned:
              rolesTutorial.filter((tutorialRole: TutorialRole) => tutorialRole.tutorial.id === tutorial.id).length > 0
          }
        })
      } catch (e) {
        throw e
      }
    })
  }
}
