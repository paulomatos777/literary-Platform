import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.group(() => {
  Route.resource('users', 'UsersController')
}).middleware('auth')
