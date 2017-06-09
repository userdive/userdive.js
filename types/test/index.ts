import userdive from '../'

const _ud = userdive()

_ud('create', 'id', 'auto')
_ud('send', 'pageview')
_ud('set', 'dimension1', 'userdive')
_ud('set', 'metric1', 1)
