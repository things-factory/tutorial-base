import { getRepository } from 'typeorm'
import { TutorialRole } from '../../../entities'

export const createTutorialRole = {
  async createTutorialRole(_: any, { tutorialRole}, context: any) {
    return await getRepository(TutorialRole).save({
      ...tutorialRole,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

