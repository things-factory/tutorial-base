import { ListParam, convertListParams } from '@things-factory/shell'
import { Domain } from '@things-factory/shell'
import { Role } from '@things-factory/auth-base'
import { EntityManager, getRepository } from 'typeorm'

export const listByRolesResolver = {
  async listByRoles(_: any, name, context: any) {
    const [items, total] = await getRepository(Role).findAndCount({
      where: { domain: context.state.domain },
      relations: ['domain', 'creator', 'updater']
    })

    return { items, total }
}
