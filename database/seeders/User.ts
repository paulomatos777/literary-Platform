import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'
    await User.updateOrCreateMany(uniqueKey, [
      {
        name: 'Joalisson Pereira',
        email: 'virk@adonisjst.com',
        password: 'admin',
      },
      {
        name: 'Gilberto Ramos',
        email: 'romain@adonisjst.com',
        password: 'admin',
      },
    ])
  }
}
