// import userdive = require('../lib')

// const _ud = userdive()

// _ud('create', 'id', 'auto')
// _ud('send', 'pageview')

declare var exports: any
declare var document: any
declare var window: any

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inject = inject;
exports.default = factory;
/*! userdive | Copyright (c) UNCOVER TRUTH Inc. */

var TAG_NAME = 'script';

function inject(source: string, attributes: object) {
  var element = document.createElement(TAG_NAME);
  var script = document.getElementsByTagName(TAG_NAME)[0];
  element.async = 1;
  element.defer = 1;
  element.src = source;
  element.charset = 'UTF-8';
  Object.keys(attributes).forEach(function (key) {
    element.setAttribute(key, attributes[key]);
  });
  script.parentNode.insertBefore(element, script);
}

function factory(name: string, source: string) {
  name = name || '_ud';
  source = source || 'https://cdn.userdive.com/agent.js';
  var global = window;
  if (!global[name]) {
    global[name] = global[name] || function () {
      (global[name].q = global[name].q || []).push(arguments);
    };
    inject(source, { 'data-ud-namespace': name });
  }
  return global[name];
}
