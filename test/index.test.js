/* @flow */
import { describe, it } from 'mocha'
import { internet } from 'faker'
import assert from 'assert'

describe('aync loader', () => {
  const _ud = require('../src').default
  it('entrypoint', () => {
    assert(typeof _ud === 'function')
    assert(_ud('create', 'id', 'auto'))
    assert(_ud('send', 'pageview', internet.url()))
  })
})
