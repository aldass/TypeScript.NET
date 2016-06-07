/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Although most of the following code is written from scratch, it is
 * heavily influenced by Q (https://github.com/kriskowal/q) and uses some of Q's spec.
 */
define(["require","exports","../Types","../Threading/deferImmediate","../Disposable/DisposableBase","../Exceptions/InvalidOperationException","../Exceptions/ArgumentException","../Exceptions/ArgumentNullException","../Disposable/ObjectPool","../Collections/Set","../Threading/defer","../Disposable/ObjectDisposedException","../../extends"],function(t,e,n,r,i,o,s,l,u,a,c,f,h){"use strict";function p(t){return n["default"].hasMemberOfType(t,S,n["default"].FUNCTION)}function d(t,e,n){var r=e?e(t):t;return r&&p(r)?A.wrap(r):n(r)}function v(t,e,n){try{var r=n?n(e):e;t&&t.resolve(r)}catch(i){t.reject(i)}}function w(t,e,n,r){try{var i=r?r(n):n;t&&t(i)}catch(o){e&&e(o)}}function g(t,e,n){t instanceof P?t.thenThis(e,n):t.then(e,n)}function y(){return new f.ObjectDisposedException("Promise","An underlying promise-result was disposed.")}var _=h["default"],m=void 0,b="Promise",j=b+"State",S="then",I="target",D=function(t){function e(e,n,r){t.call(this),this._state=e,this._result=n,this._error=r,this._disposableObjectName=j}return _(e,t),e.prototype._onDispose=function(){this._state=m,this._result=m,this._error=m},e.prototype.getState=function(){return this._state},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPending",{get:function(){return this.getState()===A.State.Pending},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSettled",{get:function(){return this.getState()!=A.State.Pending},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isFulfilled",{get:function(){return this.getState()===A.State.Fulfilled},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRejected",{get:function(){return this.getState()===A.State.Rejected},enumerable:!0,configurable:!0}),e.prototype.getResult=function(){return this._result},Object.defineProperty(e.prototype,"result",{get:function(){return this.throwIfDisposed(),this.getResult()},enumerable:!0,configurable:!0}),e.prototype.getError=function(){return this._error},Object.defineProperty(e.prototype,"error",{get:function(){return this.throwIfDisposed(),this.getError()},enumerable:!0,configurable:!0}),e}(i.DisposableBase);e.PromiseState=D;var P=function(t){function e(){t.call(this,A.State.Pending),this._disposableObjectName=b}return _(e,t),e.prototype.then=function(t,e){var n=this;return new A(function(r,i){n.thenThis(function(e){return w(r,i,e,t)},function(t){return e?w(r,null,t,e):i(t)})})},e.prototype.done=function(t,e){var n=this;c.defer(function(){return n.thenThis(t,e)})},e.prototype.delayFromNow=function(t){var e=this;return void 0===t&&(t=0),this.throwIfDisposed(),new A(function(n,r){c.defer(function(){e.thenThis(function(t){return n(t)},function(t){return r(t)})},t)},!0)},e.prototype.delayAfterResolve=function(t){var e=this;return void 0===t&&(t=0),this.throwIfDisposed(),this.isSettled?this.delayFromNow(t):new A(function(n,r){e.thenThis(function(e){return c.defer(function(){return n(e)},t)},function(e){return c.defer(function(){return r(e)},t)})},!0)},e.prototype["catch"]=function(t){return this.throwIfDisposed(),this.then(m,t)},e.prototype["finally"]=function(t){return this.throwIfDisposed(),this.then(t,t)},e.prototype.finallyThis=function(t){this.throwIfDisposed();var e=function(){return r.deferImmediate(t)};return this.thenThis(e,e),this},e}(D);e.PromiseBase=P;var E=function(t){function e(){t.apply(this,arguments)}return _(e,t),e.prototype.thenSynchronous=function(t,e){this.throwIfDisposed();try{switch(this.state){case A.State.Fulfilled:return t?d(this._result,t,A.resolve):this;case A.State.Rejected:return e?d(this._error,e,A.resolve):this}}catch(n){return new R(n)}throw new Error("Invalid state for a resolved promise.")},e.prototype.thenThis=function(t,e){switch(this.throwIfDisposed(),this.state){case A.State.Fulfilled:t&&t(this._result);break;case A.State.Rejected:e&&e(this._error)}return this},e}(P);e.Resolvable=E;var x=function(t){function e(e,n,r){t.call(this),this._result=n,this._error=r,this._state=e}return _(e,t),e}(E);e.Resolved=x;var O=function(t){function e(e){t.call(this,A.State.Fulfilled,e)}return _(e,t),e}(x),R=function(t){function e(e){t.call(this,A.State.Rejected,m,e)}return _(e,t),e}(x),F=function(t){function e(e){var n=this;if(t.call(this),this._target=e,!e)throw new l.ArgumentNullException(I);if(!p(e))throw new s.ArgumentException(I,"Must be a promise-like object.");e.then(function(t){n._state=A.State.Fulfilled,n._result=t,n._error=m,n._target=m},function(t){n._state=A.State.Rejected,n._error=t,n._target=m})}return _(e,t),e.prototype.thenSynchronous=function(e,n){this.throwIfDisposed();var r=this._target;return r?new A(function(t,i){g(r,function(n){return w(t,i,n,e)},function(e){return n?w(t,null,e,n):i(e)})},!0):t.prototype.thenSynchronous.call(this,e,n)},e.prototype.thenThis=function(e,n){this.throwIfDisposed();var r=this._target;return r?(g(r,e,n),this):t.prototype.thenThis.call(this,e,n)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._target=m},e}(E),A=function(t){function e(e,n){void 0===n&&(n=!1),t.call(this),e&&this.resolveUsing(e,n)}return _(e,t),e.prototype.thenSynchronous=function(n,r){if(this.throwIfDisposed(),this._state)return t.prototype.thenSynchronous.call(this,n,r);var i=new e;return(this._waiting||(this._waiting=[])).push(C.PromiseCallbacks.init(n,r,i)),i},e.prototype.thenThis=function(e,n){return this.throwIfDisposed(),this._state?t.prototype.thenThis.call(this,e,n):((this._waiting||(this._waiting=[])).push(C.PromiseCallbacks.init(e,n)),this)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._resolvedCalled=m},e.prototype.resolveUsing=function(t,n,i){var s=this;if(void 0===n&&(n=!1),void 0===i&&(i=!1),!t)throw new l.ArgumentNullException("resolver");if(this._resolvedCalled)throw new o.InvalidOperationException(".resolve() already called.");if(this.state)throw new o.InvalidOperationException("Already resolved: "+e.State[this.state]);this._resolvedCalled=!0;var u=0,a=function(t){u?console.warn(-1==u?"Rejection called multiple times":"Rejection called after fulfilled."):(u=-1,s._resolvedCalled=!1,s.reject(t))},c=function(t){u?console.warn(1==u?"Fulfill called multiple times":"Fulfill called after rejection."):(u=1,s._resolvedCalled=!1,s.resolve(t))};n?t(c,a):r.deferImmediate(function(){return t(c,a)})},e.prototype._emitDisposalRejection=function(t){var e=t.wasDisposed;return e&&this._rejectInternal(y()),e},e.prototype._resolveInternal=function(t){var n=this;if(!this.wasDisposed){for(;t instanceof P;){var r=t;if(this._emitDisposalRejection(r))return;switch(r.state){case e.State.Pending:return void r.thenSynchronous(function(t){return n._resolveInternal(t)},function(t){return n._rejectInternal(t)});case e.State.Rejected:return void this._rejectInternal(r.error);case e.State.Fulfilled:t=r.result}}if(p(t))t.then(function(t){return n._resolveInternal(t)},function(t){return n._rejectInternal(t)});else{this._state=e.State.Fulfilled,this._result=t,this._error=m;var i=this._waiting;if(i){this._waiting=m;for(var o=0,s=i;o<s.length;o++){var l=s[o],u=l.onFulfilled,a=l.promise,c=a;C.PromiseCallbacks.recycle(l),v(c,t,u)}i.length=0}}}},e.prototype._rejectInternal=function(t){if(!this.wasDisposed){this._state=e.State.Rejected,this._error=t;var n=this._waiting;if(n){this._waiting=null;for(var r=0,i=n;r<i.length;r++){var o=i[r],s=o.onRejected,l=o.promise,u=l;C.PromiseCallbacks.recycle(o),s?v(u,t,s):u.reject(t)}n.length=0}}},e.prototype.resolve=function(t,n){if(void 0===n&&(n=!1),this.throwIfDisposed(),t==this)throw new o.InvalidOperationException("Cannot resolve a promise as itself.");if(this._state){if(!n||this._state==e.State.Fulfilled&&this._result===t)return;throw new o.InvalidOperationException("Changing the fulfilled state/value of a promise is not supported.")}if(this._resolvedCalled){if(n)throw new o.InvalidOperationException(".resolve() already called.")}else this._resolveInternal(t)},e.prototype.reject=function(t,n){if(void 0===n&&(n=!1),this.throwIfDisposed(),this._state){if(!n||this._state==e.State.Rejected&&this._error===t)return;throw new o.InvalidOperationException("Changing the rejected state/value of a promise is not supported.")}if(this._resolvedCalled){if(n)throw new o.InvalidOperationException(".resolve() already called.")}else this._rejectInternal(t)},e}(E);e.Promise=A;var C;!function(t){var e;!function(t){function e(){return o||(o=new u.ObjectPool(40,n,function(t){t.onFulfilled=null,t.onRejected=null,t.promise=null}))}function n(){return{onFulfilled:null,onRejected:null,promise:null}}function r(t,n,r){var i=e().take();return i.onFulfilled=t,i.onRejected=n,i.promise=r,i}function i(t){e().add(t)}var o;t.init=r,t.recycle=i}(e=t.PromiseCallbacks||(t.PromiseCallbacks={}))}(C||(C={}));var A;!function(t){function e(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(!e&&!n.length)throw new l.ArgumentNullException("promises");var i=(Array.isArray(e)?e:[e]).concat(n);return!i.length||i.every(function(t){return!t})?new O(i):new t(function(t,e){var n=[],r=i.length;n.length=r;for(var o=new a.Set(i.map(function(t,e){return e})),s=function(){e=null,t=null,i.length=0,i=null,o.dispose(),o=null},l=function(){var e=t;e&&!o.count&&(s(),e(n))},u=function(e,r){t&&(n[r]=e,o.remove(r),l())},c=function(t){var n=e;n&&(s(),n(t))},f=function(t){var e=i[t];e?e.then(function(e){return u(e,t)},c):o.remove(t),l()},h=0;o&&r>h;h++)f(h)})}function n(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(!e&&!n.length)throw new l.ArgumentNullException("promises");var i=(Array.isArray(e)?e:[e]).concat(n);return!i.length||i.every(function(t){return!t})?new O(i):new t(function(t,e){for(var n=i.length,r=new a.Set(i.map(function(t,e){return e})),o=function(){e=null,t=null,r.dispose(),r=null},s=function(){var e=t;e&&!r.count&&(o(),e(i))},l=function(t){r&&(r.remove(t),s())},u=function(t){var e=i[t];e?e.then(function(e){return l(t)},function(e){return l(t)}):l(t)},c=0;r&&n>c;c++)u(c)})}function r(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=e&&(Array.isArray(e)?e:[e]).concat(n);if(!i||!i.length||!(i=i.filter(function(t){return null!=t})).length)throw new s.ArgumentException("Nothing to wait for.");var o=i.length;if(1==o)return u(i[0]);for(var l=0;o>l;l++){var a=i[l];if(a instanceof P&&a.isSettled)return a}return new t(function(t,e){for(var n=function(){e=null,t=null,i.length=0,i=null},r=function(t,e){t&&(n(),t(e))},o=function(e){return r(t,e)},s=function(t){return r(e,t)},l=0,u=i;l<u.length;l++){var a=u[l];if(!t)break;a.then(o,s)}})}function i(t){return p(t)?u(t):new O(t)}function o(t){return new R(t)}function u(t){if(!t)throw new l.ArgumentNullException(I);return t instanceof P?t:new F(t)}function c(t){if(!t)throw new l.ArgumentNullException(S);return new F({then:t})}!function(t){t[t.Pending=0]="Pending",t[t.Fulfilled=1]="Fulfilled",t[t.Rejected=-1]="Rejected"}(t.State||(t.State={}));var f=t.State;Object.freeze(f),t.all=e,t.waitAll=n,t.race=r,t.resolve=i,t.reject=o,t.wrap=u,t.createFrom=c}(A=e.Promise||(e.Promise={})),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=A});
//# sourceMappingURL=Promise.js.map
