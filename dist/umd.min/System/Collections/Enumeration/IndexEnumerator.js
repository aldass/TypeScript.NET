/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var r=e(require,exports);void 0!==r&&(module.exports=r)}else"function"==typeof define&&define.amd&&define(["require","exports","./EnumeratorBase","../../../extends"],e)}(function(e,r){"use strict";var t=e("./EnumeratorBase"),n=e("../../../extends"),o=n["default"],i=function(e){function r(r){var t;e.call(this,function(){if(t=r(),t&&t.source){var e=t.length;if(e<0)throw new Error("length must be zero or greater");if(!isFinite(e))throw new Error("length must finite number");if(e&&0===t.step)throw new Error("Invalid IndexEnumerator step value (0).");var n=t.pointer;if(n){if(n!=Math.floor(n))throw new Error("Invalid IndexEnumerator pointer value ("+n+") has decimal.")}else n=0;t.pointer=n;var o=t.step;if(o){if(o!=Math.floor(o))throw new Error("Invalid IndexEnumerator step value ("+o+") has decimal.")}else o=1;t.step=o}},function(e){var r=t&&t.source?t.length:0;if(!r||isNaN(r))return e.yieldBreak();var n=t.pointer;return t.pointer+=t.step,n<r&&n>=0?e.yieldReturn(t.source[n]):e.yieldBreak()},function(){t&&(t.source=null)}),this._isEndless=!1}return o(r,e),r}(t.EnumeratorBase);r.IndexEnumerator=i,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=i});
//# sourceMappingURL=IndexEnumerator.js.map