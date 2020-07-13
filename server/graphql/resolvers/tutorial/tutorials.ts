import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository, SelectQueryBuilder } from 'typeorm'
import { Tutorial, TutorialRole } from '../../../entities'
import { Role } from '@things-factory/auth-base'

export const tutorialsResolver = {
  async tutorials(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(Tutorial).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  },

  async tutorialsWithRoles(_: any, { roleNames }, context: any) {
    let filter: string[] = roleNames.split(',')
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
      .innerJoin(Role, 'role', 'role.id = tr.role_id')
      .where('UPPER(role.name) IN (:...input)', { input: filter })
      .groupBy('tutorial.id')
      .orderBy('tutorial.rank')

    let data = await qb.getMany()
    return data
  }
}
