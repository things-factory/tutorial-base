import { getRepository } from 'typeorm'
import { Tutorial } from '../../../entities'

export const createTutorial = {
  async createTutorial(_: any, { tutorial}, context: any) {
    return await getRepository(Tutorial).save({
      ...tutorial,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

