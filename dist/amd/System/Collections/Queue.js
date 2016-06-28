/*!
 * @author electricessence / https://github.com/electricessence/
 * Based Upon: http://referencesource.microsoft.com/#System/CompMod/system/collections/generic/queue.cs
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../Compare","./Array/Utility","../Types","../Integer","./Enumeration/EnumeratorBase","../Exceptions/NotImplementedException","../Exceptions/InvalidOperationException","../Exceptions/ArgumentOutOfRangeException","./CollectionBase","../../extends"],function(e,t,i,r,a,n,o,s,u,c,p,_){"use strict";function l(e,t){if(0>e)throw new c.ArgumentOutOfRangeException(t,e,"Must be greater than zero")}function y(e,t){n.Integer.assert(e,t),l(e,t)}var f=_["default"],d=4,h=32,v=100,m=d,E=[],g=function(e){function t(t,n){void 0===n&&(n=i.areEqual),e.call(this,null,n);var o=this;if(o._head=0,o._tail=0,o._size=0,t)if(a.Type.isNumber(t)){var s=t;y(s,"capacity"),o._array=s?r.initialize(s):E}else{var u=t;o._array=r.initialize(a.Type.isArrayLike(u)?u.length:m),o._importEntries(u)}else o._array=E;o._capacity=o._array.length}return f(t,e),t.prototype.getCount=function(){return this._size},t.prototype._addInternal=function(e){var t=this,i=t._array,r=t._size,a=t._capacity;if(r==a){var n=a*v;a+d>n&&(n=a+d),t.setCapacity(n),i=t._array,a=t._capacity}var o=t._tail;return i[o]=e,t._tail=(o+1)%a,t._size=r+1,!0},t.prototype._removeInternal=function(e,t){throw new s.NotImplementedException("ICollection<T>.remove is not implemented in Queue<T> since it would require destroying the underlying array to remove the item.")},t.prototype._clearInternal=function(){var e=this,t=e._array,i=e._head,a=e._tail,n=e._size;return a>i?r.clear(t,i,a):(r.clear(t,i,t.length-i),r.clear(t,0,a)),e._head=0,e._tail=0,e._size=0,e.trimExcess(),n},t.prototype._onDispose=function(){e.prototype._onDispose.call(this);var t=this;t._array!=E&&(t._array.length=t._capacity=0,t._array=E)},t.prototype.dump=function(e){void 0===e&&(e=1/0);var t=this,i=[];if(isFinite(e)){if(n.Integer.assertZeroOrGreater(e),0!==e)for(;e--&&t._size;)i.push(t._dequeueInternal())}else for(;t._size;)i.push(t._dequeueInternal());return t.trimExcess(),t._signalModification(),i},t.prototype.forEach=function(t){return e.prototype.forEach.call(this,t,!0)},t.prototype.setCapacity=function(e){y(e,"capacity");var t=this,i=t._array,a=t._capacity;if(e!=a){var n=t._head,o=t._tail,s=t._size;if(i!=E&&e>a&&o>n)return i.length=t._capacity=e,void t._version++;var u=r.initialize(e);s>0&&(o>n?r.copyTo(i,u,n,0,s):(r.copyTo(i,u,n,0,a-n),r.copyTo(i,u,0,a-n,o))),t._array=u,t._capacity=e,t._head=0,t._tail=s==e?0:s,t._signalModification(!0)}},t.prototype.enqueue=function(e){this.add(e)},t.prototype._dequeueInternal=function(e){void 0===e&&(e=!1);var t=this;{if(0!=t._size){var i=t._array,r=t._head,a=t._array[r];return i[r]=null,t._head=(r+1)%t._capacity,t._size--,t._incrementModified(),a}if(e)throw new u.InvalidOperationException("Cannot dequeue an empty queue.")}},t.prototype.dequeue=function(e){void 0===e&&(e=!1);var t=this;t.assertModifiable();var i=!!t._size,r=this._dequeueInternal(e);return i&&t._size<t._capacity/2&&t.trimExcess(h),t._signalModification(),r},t.prototype.tryDequeue=function(e){if(!this._size)return!1;var t=this.dequeue();return e&&e(t),!0},t.prototype._getElement=function(e){y(e,"index");var t=this;return t._array[(t._head+e)%t._capacity]},t.prototype.peek=function(){if(0==this._size)throw new u.InvalidOperationException("Cannot call peek on an empty queue.");return this._array[this._head]},t.prototype.trimExcess=function(e){var t=this,i=t._size;i<Math.floor(.9*t._capacity)&&(isNaN(e)||i>e)&&t.setCapacity(i)},t.prototype.getEnumerator=function(){var e,t,i=this;return new o.EnumeratorBase(function(){t=i._version,e=0},function(r){return i.assertVersion(t),e==i._size?r.yieldBreak():r.yieldReturn(i._getElement(e++))})},t}(p.CollectionBase);t.Queue=g,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=g});
//# sourceMappingURL=Queue.js.map