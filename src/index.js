/*! userdive | Copyright (c) UNCOVER TRUTH Inc. */

/* @flow */
const TAG_NAME = 'script'

export function inject (source: string, attributes: Object) {
  const element: any = document.createElement(TAG_NAME)
  const script: any = document.getElementsByTagName(TAG_NAME)[0]
  element.async = 1
  element.defer = 1
  element.src = source
  element.charset = 'UTF-8'
  Object.keys(attributes).forEach(key => {
    element.setAttribute(key, attributes[key])
  })
  script.parentNode.insertBefore(element, script)
}

export function queue (name: string, global: any) {
  global[name] =
    global[name] ||
    function () {
      ;(global[name].q = global[name].q || []).push(arguments)
    }
  return global[name]
}

export default function (name: ?string, source: ?string, global: any): Function {
  name = name || '_ud'
  source = source || 'https://cdn.userdive.com/agent.js'
  global = global || window
  if (global[name]) {
    return global[name]
  }
  inject(source, { 'data-ud-namespace': name })
  return queue(name, global)
}
