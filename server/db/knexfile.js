const path = require('path')
const { defaults } = require('pg')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3'),
    },
    useNullAsDefault: true,
  },

  test: {
    ...defaults,
    client: 'sqlite3',
    connection: {
      filename: ':memory:', //use memory for testing, as this is faster
    },
    seeds: {
      ...defaults.seeds,
      directory: path.resolve(__dirname, 'seeds'),
    },
    migrations: {
      directory: path.join(__dirname, 'migrations'), // without this I was getting a 'no such file or directory, scandir' error
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
