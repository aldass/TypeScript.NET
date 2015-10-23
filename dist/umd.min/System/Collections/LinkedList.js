/*
 * @author electricessence / https://github.com/electricessence/
 * Based Upon: http://msdn.microsoft.com/en-us/library/he2s3bh7%28v=vs.110%29.aspx
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(t,e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(t,e)}(["require","exports","../Compare","../Text/Utility","../Collections/Array/Utility","./Enumeration/Enumerator","./Enumeration/EnumeratorBase","../Exceptions/InvalidOperationException","../Exceptions/ArgumentException","../Exceptions/ArgumentNullException","../Exceptions/ArgumentOutOfRangeException"],function(t,e){function n(t,e){if(!t)return null;var n=t.external;return n||(t.external=n=new _(e,t)),n}function r(t,e){if(!t)throw new d["default"]("Cannot be null.");if(t.list!=e)throw new f["default"]("Provided node does not belong to this list.");var n=t._node;if(!n)throw new f["default"]("Provided node is not valid.");return n}var o=t("../Compare"),i=t("../Text/Utility"),u=t("../Collections/Array/Utility"),s=t("./Enumeration/Enumerator"),a=t("./Enumeration/EnumeratorBase"),f=t("../Exceptions/InvalidOperationException"),p=t("../Exceptions/ArgumentException"),d=t("../Exceptions/ArgumentNullException"),c=t("../Exceptions/ArgumentOutOfRangeException"),l=function(){function t(t,e,n){this.value=t,this.prev=e,this.next=n}return t.prototype.assertDetached=function(){if(this.next||this.prev)throw new f["default"]("Adding a node that is already placed.")},t}(),h=function(){function t(t){var e=this,n=0,r=null,o=null,i=s.from(t);for(i.moveNext()&&(r=o=new l(i.current),++n);i.moveNext();)o=o.next=new l(i.current,o),++n;e._first=r,e._last=o,e._count=n}return t.prototype._addFirst=function(t){var e=this,n=e._first,r=new l(t,null,n);return n?n.prev=r:e._last=r,e._first=r,e._count+=1,r},t.prototype._addLast=function(t){var e=this,n=e._last,r=new l(t,n);return n?n.next=r:e._first=r,e._last=r,e._count+=1,r},t.prototype._addNodeBefore=function(t,e){e.assertDetached(),e.next=t,e.prev=t.prev,t.prev.next=e,t.prev=e,this._count+=1},t.prototype._addNodeAfter=function(t,e){e.assertDetached(),e.prev=t,e.next=t.next,t.next.prev=e,t.next=e,this._count+=1},t.prototype._findFirst=function(t){for(var e=o.areEqual,n=this._first;n;){if(e(t,n.value))return n;n=n.next}return null},t.prototype._findLast=function(t){for(var e=o.areEqual,n=this._last;n;){if(e(t,n.value))return n;n=n.prev}return null},t.prototype.forEach=function(t,e){if(void 0===e&&(e=!1),e){var n=this.toArray();u.forEach(n,t),n.length=0}else for(var r=this._first,o=0;r&&t(r.value,o++)!==!1;)r=r.next},t.prototype.getEnumerator=function(){var t,e=this;return new a["default"](function(){t=new l(null,null,e._first)},function(e){return(t=t.next)?e.yieldReturn(t.value):e.yieldBreak()})},Object.defineProperty(t.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isReadOnly",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.add=function(t){this._addLast(t)},t.prototype.clear=function(){var t=this;t._first=null,t._last=null;var e=t._count;return t._count=0,e},t.prototype.contains=function(t){var e=!1,n=o.areEqual;return this.forEach(function(r){return!(e=n(t,r))}),e},t.prototype.copyTo=function(t,e){return void 0===e&&(e=0),this.forEach(function(n,r){t[e+r]=n}),t},t.prototype.toArray=function(){var t=u.initialize(this._count);return this.copyTo(t)},t.prototype.removeOnce=function(t){var e=this,n=e._findFirst(t);if(n){var r=n.prev,o=n.next;r?r.next=o:e._first=o,o?o.prev=r:e._last=r,e._count-=1}return null!=n},t.prototype.remove=function(t){for(var e=this,n=0;e.removeOnce(t);)++n;return n},Object.defineProperty(t.prototype,"first",{get:function(){return n(this._first,this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){return n(this._last,this)},enumerable:!0,configurable:!0}),t.prototype._getNodeAt=function(t){if(0>t)throw new c["default"]("index",t,"Is less than zero.");if(t>=this._count)throw new c["default"]("index",t,"Is greater than count.");for(var e=this._first,n=0;e&&t<n++;)e=e.next;return e},t.prototype.getValueAt=function(t){return this._getNodeAt(t).value},t.prototype.getNodeAt=function(t){return n(this._getNodeAt(t),this)},t.prototype.find=function(t){return n(this._findFirst(t),this)},t.prototype.findLast=function(t){return n(this._findLast(t),this)},t.prototype.addFirst=function(t){this._addFirst(t)},t.prototype.addLast=function(t){this._addLast(t)},t.prototype.removeFirst=function(){var t=this,e=t._first;if(e){var n=e.next;t._first=n,n&&(n.prev=null),t._count-=1}},t.prototype.removeLast=function(){var t=this,e=t._last;if(e){var n=e.prev;t._last=n,n&&(n.next=null),t._count-=1}},t.prototype.removeNode=function(t){var e=this,n=r(t,e),o=n.prev,u=n.next,s=!1,a=!1;if(o?o.next=u:e._first==n?e._first=u:s=!0,u?u.prev=o:e._last==n?e._last=o:a=!0,s!==a)throw new p["default"]("node",i.format("Provided node is has no {0} reference but is not the {1} node!",s?"previous":"next",s?"first":"last"));return!s&&!a},t.prototype.addBefore=function(t,e){this._addNodeBefore(r(t,this),new l(e))},t.prototype.addAfter=function(t,e){this._addNodeAfter(r(t,this),new l(e))},t.prototype.addNodeBefore=function(t,e){this._addNodeBefore(r(t,this),r(e,this))},t.prototype.addNodeAfter=function(t,e){this._addNodeAfter(r(t,this),r(e,this))},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=h;var _=function(){function t(t,e){this._list=t,this._node=e}return Object.defineProperty(t.prototype,"list",{get:function(){return this._list},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"previous",{get:function(){return n(this._node.prev,this._list)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"next",{get:function(){return n(this._node.next,this._list)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this._node.value},set:function(t){this._node.value=t},enumerable:!0,configurable:!0}),t.prototype.addBefore=function(t){this._list.addBefore(this,t)},t.prototype.addAfter=function(t){this._list.addAfter(this,t)},t.prototype.addNodeBefore=function(t){this._list.addNodeBefore(this,t)},t.prototype.addNodeAfter=function(t){this._list.addNodeAfter(this,t)},t.prototype.remove=function(){this._list.removeNode(this)},t}()});
//# sourceMappingURL=LinkedList.js.map