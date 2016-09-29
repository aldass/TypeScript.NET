/*!
 * @author electricessence / https://github.com/electricessence/
 * Original: http://linqjs.codeplex.com/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../System/Compare","../System/Collections/Array/Compare","../System/Collections/Array/Utility","../System/Collections/Enumeration/Enumerator","../System/Collections/Enumeration/EmptyEnumerator","../System/Types","../System/Integer","../System/Functions","../System/Collections/Enumeration/ArrayEnumerator","../System/Collections/Enumeration/EnumeratorBase","../System/Collections/Dictionaries/Dictionary","../System/Collections/Queue","../System/Disposable/dispose","../System/Disposable/DisposableBase","../System/Collections/Enumeration/UnsupportedEnumerableException","../System/Disposable/ObjectDisposedException","../System/Collections/Sorting/KeySortedContext","../System/Exceptions/ArgumentNullException","../System/Exceptions/ArgumentOutOfRangeException","../extends"],function(t,e,n,r,o,i,u,s,a,c,f,p,l,y,d,h,m,v,E,w,g,N){"use strict";function x(){return u.EmptyEnumerator}function I(t,e){if(e){if(!e.moveNext())return d.dispose(e),null;t.enqueue(e)}return e}function B(t,e){void 0===e&&(e=null);var n=new E.KeySortedContext(e,t.keySelector,t.order,t.comparer);return t.parent?B(t.parent,n):n}function D(t){if(t)throw new v.ObjectDisposedException("Enumerable")}var R=N["default"],b={},_=void 0,A=null,O=function(t){return 0},k=function(t){function e(){t.apply(this,arguments)}return R(e,t),e.prototype.Greater=function(t,e){return t>e?t:e},e.prototype.Lesser=function(t,e){return t<e?t:e},e}(c.Functions),S=new k;Object.freeze(S);var F=function(t){function e(e,n){t.call(this,n),this._enumeratorFactory=e,this._isEndless=!0}return R(e,t),Object.defineProperty(e.prototype,"isEndless",{get:function(){return this._isEndless},enumerable:!0,configurable:!0}),e.prototype.getEnumerator=function(){return this.throwIfDisposed(),this._enumeratorFactory()},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._enumeratorFactory=null},e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(function(){return t.getEnumerator()})},e.prototype.doAction=function(t,e,n){void 0===n&&(n=this.isEndless);var r=this,o=n||void 0,i=!r.throwIfDisposed();return new T(function(){var n,u=0;return new p.EnumeratorBase(function(){D(i),e&&e(),u=0,n=r.getEnumerator()},function(e){for(D(i);n.moveNext();){var r=t(n.current,u++);if(r===!1||0===r)return e.yieldBreak();if(2!==r)return e.yieldReturn(n.current)}return!1},function(){d.dispose(n)},o)},function(){i=!0},o)},e.prototype.force=function(){this.throwIfDisposed(),this.doAction(O).getEnumerator().moveNext()},e.prototype.skip=function(t){var n=this;return n.throwIfDisposed(),isFinite(t)?(a.Integer.assert(t,"count"),this.doAction(function(e,n){return n<t?2:1})):new e(x)},e.prototype.take=function(t){if(!(t>0))return T.empty();var e=this;if(e.throwIfDisposed(),!isFinite(t))throw new g.ArgumentOutOfRangeException("count",t,"Must be finite.");return a.Integer.assert(t,"count"),e.doAction(function(e,n){return n<t},null,!1)},e.prototype.elementAt=function(t){var e=this.elementAtOrDefault(t,b);if(e===b)throw new g.ArgumentOutOfRangeException("index",t,"is greater than or equal to the number of elements in source");return e},e.prototype.elementAtOrDefault=function(t,e){var n=this;n.throwIfDisposed(),a.Integer.assertZeroOrGreater(t,"index");var r=t;return d.using(this.getEnumerator(),function(t){for(var n=0;t.moveNext();){if(n==r)return t.current;n++}return e})},e.prototype.first=function(){var t=this.firstOrDefault(b);if(t===b)throw new Error("first:The sequence is empty.");return t},e.prototype.firstOrDefault=function(t){var e=this;return e.throwIfDisposed(),d.using(this.getEnumerator(),function(e){return e.moveNext()?e.current:t})},e.prototype.single=function(){var t=this;return t.throwIfDisposed(),d.using(this.getEnumerator(),function(t){if(t.moveNext()){var e=t.current;if(!t.moveNext())return e;throw new Error("single:sequence contains more than one element.")}throw new Error("single:The sequence is empty.")})},e.prototype.singleOrDefault=function(t){var e=this;return e.throwIfDisposed(),d.using(this.getEnumerator(),function(e){if(e.moveNext()){var n=e.current;if(!e.moveNext())return n}return t})},e.prototype.any=function(){var t=this;return t.throwIfDisposed(),d.using(this.getEnumerator(),function(t){return t.moveNext()})},e.prototype.isEmpty=function(){return!this.any()},e.prototype.traverseBreadthFirst=function(t,e){void 0===e&&(e=S.Identity);var n=this,r=n._isEndless;return new T(function(){var o,i,u,s=0;return new p.EnumeratorBase(function(){s=0,i=[],u=0,o=n.getEnumerator()},function(n){for(;;){if(o.moveNext())return i[u++]=o.current,n.yieldReturn(e(o.current,s));if(!u)return n.yieldBreak();var r=T.from(i).selectMany(t);if(!r.any())return n.yieldBreak();s++,i=[],u=0,o.dispose(),o=r.getEnumerator()}},function(){d.dispose(o),i.length=0},r)},null,r)},e.prototype.traverseDepthFirst=function(t,e){void 0===e&&(e=S.Identity);var n=this,r=n._isEndless;return new T(function(){var o,i,s=[];return new p.EnumeratorBase(function(){o=n.getEnumerator(),i=0},function(n){for(;;){if(o.moveNext()){var r=e(o.current,i);s[i++]=o;var a=T.fromAny(t(o.current));return o=a?a.getEnumerator():u.EmptyEnumerator,n.yieldReturn(r)}if(0==i)return!1;o.dispose(),o=s[--i],s.length=i}},function(){try{d.dispose(o)}finally{d.dispose.these(s)}},r)},null,r)},e.prototype.flatten=function(){var t=this,e=t._isEndless;return new T(function(){var n,r=null;return new p.EnumeratorBase(function(){n=t.getEnumerator()},function(t){for(;;){if(r){if(r.moveNext())return t.yieldReturn(r.current);r.dispose(),r=null}if(n.moveNext()){var e=n.current,o=!s.Type.isString(e)&&T.fromAny(e);if(o){r=o.selectMany(S.Identity).flatten().getEnumerator();continue}return t.yieldReturn(e)}return t.yieldBreak()}},function(){d.dispose(n,r)},e)},null,e)},e.prototype.pairwise=function(t){var e=this,n=e._isEndless;return new T(function(){var r;return new p.EnumeratorBase(function(){r=e.getEnumerator(),r.moveNext()},function(e){var n=r.current;return r.moveNext()&&e.yieldReturn(t(n,r.current))},function(){d.dispose(r)},n)},null,n)},e.prototype.scan=function(t,e){var n=this,r=e!==_;return new T(function(){var o,i,u;return new p.EnumeratorBase(function(){o=n.getEnumerator(),u=!0},function(n){return u?(u=!1,r?n.yieldReturn(i=e):o.moveNext()&&n.yieldReturn(i=o.current)):!!o.moveNext()&&n.yieldReturn(i=t(i,o.current))},function(){d.dispose(o)},n._isEndless)},null,n._isEndless)},e.prototype.select=function(t){var e=this,n=!e.throwIfDisposed();return new T(function(){var r,o=0;return new p.EnumeratorBase(function(){D(n),o=0,r=e.getEnumerator()},function(e){return D(n),r.moveNext()?e.yieldReturn(t(r.current,o++)):e.yieldBreak()},function(){d.dispose(r)},e._isEndless)},function(){n=!0},e._isEndless)},e.prototype._selectMany=function(t,e){var n=this,r=n._isEndless;return e||(e=function(t,e){return e}),new T(function(){var o,u,s=0;return new p.EnumeratorBase(function(){o=n.getEnumerator(),u=_,s=0},function(n){if(u===_&&!o.moveNext())return!1;do{if(!u){var r=t(o.current,s++);if(!r)continue;u=i.from(r)}if(u.moveNext())return n.yieldReturn(e(o.current,u.current));u.dispose(),u=null}while(o.moveNext());return!1},function(){d.dispose(o,u),o=A,u=null},r)},null,r)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype._choose=function(t){var e=this,n=!e.throwIfDisposed(),r=e._isEndless;return new T(function(){var o,i=0;return new p.EnumeratorBase(function(){D(n),i=0,o=e.getEnumerator()},function(e){for(D(n);o.moveNext();){var r=t(o.current,i++);if(null!==r&&r!==_)return e.yieldReturn(r)}return!1},function(){d.dispose(o)},r)},function(){n=!0},r)},e.prototype.choose=function(t){return void 0===t&&(t=S.Identity),this._choose(t)},e.prototype.where=function(t){var e=this,n=!e.throwIfDisposed();return new T(function(){var r,o=0;return new p.EnumeratorBase(function(){D(n),o=0,r=e.getEnumerator()},function(e){for(D(n);r.moveNext();){var i=r.current;if(t(i,o++))return e.yieldReturn(i)}return!1},function(){d.dispose(r)},e._isEndless)},function(){n=!0},e._isEndless)},e.prototype.ofType=function(t){var e;switch(t){case Number:e=s.Type.NUMBER;break;case String:e=s.Type.STRING;break;case Boolean:e=s.Type.BOOLEAN;break;case Function:e=s.Type.FUNCTION;break;default:return this.where(function(e){return e instanceof t})}return this.choose().where(function(t){return typeof t===e})},e.prototype.except=function(t,e){var n=this,r=!n.throwIfDisposed(),o=n._isEndless;return new T(function(){var u,s;return new p.EnumeratorBase(function(){D(r),u=n.getEnumerator(),s=new l.Dictionary(e),t&&i.forEach(t,function(t){s.addByKeyValue(t,!0)})},function(t){for(D(r);u.moveNext();){var e=u.current;if(!s.containsKey(e))return s.addByKeyValue(e,!0),t.yieldReturn(e)}return!1},function(){d.dispose(u),s.clear()},o)},function(){r=!0},o)},e.prototype.distinct=function(t){return this.except(A,t)},e.prototype.distinctUntilChanged=function(t){void 0===t&&(t=S.Identity);var e=this,r=!e.throwIfDisposed(),o=e._isEndless;return new T(function(){var i,u,s=!0;return new p.EnumeratorBase(function(){D(r),i=e.getEnumerator()},function(e){for(D(r);i.moveNext();){var o=t(i.current);if(s)s=!1;else if(n.areEqual(u,o))continue;return u=o,e.yieldReturn(i.current)}return!1},function(){d.dispose(i)},o)},function(){r=!0},o)},e.prototype.defaultIfEmpty=function(t){var e=this,n=!e.throwIfDisposed(),r=e._isEndless;return new T(function(){var o,i;return new p.EnumeratorBase(function(){i=!0,D(n),o=e.getEnumerator()},function(e){return D(n),o.moveNext()?(i=!1,e.yieldReturn(o.current)):!!i&&(i=!1,e.yieldReturn(t))},function(){d.dispose(o)},r)},null,r)},e.prototype.zip=function(t,e){var n=this;return n.throwIfDisposed(),new T(function(){var r,o,u=0;return new p.EnumeratorBase(function(){u=0,r=n.getEnumerator(),o=i.from(t)},function(t){return r.moveNext()&&o.moveNext()&&t.yieldReturn(e(r.current,o.current,u++))},function(){d.dispose(r,o)})})},e.prototype.zipMultiple=function(t,e){var n=this;return n.throwIfDisposed(),t.length?new T(function(){var r,o,u,s=0;return new p.EnumeratorBase(function(){r=new y.Queue(t),s=0,o=n.getEnumerator(),u=A},function(t){if(o.moveNext())for(;;){for(;!u;){if(!r.count)return t.yieldBreak();var n=r.dequeue();n&&(u=i.from(n))}if(u.moveNext())return t.yieldReturn(e(o.current,u.current,s++));u.dispose(),u=A}return t.yieldBreak()},function(){d.dispose(o,r)})}):T.empty()},e.prototype.join=function(t,e,n,r,o){void 0===o&&(o=S.Identity);var i=this;return new T(function(){var u,s,a,c=0;return new p.EnumeratorBase(function(){u=i.getEnumerator(),s=T.from(t).toLookup(n,S.Identity,o)},function(t){for(;;){if(a){var n=a[c++];if(n!==_)return t.yieldReturn(r(u.current,n));a=null,c=0}if(!u.moveNext())return t.yieldBreak();var o=e(u.current);a=s.get(o)}},function(){d.dispose(u),a=null,u=A,s=A})})},e.prototype.groupJoin=function(t,e,n,r,o){void 0===o&&(o=S.Identity);var i=this;return new T(function(){var u,s;return new p.EnumeratorBase(function(){u=i.getEnumerator(),s=T.from(t).toLookup(n,S.Identity,o)},function(t){return u.moveNext()&&t.yieldReturn(r(u.current,s.get(e(u.current))))},function(){d.dispose(u),u=A,s=A})})},e.prototype.merge=function(t){var e=this,n=e._isEndless;return t&&0!=t.length?new T(function(){var r,o;return new p.EnumeratorBase(function(){r=e.getEnumerator(),o=new y.Queue(t)},function(t){for(;;){for(;!r&&o.count;)r=i.from(o.dequeue());if(r&&r.moveNext())return t.yieldReturn(r.current);{if(!r)return t.yieldBreak();r.dispose(),r=A}}},function(){d.dispose(r,o)},n)},null,n):e},e.prototype.concat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return this.merge(t)},e.prototype.union=function(t,e){void 0===e&&(e=S.Identity);var n=this,r=n._isEndless;return new T(function(){var o,u,s;return new p.EnumeratorBase(function(){o=n.getEnumerator(),s=new l.Dictionary(e)},function(e){var n;if(u===_){for(;o.moveNext();)if(n=o.current,!s.containsKey(n))return s.addByKeyValue(n,null),e.yieldReturn(n);u=i.from(t)}for(;u.moveNext();)if(n=u.current,!s.containsKey(n))return s.addByKeyValue(n,null),e.yieldReturn(n);return!1},function(){d.dispose(o,u)},r)},null,r)},e.prototype.insertAt=function(t,e){a.Integer.assertZeroOrGreater(t,"index");var n=t,r=this;r.throwIfDisposed();var o=r._isEndless;return new T(function(){var t,u,s=0,a=!1;return new p.EnumeratorBase(function(){s=0,t=r.getEnumerator(),u=i.from(e),a=!1},function(e){return s==n&&(a=!0,u.moveNext())?e.yieldReturn(u.current):t.moveNext()?(s++,e.yieldReturn(t.current)):!a&&u.moveNext()&&e.yieldReturn(u.current)},function(){d.dispose(t,u)},o)},null,o)},e.prototype.alternateMultiple=function(t){var e=this,n=e._isEndless;return new T(function(){var r,o,i,u;return new p.EnumeratorBase(function(){u=new f.ArrayEnumerator(T.toArray(t)),i=e.getEnumerator();var n=i.moveNext();o=n?1:0,n&&(r=i.current)},function(t){switch(o){case 0:return t.yieldBreak();case 2:if(u.moveNext())return t.yieldReturn(u.current);u.reset(),o=1}var e=r,n=i.moveNext();return o=n?2:0,n&&(r=i.current),t.yieldReturn(e)},function(){d.dispose(i,u)},n)},null,n)},e.prototype.alternateSingle=function(t){return this.alternateMultiple(T.make(t))},e.prototype.alternate=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return this.alternateMultiple(t)},e.prototype.catchError=function(t){var e=this,n=!e.throwIfDisposed();return new T(function(){var r;return new p.EnumeratorBase(function(){try{D(n),r=e.getEnumerator()}catch(t){}},function(e){try{if(D(n),r.moveNext())return e.yieldReturn(r.current)}catch(o){t(o)}return!1},function(){d.dispose(r)})})},e.prototype.finallyAction=function(t){var e=this,n=!e.throwIfDisposed();return new T(function(){var r;return new p.EnumeratorBase(function(){D(n),r=e.getEnumerator()},function(t){return D(n),!!r.moveNext()&&t.yieldReturn(r.current)},function(){try{d.dispose(r)}finally{t()}})})},e.prototype.buffer=function(t){if(t<1||!isFinite(t))throw new Error("Invalid buffer size.");a.Integer.assert(t,"size");var e,n=this,r=n._isEndless;return new T(function(){var i;return new p.EnumeratorBase(function(){i=n.getEnumerator()},function(n){var r=o.initialize(t);for(e=0;e<t&&i.moveNext();)r[e++]=i.current;return r.length=e,!!e&&n.yieldReturn(r)},function(){d.dispose(i)},r)},null,r)},e.prototype.share=function(){var t=this;t.throwIfDisposed();var e;return new T(function(){return e||(e=t.getEnumerator())},function(){d.dispose(e)},t._isEndless)},e}(h.DisposableBase);e.InfiniteEnumerable=F;var T=function(t){function e(e,n,r){t.call(this,e,n),this._isEndless=r}return R(e,t),e.from=function(t){var n=e.fromAny(t);if(!n)throw new m.UnsupportedEnumerableException;return n},e.fromAny=function(t,n){if(s.Type.isObject(t)||s.Type.isString(t)){if(t instanceof e)return t;if(s.Type.isArrayLike(t))return new M(t);if(i.isEnumerable(t))return new e(function(){return t.getEnumerator()},null,t.isEndless)}return n},e.fromOrEmpty=function(t){return e.fromAny(t)||e.empty()},e.toArray=function(t){return t instanceof e?t.toArray():i.toArray(t)},e.choice=function(t){var e=t&&t.length;if(!e||!isFinite(e))throw new g.ArgumentOutOfRangeException("length",length);return new F(function(){return new p.EnumeratorBase(null,function(e){return e.yieldReturn(a.Integer.random.select(t))},(!0))})},e.chooseFrom=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];return e.choice(t)},e.cycle=function(t){var e=t&&t.length;if(!e||!isFinite(e))throw new g.ArgumentOutOfRangeException("length",length);return new F(function(){var e=0;return new p.EnumeratorBase(function(){e=0},function(n){return e>=t.length&&(e=0),n.yieldReturn(t[e++])},(!0))})},e.cycleThrough=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];return e.cycle(t)},e.empty=function(){return new q(x)},e.repeat=function(t,n){return void 0===n&&(n=1/0),n>0?isFinite(n)&&a.Integer.assert(n,"count")?new q(function(){var e=n,r=0;return new p.EnumeratorBase(function(){r=0},function(n){return r++<e&&n.yieldReturn(t)},null,(!1))}):new e(function(){return new p.EnumeratorBase(null,function(e){return e.yieldReturn(t)},(!0))}):e.empty()},e.repeatWithFinalize=function(t,e){return new F(function(){var n;return new p.EnumeratorBase(function(){n=t()},function(t){return t.yieldReturn(n)},function(){e(n)},(!0))})},e.make=function(t){return e.repeat(t,1)},e.range=function(t,n,r){if(void 0===r&&(r=1),!isFinite(t))throw new g.ArgumentOutOfRangeException("start",t,"Must be a finite number.");if(!(n>0))return e.empty();if(!r)throw new g.ArgumentOutOfRangeException("step",r,"Must be a valid value");if(!isFinite(r))throw new g.ArgumentOutOfRangeException("step",r,"Must be a finite number.");return a.Integer.assert(n,"count"),new q(function(){var e,o=n,i=0;return new p.EnumeratorBase(function(){i=0,e=t},function(t){var u=i++<o&&t.yieldReturn(e);return u&&i<n&&(e+=r),u},(!1))})},e.rangeDown=function(t,n,r){return void 0===r&&(r=1),r=Math.abs(r)*-1,e.range(t,n,r)},e.toInfinity=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=1),!isFinite(t))throw new g.ArgumentOutOfRangeException("start",t,"Must be a finite number.");if(!e)throw new g.ArgumentOutOfRangeException("step",e,"Must be a valid value");if(!isFinite(e))throw new g.ArgumentOutOfRangeException("step",e,"Must be a finite number.");return new F(function(){var n;return new p.EnumeratorBase(function(){n=t},function(t){var r=n;return n+=e,t.yieldReturn(r)},(!0))})},e.toNegativeInfinity=function(t,n){return void 0===t&&(t=0),void 0===n&&(n=1),e.toInfinity(t,-n)},e.rangeTo=function(t,e,n){if(void 0===n&&(n=1),isNaN(e)||!isFinite(e))throw new g.ArgumentOutOfRangeException("to",e,"Must be a finite number.");if(n&&!isFinite(n))throw new g.ArgumentOutOfRangeException("step",n,"Must be a finite non-zero number.");return n=Math.abs(n),new q(function(){var r;return new p.EnumeratorBase(function(){r=t},t<e?function(t){var o=r<=e&&t.yieldReturn(r);return o&&(r+=n),o}:function(t){var o=r>=e&&t.yieldReturn(r);return o&&(r-=n),o},(!1))})},e.matches=function(t,e,n){if(void 0===n&&(n=""),null===t||t===_)throw new w.ArgumentNullException("input");var r=typeof t;if(r!=s.Type.STRING)throw new Error("Cannot exec RegExp matches of type '"+r+"'.");return e instanceof RegExp&&(n+=e.ignoreCase?"i":"",n+=e.multiline?"m":"",e=e.source),n.indexOf("g")===-1&&(n+="g"),new q(function(){var r;return new p.EnumeratorBase(function(){r=new RegExp(e,n)},function(e){var n=r.exec(t);return null!==n&&e.yieldReturn(n)})})},e.generate=function(t,n){return void 0===n&&(n=1/0),isNaN(n)||n<=0?e.empty():isFinite(n)&&a.Integer.assert(n,"count")?new q(function(){var e=n,r=0;return new p.EnumeratorBase(function(){r=0},function(n){var o=r++;return o<e&&n.yieldReturn(t(o))},(!1))}):new F(function(){var e=0;return new p.EnumeratorBase(function(){e=0},function(n){return n.yieldReturn(t(e++))},(!0))})},e.unfold=function(t,e,n){return void 0===n&&(n=!1),new F(function(){var r,o,i=0;return new p.EnumeratorBase(function(){i=0,r=t,o=!n},function(t){var n=i++;return o?o=!1:r=e(r,n),t.yieldReturn(r)},(!0))})},e.forEach=function(t,e,n){return void 0===n&&(n=1/0),i.forEach(t,e,n)},e.map=function(t,e){return i.map(t,e)},e.max=function(t){var e=t.takeUntil(function(t){return t==+(1/0)},!0).aggregate(S.Greater);return e===_?NaN:e},e.min=function(t){var e=t.takeUntil(function(t){return t==-(1/0)},!0).aggregate(S.Lesser);return e===_?NaN:e},e.weave=function(t){if(!t)throw new w.ArgumentNullException("enumerables");return new e(function(){var e,n,r;return new p.EnumeratorBase(function(){r=0,e=new y.Queue,n=i.from(t)},function(t){var r=null;if(n){for(;!r&&n.moveNext();){var o=n.current;r=I(e,o?i.from(o):A)}r||(n=null)}for(;!r&&e.count;)r=I(e,e.dequeue());return r?t.yieldReturn(r.current):t.yieldBreak()},function(){d.dispose.these(e.dump()),d.dispose(n,e),n=null,e=A})})},e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(function(){return t.getEnumerator()})},e.prototype.skipWhile=function(t){return this.throwIfDisposed(),this.doAction(function(e,n){return t(e,n)?2:1})},e.prototype.takeWhile=function(t){if(this.throwIfDisposed(),!t)throw new w.ArgumentNullException("predicate");return this.doAction(function(e,n){return t(e,n)?1:0},null,null)},e.prototype.takeUntil=function(t,e){if(this.throwIfDisposed(),!t)throw new w.ArgumentNullException("predicate");if(!e)return this.doAction(function(e,n){return t(e,n)?0:1},null,null);var n=!1;return this.doAction(function(e,r){return n?0:(n=t(e,r),1)},function(){n=!1},null)},e.prototype.forEach=function(t){var e=this;e.throwIfDisposed(),i.throwIfEndless(e.isEndless);var n=0;d.using(e.getEnumerator(),function(r){for(i.throwIfEndless(r.isEndless);e.throwIfDisposed()&&r.moveNext()&&t(r.current,n++)!==!1;);})},e.prototype.toArray=function(t){return t?this.where(t).toArray():this.copyTo([])},e.prototype.copyTo=function(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=1/0),this.throwIfDisposed(),!t)throw new w.ArgumentNullException("target");return a.Integer.assertZeroOrGreater(e),i.forEach(this,function(n,r){t[r+e]=n},n),t},e.prototype.toLookup=function(t,e,n){void 0===e&&(e=S.Identity),void 0===n&&(n=S.Identity);var r=new l.Dictionary(n);return this.forEach(function(n){var o=t(n),i=e(n),u=r.getValue(o);u!==_?u.push(i):r.addByKeyValue(o,[i])}),new K(r)},e.prototype.toMap=function(t,e){var n={};return this.forEach(function(r,o){n[t(r,o)]=e(r,o)}),n},e.prototype.toDictionary=function(t,e,n){void 0===n&&(n=S.Identity);var r=new l.Dictionary(n);return this.forEach(function(n,o){return r.addByKeyValue(t(n,o),e(n,o))}),r},e.prototype.toJoinedString=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=S.Identity),this.select(e).toArray().join(t)},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var n=this;if(!(t>0))return n;if(!isFinite(t))return e.empty();a.Integer.assert(t,"count");var r=t;return new e(function(){var t,e;return new p.EnumeratorBase(function(){t=n.getEnumerator(),e=new y.Queue},function(n){for(;t.moveNext();)if(e.enqueue(t.current),e.count>r)return n.yieldReturn(e.dequeue());return!1},function(){d.dispose(t,e)})})},e.prototype.skipToLast=function(t){if(!(t>0))return e.empty();var n=this;return isFinite(t)?(a.Integer.assert(t,"count"),n.reverse().take(t).reverse()):n},e.prototype.select=function(e){return t.prototype.select.call(this,e)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype.choose=function(t){return void 0===t&&(t=S.Identity),this._choose(t)},e.prototype.reverse=function(){var t=this,n=!t.throwIfDisposed();return i.throwIfEndless(t._isEndless),new e(function(){var e,r=0;return new p.EnumeratorBase(function(){D(n),e=t.toArray(),r=e.length},function(t){return!!r&&t.yieldReturn(e[--r])},function(){e.length=0})},function(){n=!0})},e.prototype.shuffle=function(){var t=this,n=!t.throwIfDisposed();return i.throwIfEndless(t._isEndless),new e(function(){var e,r,o;return new p.EnumeratorBase(function(){D(n),e=t.toArray(),r=o=e.length},function(t){if(!o)return t.yieldBreak();var n=a.Integer.random(o),r=e[n];return e[n]=e[--o],e[o]=A,o%32==0&&(e.length=o),t.yieldReturn(r)},function(){e.length=0})},function(){n=!0})},e.prototype.count=function(t){var e=0;return this.forEach(t?function(n,r){t(n,r)&&++e}:function(){++e}),e},e.prototype.all=function(t){if(!t)throw new w.ArgumentNullException("predicate");var e=!0;return this.forEach(function(n,r){if(!t(n,r))return e=!1,!1}),e},e.prototype.every=function(t){return this.all(t)},e.prototype.any=function(e){if(!e)return t.prototype.any.call(this);var n=!1;return this.forEach(function(t,r){return n=e(t,r),!n}),n},e.prototype.some=function(t){return this.any(t)},e.prototype.contains=function(t,e){return e?this.any(function(n){return e(n)===e(t)}):this.any(function(e){return e===t})},e.prototype.indexOf=function(t,e){var r=-1;return this.forEach(e?function(o,i){if(n.areEqual(e(o,i),e(t,i),!0))return r=i,!1}:function(e,o){if(n.areEqual(e,t,!0))return r=o,!1}),r},e.prototype.lastIndexOf=function(t,e){var r=-1;return this.forEach(e?function(o,i){n.areEqual(e(o,i),e(t,i),!0)&&(r=i)}:function(e,o){n.areEqual(e,t,!0)&&(r=o)}),r},e.prototype.intersect=function(t,n){var r=this,o=r.isEndless;return new e(function(){var e,u,s;return new p.EnumeratorBase(function(){e=r.getEnumerator(),u=new l.Dictionary(n),s=new l.Dictionary(n),i.forEach(t,function(t){u.addByKeyValue(t,!0)})},function(t){for(;e.moveNext();){var n=e.current;if(!s.containsKey(n)&&u.containsKey(n))return s.addByKeyValue(n,!0),t.yieldReturn(n)}return t.yieldBreak()},function(){d.dispose(e,u,s)},o)},null,o)},e.prototype.sequenceEqual=function(t,e){return void 0===e&&(e=n.areEqual),d.using(this.getEnumerator(),function(n){return d.using(i.from(t),function(t){for(i.throwIfEndless(n.isEndless&&t.isEndless);n.moveNext();)if(!t.moveNext()||!e(n.current,t.current))return!1;return!t.moveNext()})})},e.prototype.ofType=function(e){return t.prototype.ofType.call(this,e)},e.prototype.orderBy=function(t){return void 0===t&&(t=S.Identity),new L(this,t,1)},e.prototype.orderUsing=function(t){return new L(this,null,1,null,t)},e.prototype.orderUsingReversed=function(t){return new L(this,null,(-1),null,t)},e.prototype.orderByDescending=function(t){return void 0===t&&(t=S.Identity),new L(this,t,(-1))},e.prototype.buffer=function(e){return t.prototype.buffer.call(this,e)},e.prototype.groupBy=function(t,n,r){var o=this;return n||(n=S.Identity),new e(function(){return o.toLookup(t,n,r).getEnumerator()})},e.prototype.partitionBy=function(t,n,r,o){void 0===r&&(r=function(t,e){return new C(t,e)}),void 0===o&&(o=S.Identity);var i=this;return n||(n=S.Identity),new e(function(){var e,u,s,a,c;return new p.EnumeratorBase(function(){if(e=i.getEnumerator(),e.moveNext()){var r=e.current;u=t(r),s=o(u),a=[n(r)],c=1}else a=null},function(i){if(!a)return i.yieldBreak();for(var f,p;(f=e.moveNext())&&(p=e.current,s===o(t(p)));)a[c++]=n(p);var l=r(u,a);return f?(p=e.current,u=t(p),s=o(u),a=[n(p)],c=1):a=null,i.yieldReturn(l)},function(){d.dispose(e),a=null})})},e.prototype.aggregate=function(t,e){return this.scan(t,e).lastOrDefault()},e.prototype.average=function(t){void 0===t&&(t=s.Type.numberOrNaN);var e=0,n=this.sum(function(n,r){return e++,t(n,r)});return isNaN(n)||!e?NaN:n/e},e.prototype.max=function(){return this.aggregate(S.Greater)},e.prototype.min=function(){return this.aggregate(S.Lesser)},e.prototype.maxBy=function(t){return void 0===t&&(t=S.Identity),this.aggregate(function(e,n){return t(e)>t(n)?e:n})},e.prototype.minBy=function(t){return void 0===t&&(t=S.Identity),this.aggregate(function(e,n){return t(e)<t(n)?e:n})},e.prototype.sum=function(t){void 0===t&&(t=s.Type.numberOrNaN);var e=0,n=0;return this.forEach(function(r){var o=t(r);return isNaN(o)?(e=NaN,!1):void(isFinite(o)?e+=o:n+=o>0?1:-1)}),isNaN(e)?NaN:n?n*(1/0):e},e.prototype.product=function(t){void 0===t&&(t=s.Type.numberOrNaN);var e=1,n=!1;return this.forEach(function(r,o){n=!0;var i=t(r,o);return isNaN(i)?(e=NaN,!1):0==i?(e=0,!1):void(e*=i)}),n&&isNaN(e)?NaN:e},e.prototype.quotient=function(t){void 0===t&&(t=s.Type.numberOrNaN);var e=0,n=NaN;return this.forEach(function(r,o){var i=t(r,o);if(e++,1===e)n=i;else{if(isNaN(i)||0===i||!isFinite(i))return n=NaN,!1;n/=i}}),1===e&&(n=NaN),n},e.prototype.last=function(){var t=this;t.throwIfDisposed();var e=_,n=!1;if(t.forEach(function(t){n=!0,e=t}),!n)throw new Error("last:No element satisfies the condition.");return e},e.prototype.lastOrDefault=function(t){var e=this;e.throwIfDisposed();var n=_,r=!1;return e.forEach(function(t){r=!0,n=t}),r?n:t},e.prototype.memoize=function(){var t,n,r=this,o=!r.throwIfDisposed();return new e(function(){var e=0;return new p.EnumeratorBase(function(){D(o),n||(n=r.getEnumerator()),t||(t=[]),e=0},function(r){D(o);var i=e++;return i>=t.length?!!n.moveNext()&&r.yieldReturn(t[i]=n.current):r.yieldReturn(t[i])})},function(){o=!0,t&&(t.length=0),t=A,d.dispose(n),n=A})},e}(F);e.Enumerable=T;var q=function(t){function e(e,n){t.call(this,e,n,!1)}return R(e,t),e}(T);e.FiniteEnumerable=q;var M=function(t){function e(e){t.call(this,function(){return n.throwIfDisposed(),new f.ArrayEnumerator(function(){return n.throwIfDisposed("The underlying ArrayEnumerable was disposed.","ArrayEnumerator"),n._source})});var n=this;n._disposableObjectName="ArrayEnumerable",n._source=e}return R(e,t),e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._source=A},Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),e.prototype.toArray=function(){var t=this;return t.throwIfDisposed(),i.toArray(t._source)},e.prototype.asEnumerable=function(){return new e(this._source)},e.prototype.forEach=function(t,e){void 0===e&&(e=1/0);var n=this;return n.throwIfDisposed(),i.forEach(n._source,t,e)},e.prototype.any=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r.length;return!!o&&(!e||t.prototype.any.call(this,e))},e.prototype.count=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r.length;return o&&(e?t.prototype.count.call(this,e):o)},e.prototype.elementAtOrDefault=function(t,e){var n=this;n.throwIfDisposed(),a.Integer.assertZeroOrGreater(t,"index");var r=n._source;return t<r.length?r[t]:e},e.prototype.last=function(){var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t.prototype.last.call(this)},e.prototype.lastOrDefault=function(t){var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t},e.prototype.skip=function(t){var e=this;return t>0?new T(function(){return new f.ArrayEnumerator(function(){return e._source},t)}):e},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var e=this;return e.take(e._source.length-t)},e.prototype.skipToLast=function(t){if(!(t>0))return T.empty();var e=this;if(!isFinite(t))return e;var n=e._source?e._source.length:0;return e.skip(n-t)},e.prototype.reverse=function(){var t=this;return new T(function(){return new f.ArrayEnumerator(function(){return t._source},t._source?t._source.length-1:0,(-1))})},e.prototype.memoize=function(){return this.asEnumerable()},e.prototype.sequenceEqual=function(o,i){return void 0===i&&(i=n.areEqual),s.Type.isArrayLike(o)?r.areEqual(this.source,o,!0,i):o instanceof e?o.sequenceEqual(this.source,i):t.prototype.sequenceEqual.call(this,o,i)},e.prototype.toJoinedString=function(e,n){void 0===e&&(e=""),void 0===n&&(n=S.Identity);var r=this._source;return!n&&Array.isArray(r)?r.join(e):t.prototype.toJoinedString.call(this,e,n)},e}(q),C=function(t){function e(e,n){t.call(this,n),this._groupKey=e}return R(e,t),Object.defineProperty(e.prototype,"key",{get:function(){return this._groupKey},enumerable:!0,configurable:!0}),e}(M),K=function(){function t(t){this._dictionary=t}return Object.defineProperty(t.prototype,"count",{get:function(){return this._dictionary.count},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return this._dictionary.getValue(t)},t.prototype.contains=function(t){return this._dictionary.containsKey(t)},t.prototype.getEnumerator=function(){var t,e=this;return new p.EnumeratorBase(function(){t=e._dictionary.getEnumerator()},function(e){if(!t.moveNext())return!1;var n=t.current;return e.yieldReturn(new C(n.key,n.value))},function(){d.dispose(t)})},t}(),L=function(t){function e(e,r,o,u,s){void 0===s&&(s=n.compare),t.call(this,A),this.source=e,this.keySelector=r,this.order=o,this.parent=u,this.comparer=s,i.throwIfEndless(!!e&&!!e.isEndless)}return R(e,t),e.prototype.createOrderedEnumerable=function(t,n){return new e(this.source,t,n,this)},e.prototype.thenBy=function(t){return this.createOrderedEnumerable(t,1)},e.prototype.thenUsing=function(t){return new e(this.source,null,1,this,t)},e.prototype.thenByDescending=function(t){return this.createOrderedEnumerable(t,-1)},e.prototype.thenUsingReversed=function(t){return new e(this.source,null,(-1),this,t)},e.prototype.getEnumerator=function(){var t,e,n=this,r=0;return new p.EnumeratorBase(function(){r=0,t=T.toArray(n.source),e=B(n).generateSortedIndexes(t)},function(n){return r<e.length&&n.yieldReturn(t[e[r++]])},function(){t&&(t.length=0),t=A,e&&(e.length=0),e=A},(!1))},e.prototype._onDispose=function(){var e=this;t.prototype._onDispose.call(this),
e.source=A,e.keySelector=A,e.order=A,e.parent=A},e}(q);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=T});
//# sourceMappingURL=Linq.js.map