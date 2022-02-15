import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // const uniqueKey = 'email'
    await User.createMany(
      /*uniqueKey,*/ [
        {
          username: 'Girafales',
          email: 'romainme@adonisjs.com',
          password: 'supersecret',
        },
      ]
    )
  }
}
