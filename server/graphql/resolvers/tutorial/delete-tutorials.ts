import { getRepository, In } from 'typeorm'
import { Tutorial } from '../../../entities'

export const deleteTutorials = {
  async deleteTutorials(_: any, { ids }, context: any) {
    await getRepository(Tutorial).delete({
      domain: context.state.domain,
      id: In(ids)
    })
    return true
  }
}
