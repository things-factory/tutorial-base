import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { TutorialRole } from '../../../entities'
import { Role } from '@things-factory/auth-base'

export const tutorialRoleAssignmentsResolver = {
  async tutorialRoleAssignments(_: any, { tutorialId }, context: any) {
    const tutorialRole = await getRepository(TutorialRole).find({
      where: {
        tutorial: tutorialId
      },
      relations: ['role', 'tutorial', 'domain']
    })

    let items: any[], total: number
    ;[items, total] = await getRepository(Role).findAndCount({
      relations: ['domain', 'creator', 'updater']
    })

    items.map(item => {
      item.assigned = !!tutorialRole.some(tutorialRole => tutorialRole.role.id === item.id)
    })

    return { items, total }
  }
}
