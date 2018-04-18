const conn = require('../db')
const config = require('../config').database
const assert = require('assert')

describe('DB Connection', () => {
  describe('Read connection setting at config file', () => {
    it('Host', () => {
      assert.equal(conn.config.host, config.host)
    })
    it('User', () => {
      assert.equal(conn.config.user, config.user)
    })
    it('Password', () => {
      assert.equal(conn.config.password, config.password)
    })
    it('Port', () => {
      assert.equal(conn.config.port, config.port)
    })
    it('DB', () => {
      assert.equal(conn.config.database, config.db)
    })
  })
})
