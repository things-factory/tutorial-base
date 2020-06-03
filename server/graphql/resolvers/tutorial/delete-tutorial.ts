import { getRepository } from 'typeorm'
import { Tutorial } from '../../../entities'

export const deleteTutorial = {
  async deleteTutorial(_: any, { id }, context: any) {
    await getRepository(Tutorial).delete({ domain: context.state.domain, id })
    return true
  }
}
