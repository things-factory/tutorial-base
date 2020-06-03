import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
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