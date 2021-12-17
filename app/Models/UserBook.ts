import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserBook extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public note: number
  @column()
  public user_id: number
  @column()
  public book_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
