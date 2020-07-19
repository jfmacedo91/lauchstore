const { pool } = require('pg')

module.exports = new pool({
  user: 'postgres',
  password: '123456',
  port: 5432,
  database: 'launchstore'
})