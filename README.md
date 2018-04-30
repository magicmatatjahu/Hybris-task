# Hybris task

This project was created for the recruitment task - Cloud Software Engineer (student). The application was written using [Angular2+](https://angular.io/) and [NestJS](https://nestjs.com/)

## Heroku app

The live version of the application is located on the "Heroku" cloud under the [LINK](https://hybris-task-maciej-urbanczyk.herokuapp.com/)

## Api paths

* `/api/hello` - Hello World! :)
* `/api/users/:user/info` - information about the github user
* `/api/users/:user/info/email` - user's email. If private, api returns 'Private email :C'
* `/api/users/:user/repos` - all user's public repositories
* `/api/users/:user/repos/:repo` - information about the exact user's public repository
* `/api/users/:user/repos/:repo/lang` - returns the language of the repository
* `/api/users/:user/langs` - returns the languages used by the user
* `/api/users/:user/langs/stats` - returns statistics (number of public repositories) of languages used by the user
* `/api/users/:user/langs/stats/bytes` - returns statistics (number of bytes) of languages used by the user
* `/api/users/search/:query` - returns users who contain a query in their name
