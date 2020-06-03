import { getRepository } from 'typeorm'
import { TutorialRole } from '../../../entities'

export const tutorialRoleResolver = {
  async tutorialRole(_: any, { name }, context: any) {
    const repository = getRepository(TutorialRole)

    return await getRepository(TutorialRole).findOne({
      where: { domain: context.state.domain, name, relations: ['domain', 'creator', 'updater']}
    })
  }
}

