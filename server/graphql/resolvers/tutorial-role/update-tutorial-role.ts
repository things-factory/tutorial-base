import { getRepository } from 'typeorm'
import { TutorialRole } from '../../../entities'

export const updateTutorialRole = {
  async updateTutorialRole(_: any, { name, patch }, context: any) {
    const repository = getRepository(TutorialRole)
    const tutorialRole = await repository.findOne({ 
      where: { domain: context.state.domain, name }
    })

    return await repository.save({
      ...tutorialRole,
      ...patch,
      updater: context.state.user
    })
  }
}