/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Disposable/DisposableBase","../../../extends"],function(t,e,s,i){"use strict";var n=i["default"],o=function(t){function e(){t.call(this),this._timeoutId=null,this._status=0}return n(e,t),Object.defineProperty(e.prototype,"isScheduled",{get:function(){return!!this._timeoutId},enumerable:!0,configurable:!0}),e.prototype.start=function(t){this.throwIfDisposed(),this.cancel(),this._status=1,t>0||(t=0),isFinite(t)&&(this._timeoutId=setTimeout(e._handler,t,this))},e.prototype.runSynchronously=function(){this.throwIfDisposed(),e._handler(this)},e.prototype.getStatus=function(){return this._status},Object.defineProperty(e.prototype,"status",{get:function(){return this.getStatus()},enumerable:!0,configurable:!0}),e._handler=function(t){t.cancel(),t._status=2;try{t._onExecute(),t._status=3}catch(e){t._status=5}},e.prototype._onDispose=function(){this.cancel(),this._status=null},e.prototype.cancel=function(){var t=this._timeoutId;return t?(clearTimeout(t),this._timeoutId=null,this._status=4,!0):!1},e}(s.DisposableBase);e.TaskHandlerBase=o,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o});
//# sourceMappingURL=TaskHandlerBase.js.map