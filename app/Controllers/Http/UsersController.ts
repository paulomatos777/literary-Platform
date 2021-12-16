import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { Request } from '@adonisjs/core/build/standalone'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return 'all users'
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])
    const user = await User.create(data)
    return user
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.find(params.id)
    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])
    const user = await User.findOrFail(params.id)
    user.merge(data)
    await user.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }
}
