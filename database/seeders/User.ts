import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'
    await User.updateOrCreateMany(uniqueKey, [
      {
        name: 'Joao Sampaio',
        email: 'virk@adonisjst.com',
        password: 'secret',
      },
      {
        name: 'Viviane Oliveira',
        email: 'romain@adonisjst.com',
        password: 'supersecret',
      },
    ])
  }
}
