import { buildQuery, ListParam, convertListParams } from '@things-factory/shell'
import { getRepository, Like, SelectQueryBuilder } from 'typeorm'
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
    const qb: SelectQueryBuilder<Tutorial> = getRepository(Tutorial)
      .createQueryBuilder('tutorial')
      .select('tutorial.id', 'id')
      .addSelect('tutorial.name', 'name')
      .addSelect('tutorial.description', 'description')
      .addSelect('tutorial.resourceUrl', 'resourceUrl')
      .addSelect('tutorial.value', 'value')
      .addSelect('tutorial.duration', 'duration')
      .addSelect('tutorial.rank', 'rank')
      .innerJoin(TutorialRole, 'tr', 'tr.tutorial_id = tutorial.id')
      .where('tr.role_id = :roleId', { roleId: params.roleId })
      .groupBy('tutorial.id')
      .orderBy('tutorial.rank')

    let data = await qb.getRawMany()
    return data
  }
}
