/* @flow */

const TAG_NAME = 'script'

export function inject (source: string, attributes: Object) {
  const element: any = document.createElement(TAG_NAME)
  const script: any = document.getElementsByTagName(TAG_NAME)[0]
  element.async = 1
  element.defer = 1
  element.src = source
  element.charset = 'UTF-8'
  Object.keys(key => {
    element.setAttribute(key, attributes[key])
  })
  script.parentNode.insertBefore(element, script)
}

export default function (name: string, source: string, prefix: string): Function {
  const global = window
  if (!global[name]) {
    global[name] = global[name] || function () {
      (global[name].q = global[name].q || []).push(arguments)
    }
    inject(source || 'https://cdn.userdive.com/agent.js', {'data-ud-namespace': name})
  }
  return global[name]
}
