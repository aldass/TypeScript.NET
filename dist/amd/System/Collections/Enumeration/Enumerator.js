/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Disposable/dispose","../../Types","./ArrayEnumerator","./IndexEnumerator","./UnsupportedEnumerableException"],function(e,r,n,t,u,i,o){"use strict";function f(e){if(e)throw new o["default"](g)}function a(e){if(Array.isArray(e)||t["default"].isString(e)){var r=e.length;if(isFinite(r)){if(r>65535)return new Array(r);var n=[];return n.length=r,n}}return[]}function s(e){if(!e)return v;if(Array.isArray(e))return new u["default"](e);if(t["default"].isArrayLike(e))return new i["default"](function(){return{source:e,length:e.length,pointer:0,step:1}});if(!t["default"].isPrimitive(e)&&l(e))return e.getEnumerator();throw new Error("Unknown enumerable.")}function l(e){return t["default"].hasMemberOfType(e,"getEnumerator",t["default"].FUNCTION)}function c(e){return t["default"].isArrayLike(e)||l(e)}function p(e){return t["default"].hasMemberOfType(e,"moveNext",t["default"].FUNCTION)}function d(e,r){if(e!==h&&null!==e){if(t["default"].isArrayLike(e)){f(!isFinite(e.length));for(var u=0;u<e.length&&r(e[u],u)!==!1;u++);return!0}if(p(e)){f(e.isEndless);for(var i=0;e.moveNext()&&r(e.current,i++)!==!1;);return!0}return l(e)?(f(e.isEndless),n.using(e.getEnumerator(),function(e){return d(e,r)}),!0):!1}}function y(e){if(e===E)return[];if(Array.isArray(e))return e.slice();var r=a(e);if(!d(e,function(e,n){r[n]=e}))throw new o["default"];return r}function m(e,r){var n=a(e);if(!d(e,function(e,t){n[t]=r(e)}))throw new o["default"];return n}var h=void 0,E="",g="Cannot call forEach on an endless enumerable. Would result in an infinite loop that could hang the current process.";r.throwIfEndless=f;var b=function(){function e(){}return Object.defineProperty(e.prototype,"current",{get:function(){return h},enumerable:!0,configurable:!0}),e.prototype.moveNext=function(){return!1},e.prototype.nextValue=function(){return h},e.prototype.next=function(){return{value:h,done:!0}},e.prototype.reset=function(){},e.prototype.dispose=function(){},Object.defineProperty(e.prototype,"isEndless",{get:function(){return!1},enumerable:!0,configurable:!0}),e}(),v=new b;Object.freeze(v),r.empty=v,r.from=s,r.isEnumerable=l,r.isEnumerableOrArrayLike=c,r.isEnumerator=p,r.forEach=d,r.toArray=y,r.map=m});
//# sourceMappingURL=Enumerator.js.map