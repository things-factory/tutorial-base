import { getRepository } from 'typeorm'
import { Tutorial } from '../../../entities'

export const updateTutorial = {
  async updateTutorial(_: any, { name, patch }, context: any) {
    const repository = getRepository(Tutorial)
    const tutorial = await repository.findOne({ 
      where: { domain: context.state.domain, name }
    })

    return await repository.save({
      ...tutorial,
      ...patch,
      updater: context.state.user
    })
  }
}