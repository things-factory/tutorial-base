import { buildQuery, ListParam, convertListParams } from '@things-factory/shell'
import { getRepository, Like } from 'typeorm'
import { Role } from '@things-factory/auth-base'
import { Tutorial, TutorialRole } from '../../../entities'
import { tutorialRoleResolver } from '../tutorial-role/tutorial-role'

export const tutorialsResolver = {
  async tutorials(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(Tutorial).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  },

  async tutorialsWithRoles(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Tutorial).createQueryBuilder('tutorial')
    buildQuery(queryBuilder, params, context)
    const query = await queryBuilder
      .select('tutorial.id', 'id')
      .addSelect('tutorial.name', 'name')
      .addSelect('tutorial.description', 'description')
      .addSelect('tutorial.resourceUrl', 'resourceUrl')
      .addSelect('tutorial.value', 'value')
      .addSelect('tutorial.duration', 'duration')
      .addSelect('tutorial.rank', 'rank')
      .innerJoin(TutorialRole, 'tr', 'tr.tutorial_id = tutorial.id')
      .andWhere('tutorial.domain_id = :domainId', { domainId: context.state.domain.id })
      .andWhere(qb => {
        const subQuery = qb
          .subQuery()
          .select('ur.roles_id')
          .from('users_roles', 'ur')
          .where('ur.users_id = :userId', { userId: context.state.user.id })
          .getQuery()
        return 'tr.role_id IN ' + subQuery
      })
      .groupBy('tutorial.id')

    const tutorialItems: Tutorial[] = await query.getRawMany()
    return tutorialItems
  }
}
