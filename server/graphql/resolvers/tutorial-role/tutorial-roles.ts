import { ListParam, convertListParams } from '@things-factory/shell'
import { EntityManager, getRepository, SelectQueryBuilder } from 'typeorm'
import { Role } from '@things-factory/auth-base'
import { TutorialRole } from '../../../entities'

export const tutorialRolesResolver = {
  async tutorialRoles(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(TutorialRole).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  }
}
