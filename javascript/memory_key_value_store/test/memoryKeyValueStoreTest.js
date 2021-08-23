const MemoryKeyValueStore = require('../memoryKeyValueStore.js')
const expect = require('chai').expect

describe('MemoryKeyValueStore', function () {
  let storage = null
  beforeEach(function createMkvs () {
    storage = MemoryKeyValueStore()
  })
  describe('#get()', function () {
    context('with a matching key', function () {
      it('gets the value of key', function () {
      })
    })

    context('without a matching key', function () {
      it('returns the special value null', function () {
      })
    })

    context('with a non-string value', function () {
      it('returns an error', function () {
      })
    })
  })
  describe('#set', function () {
    context('when the key does not hold a value', function () {
      it('sets the key to hold the string value', function () {
      })
      it("it returns the string 'OK'", function () {
      })
    })

    context('when the key already holds a value', function () {
      it('sets the key to hold the string value', function () {
      })
      it("returns the string 'OK'", function () {
      })
    })
  })

  describe('#keys()', function () {
    context('when no regex pattern is passed', function () {
      it('returns all keys', function () {
      })
    })
    context('when a regex pattern is passed', function () {
      it('returns all keys matching regex pattern', function () {
      })
    })
  })
})
