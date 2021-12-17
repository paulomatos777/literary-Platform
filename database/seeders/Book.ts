import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'

export default class BookSeeder extends BaseSeeder {
  public async run() {
    await Book.createMany([
      {
        name: 'Van gogh',
        author: 'van@',
      },

      {
        name: 'Da Vincci ',
        author: 'dav@',
      },
    ])
  }
}
