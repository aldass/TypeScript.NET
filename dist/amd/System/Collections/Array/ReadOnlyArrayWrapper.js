/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../ReadOnlyCollectionWrapper","../../../extends"],function(t,e,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o["default"],u=function(t){function e(e){var n=t.call(this,e)||this;return n.__getValueAt=function(t){return e[t]},n}return r(e,t),e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this.__getValueAt=null},e.prototype.getValueAt=function(t){return this.throwIfDisposed(),this.__getValueAt(t)},e}(n["default"]);e["default"]=u});
//# sourceMappingURL=ReadOnlyArrayWrapper.js.map