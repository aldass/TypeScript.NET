!function(e){if("object"==typeof module&&"object"==typeof module.exports){var r=e(require,exports);void 0!==r&&(module.exports=r)}else"function"==typeof define&&define.amd&&define(["require","exports","./Sort/createComparer","./Sort/quickSort"],e)}(function(e,r){"use strict";function o(e){for(var o in e)r.hasOwnProperty(o)||(r[o]=e[o])}var t=e("./Sort/createComparer");r.createComparer=t.createComparer,r["default"]=t.createComparer,r.by=t.createComparer,o(e("./Sort/quickSort"))});
//# sourceMappingURL=Sort.js.map