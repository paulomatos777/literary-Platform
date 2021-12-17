import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'
import UserBook from 'App/Models/UserBook'

export default class BooksController {
  public async index({}: HttpContextContract) {
    const userbook = UserBook.all()
    return userbook
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['user_id', 'book_id', 'note'])
    const userbook = await UserBook.create(data)
    return userbook
  }

  public async show({ params }: HttpContextContract) {
    const userbook = await UserBook.find(params.id)
    return userbook
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['note'])
    const userbook = await UserBook.findOrFail(params.id)
    userbook.merge(data)
    await userbook.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const userbook = await UserBook.findOrFail(params.id)
    await userbook.delete()
  }
}
