'use strict';

var babylon = require('@babel/parser');
var traverse = require('babel-traverse');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var traverse__default = /*#__PURE__*/_interopDefaultLegacy(traverse);

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

console.log(ast);

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
