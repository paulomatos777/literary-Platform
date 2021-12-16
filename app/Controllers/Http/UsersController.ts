import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return 'all users'
  }

  public async store({}: HttpContextContract) {
    return ' create user'
  }

  public async show({}: HttpContextContract) {
    return ' get user by id'
  }

  public async update({}: HttpContextContract) {
    return ' change user '
  }

  public async destroy({}: HttpContextContract) {
    ' delete user'
  }
}
