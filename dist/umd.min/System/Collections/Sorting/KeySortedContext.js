/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)};!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var o=t(require,exports);void 0!==o&&(module.exports=o)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","../../Compare","./SortContext","../../Functions"],function(e,t){var o=e("../../Compare"),r=e("./SortContext"),n=e("../../Functions"),i=function(e){function t(t,r,n,i){void 0===n&&(n=1),void 0===i&&(i=o.compare),e.call(this,t,i,n),this._keySelector=r}return __extends(t,e),t.prototype.compare=function(t,r){var i=this,c=i._keySelector;if(!c||c==n["default"].Identity)return e.prototype.compare.call(this,t,r);var p=o.compare(c(t),c(r));return 0==p&&i._next?i._next.compare(t,r):i._order*p},t}(r["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i});
//# sourceMappingURL=KeySortedContext.js.map
