import { getRepository, In } from 'typeorm'
import { TutorialRole } from '../../../entities'

export const deleteTutorialRoles = {
  async deleteTutorialRoles(_: any, { names }, context: any) {
    await getRepository(TutorialRole).delete({ 
        domain: context.state.domain,
        name: In(names)
    })
    return true
  }
}

