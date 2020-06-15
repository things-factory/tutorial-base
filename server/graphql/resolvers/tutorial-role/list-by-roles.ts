import { ListParam, convertListParams } from '@things-factory/shell'
import { Domain } from '@things-factory/shell'
import { Role } from '@things-factory/auth-base'
import { Tutorial, TutorialRole } from '../../../entities'
import { EntityManager, getRepository, SelectQueryBuilder } from 'typeorm'

export const listByRolesResolver = {
  async listByRoles(_: any, params: ListParam, context: any) {
    const qb: SelectQueryBuilder<TutorialRole> = getRepository(TutorialRole)
      .createQueryBuilder('tr')
      .select('tr.role_id', 'id')
      .addSelect('r.name', 'name')
      .innerJoin(Role, 'r', 'r.id = tr.role_id')
      .groupBy('tr.role_id')
      .addGroupBy('r.name')

    let data = await qb.getRawMany()
    return data
  }
}
