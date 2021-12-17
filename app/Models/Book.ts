import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
//import { ManyToMany} from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Book extends BaseModel {
  @manyToMany(() => User)
  public user: ManyToMany<typeof User>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public author: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
