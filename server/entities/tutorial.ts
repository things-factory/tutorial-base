import { CreateDateColumn, UpdateDateColumn, Entity, Index, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User, Role } from '@things-factory/auth-base'

@Entity('tutorials')
@Index('ix_tutorial_0', (tutorial: Tutorial) => [tutorial.domain, tutorial.name], { unique: true })
export class Tutorial {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column({
    nullable: true
  })
  resourceUrl: string

  @Column({
    nullable: true
  })
  value: string

  @Column({
    nullable: true
  })
  duration: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
