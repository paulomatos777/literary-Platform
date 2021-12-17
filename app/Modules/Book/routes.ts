import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/books', 'BooksController')
}).middleware('auth')
