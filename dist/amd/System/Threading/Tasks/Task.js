/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","./TaskHandlerBase","../../Exceptions/ArgumentNullException","../../Lazy","../../../extends"],function(t,e,r,o,n,s){"use strict";var u=s["default"],i=function(t){function e(e){if(t.call(this),!e)throw new o.ArgumentNullException("valueFactory");this._result=new n.Lazy(e,!1)}return u(e,t),e.prototype._onExecute=function(){this._result.getValue()},e.prototype.getResult=function(){return this._result.value},e.prototype.getState=function(){var t=this._result;return t&&{status:this.getStatus(),result:t.isValueCreated?t.value:void 0,error:t.error}},e.prototype.start=function(e){0==this.getStatus()&&t.prototype.start.call(this,e)},e.prototype.runSynchronously=function(){0==this.getStatus()&&t.prototype.runSynchronously.call(this)},Object.defineProperty(e.prototype,"state",{get:function(){return this.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"result",{get:function(){return this.throwIfDisposed(),this.runSynchronously(),this.getResult()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"error",{get:function(){return this.throwIfDisposed(),this._result.error},enumerable:!0,configurable:!0}),e.prototype._onDispose=function(){t.prototype._onDispose.call(this);var e=this._result;e&&(this._result=null,e.dispose())},e}(r.TaskHandlerBase);e.Task=i,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i});
//# sourceMappingURL=Task.js.map