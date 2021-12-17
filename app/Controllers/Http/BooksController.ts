import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'

export default class BooksController {
  public async index({}: HttpContextContract) {
    const book = Book.all()
    return book
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'author'])
    const book = await Book.create(data)
    return book
  }

  public async show({ params }: HttpContextContract) {
    const book = await Book.find(params.id)
    return book
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['name', 'author'])
    const book = await Book.findOrFail(params.id)
    book.merge(data)
    await book.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
  }
}
