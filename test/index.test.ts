import * as mocha from 'mocha'
import { internet } from 'faker'
import * as assert from 'assert'

import userdive from '../src'

const DEFAULT_NAME = '_ud'

describe('aync loader', () => {
  const NAMESPACE = `data-ud-namespace`

  it('undefined', () => {
    assert(window[DEFAULT_NAME] === undefined)
  })

  it('entrypoint', () => {
    const _ud = userdive('', '', '')
    assert(typeof _ud === 'function')
    assert(_ud('create', 'id', 'auto') === undefined)
    assert(_ud('send', 'pageview', internet.url()) === undefined)
    const element: any = document.querySelector(`[${NAMESPACE}]`)
    const name: string = element.getAttribute(NAMESPACE)
    assert(name === '_ud')
  })
})
