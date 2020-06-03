import { getRepository } from 'typeorm'
import { TutorialRole } from '../../../entities'

export const deleteTutorialRole = {
  async deleteTutorialRole(_: any, { name }, context: any) {
    await getRepository(TutorialRole).delete({ domain: context.state.domain, name })
    return true
  }
}

