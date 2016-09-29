/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Compare","./DictionaryBase","../../../extends"],function(t,n,e,r,o){"use strict";var i=o["default"],u=void 0,a=function(t){function n(){t.apply(this,arguments),this._count=0,this._map={}}return i(n,t),n.prototype._getEntry=function(t){return this.containsKey(t)?{key:t,value:this.getValue(t)}:null},n.prototype.containsKey=function(t){return!(null===t||t===u||!this._count)&&t in this._map},n.prototype.containsValue=function(t){if(!this._count)return!1;var n=this._map,r=e.areEqual;for(var o in n)if(n.hasOwnProperty(o)&&r(n[o],t))return!0;return!1},n.prototype.getValue=function(t){return null!==t&&t!==u&&this._count?this._map[t]:u},n.prototype._setValueInternal=function(t,n){var e=this,r=e._map,o=r[t];return o!==n&&(n===u?t in r&&(delete r[t],e._count--):(r.hasOwnProperty(t)||e._count++,r[t]=n),!0)},n.prototype.importMap=function(t){var n=this;return n.handleUpdate(function(){var e=!1;for(var r in t)t.hasOwnProperty(r)&&n.setValue(r,t[r])&&(e=!0);return e})},n.prototype.toMap=function(t){var n=this,e={};if(n._count)for(var r in n._map)if(n._map.hasOwnProperty(r)){var o=n._map[r];t&&(o=t(r,o)),o!==u&&(e[r]=o)}return e},n.prototype.getKeys=function(){return Object.keys(this._map)},n.prototype.getValues=function(){if(!this._count)return[];for(var t=Object.keys(this._map),n=0,e=t.length;n<e;n++)t[n]=this._map[t[n]];return t},n.prototype.getCount=function(){return this._count},n}(r.DictionaryBase);n.StringKeyDictionary=a,Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=a});
//# sourceMappingURL=StringKeyDictionary.js.map