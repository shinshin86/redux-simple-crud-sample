const mysql = require('mysql')
const config = require('./config')

const conn = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  port: config.database.port,
  database: config.database.db
})

module.exports = conn
