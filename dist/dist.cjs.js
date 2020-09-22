(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@babel/parser'), require('babel-traverse')) :
  typeof define === 'function' && define.amd ? define(['@babel/parser', 'babel-traverse'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.babylon, global.traverse));
}(this, (function (babylon, traverse) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var traverse__default = /*#__PURE__*/_interopDefaultLegacy(traverse);

  const code = `function square(n) {
  return n * n;
}`;

  const ast = babylon.parse(code);

  traverse__default['default'](ast, {
    enter(path) {
      if (
        path.node.type === "Identifier" &&
        path.node.name === "n"
      ) {
        path.node.name = "x";
      }
    }
  });

  console.dir(ast);

})));
