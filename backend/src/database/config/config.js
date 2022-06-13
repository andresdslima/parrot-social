require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": "bb7bfc81bbd706",
    "password": "fecdec46",
    "database": "heroku_38d45a6d513ff03",
    "host": "us-cdbr-east-05.cleardb.net",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "Palestra1951$",
    "database": "parrot-social",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
