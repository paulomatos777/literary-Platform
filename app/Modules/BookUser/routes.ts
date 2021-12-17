import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/user-books', 'UserBooksController')
}).middleware('auth')
