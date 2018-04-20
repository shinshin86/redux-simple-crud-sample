import * as actions from '../../src/actions'
import assert from 'assert'

describe('actions', () => {
  describe('requestAllUser', () => {
    it('should return type "REQUEST_ALL_USER"', () => {
      assert.equal('REQUEST_ALL_USER', actions.requestAllUser().type)
    })
  })
})

