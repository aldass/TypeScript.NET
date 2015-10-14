var __extends=this&&this.__extends||function(e,r){function t(){this.constructor=e}for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n]);e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)};define(["require","exports","./EnumeratorBase"],function(e,r,t){var n=function(e){function r(r){var t;e.call(this,function(){if(t=r(),t&&t.source){if(t.length&&0===t.step)throw new Error("Invalid IndexEnumerator step value (0).");var e=t.pointer;if(e){if(e!=Math.floor(e))throw new Error("Invalid IndexEnumerator pointer value ("+e+") has decimal.")}else t.pointer=0;t.pointer=e;var n=t.step;if(n){if(n!=Math.floor(n))throw new Error("Invalid IndexEnumerator step value ("+n+") has decimal.")}else t.step=1;t.step=n}},function(e){var r=t&&t.source?t.length:0;if(!r)return e.yieldBreak();var n=t.pointer;return t.pointer+=t.step,r>n&&n>=0?e.yieldReturn(t.source[n]):e.yieldBreak()},function(){t&&(t.source=null)})}return __extends(r,e),r}(t["default"]);Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n});
//# sourceMappingURL=IndexEnumerator.js.map
