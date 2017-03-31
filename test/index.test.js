/* @flow */
import { describe, it } from 'mocha'
import { internet } from 'faker'
import assert from 'assert'

describe('aync loader', () => {
  const _ud = require('../src').default
  const NAMESPACE = `data-ud-namespace`

  it('entrypoint', () => {
    assert(typeof _ud === 'function')
    assert(_ud('create', 'id', 'auto') === undefined)
    assert(_ud('send', 'pageview', internet.url()) === undefined)
    const element: any = document.querySelector(`[${NAMESPACE}]`)
    const name: string = element.getAttribute(NAMESPACE)
    assert(name === '_ud')
  })
})
