import { getRepository } from 'typeorm'
import { Tutorial } from '../../../entities'

export const tutorialResolver = {
  async tutorial(_: any, { name }, context: any) {
    const repository = getRepository(Tutorial)

    return await getRepository(Tutorial).findOne({
      where: { domain: context.state.domain, name, relations: ['domain', 'creator', 'updater']}
    })
  }
}

