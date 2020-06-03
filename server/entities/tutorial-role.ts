import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Index,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User, Role } from '@things-factory/auth-base'
import { Tutorial } from '.'

@Entity()
@Index('ix_tutorial-role_0', (tutorialRole: TutorialRole) => [tutorialRole.domain, tutorialRole.name], { unique: true })
export class TutorialRole {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @ManyToOne(type => Role)
  role: Role

  @ManyToOne(type => Tutorial)
  tutorial: Tutorial

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
