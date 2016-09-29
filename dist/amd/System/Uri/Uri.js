/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based on: https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
 */
define(["require","exports","../Types","./QueryParams","./Scheme","../Text/Utility","../Exceptions/ArgumentException","../Exceptions/ArgumentOutOfRangeException"],function(t,e,r,n,i,u,o,s){"use strict";function a(t,e){var r,n=0;for(e||(e={});r=v[n++];){var i=t[r];i&&(e[r]=i)}return e}function f(t){var e=t;if(r.Type.isString(e)){if(!e)return null;if(e=u.trim(e).toLowerCase().replace(/[^a-z0-9+.-]+$/g,q),!e)return null;if(i.isValid(e))return e}else if(null===e||void 0===e)return e;throw new s.ArgumentOutOfRangeException("scheme",t,"Invalid scheme.")}function p(t){if(0===t)return t;if(!t)return null;var e;if(r.Type.isNumber(t,!0)){if(e=t,e>=0&&isFinite(e))return e}else if(r.Type.isString(t)&&(e=parseInt(t))&&!isNaN(e))return p(e);throw new o.ArgumentException("port","invalid value")}function h(t){if(!t.host){if(t.userInfo)throw new o.ArgumentException("host","Cannot include user info when there is no host.");if(r.Type.isNumber(t.port,!1))throw new o.ArgumentException("host","Cannot include a port when there is no host.")}var e=t.host||q;return e&&(t.userInfo&&(e=t.userInfo+E+e),isNaN(t.port)||(e+=":"+t.port),e=w+e),e}function c(t){return t&&(0!==t.indexOf(O)?O:q)+t}function l(t){return t&&(0!==t.indexOf(A)?A:q)+t}function g(t){var e=t.path,r=t.query;return q+(e||q)+(c(r)||q)}function y(t){var e=f(t.scheme),r=h(t),n=g(t),i=l(t.fragment),u=q+(e&&e+":"||q)+(r||q),s=q+(n||q)+(i||q);if(u&&s&&e&&!r)throw new o.ArgumentException("authority","Cannot format schemed Uri with missing authority.");return u&&n&&0!==n.indexOf(x)&&(s=x+s),u+s}function m(t,e){if(!t)return new o.ArgumentException("url","Nothing to parse.");var r,n={};if(r=t.indexOf(A),r!=-1&&(n.fragment=t.substring(r+1)||d,t=t.substring(0,r)),r=t.indexOf(O),r!=-1&&(n.query=t.substring(r+1)||d,t=t.substring(0,r)),r=t.indexOf(w),r!=-1){var i=u.trim(t.substring(0,r)),s=/:$/;if(!s.test(i))return new o.ArgumentException("url","Scheme was improperly formatted");i=u.trim(i.replace(s,q));try{n.scheme=f(i)||d}catch(p){return p}t=t.substring(r+2)}if(r=t.indexOf(x),r!=-1&&(n.path=t.substring(r),t=t.substring(0,r)),r=t.indexOf(E),r!=-1&&(n.userInfo=t.substring(0,r)||d,t=t.substring(r+1)),r=t.indexOf(":"),r!=-1){var h=parseInt(u.trim(t.substring(r+1)));if(isNaN(h))return new o.ArgumentException("url","Port was invalid.");n.port=h,t=t.substring(0,r)}return t=u.trim(t),t&&(n.host=t),e(a(n)),null}var d=void 0,b=function(){function t(t,e,i,u,o,s,a){var h=this;this.scheme=f(t)||null,this.userInfo=e||null,this.host=i||null,this.port=p(u),this.authority=h.getAuthority()||null,this.path=o||null,r.Type.isString(s)||(s=n.encode(s)),this.query=c(s)||null,Object.freeze(this.queryParams=h.query?n.parseToMap(h.query):{}),this.pathAndQuery=h.getPathAndQuery()||null,this.fragment=l(a)||null,this.absoluteUri=h.getAbsoluteUri(),this.baseUri=h.absoluteUri.replace(/[?#].*/,""),Object.freeze(this)}return t.prototype.equals=function(e){return this===e||this.absoluteUri==t.toString(e)},t.from=function(e,n){var i=r.Type.isString(e)?t.parse(e):e;return new t(i&&i.scheme||n&&n.scheme,i&&i.userInfo||n&&n.userInfo,i&&i.host||n&&n.host,i&&r.Type.isNumber(i.port)?i.port:n&&n.port,i&&i.path||n&&n.path,i&&i.query||n&&n.query,i&&i.fragment||n&&n.fragment)},t.parse=function(t,e){void 0===e&&(e=!0);var r=null,n=m(t,function(t){r=t});if(e&&n)throw n;return r},t.tryParse=function(t,e){return!m(t,e)},t.copyOf=function(t){return a(t)},t.prototype.copyTo=function(t){return a(this,t)},t.prototype.updateQuery=function(e){var r=this.toMap();return r.query=e,t.from(r)},t.prototype.getAbsoluteUri=function(){return y(this)},t.prototype.getAuthority=function(){return h(this)},t.prototype.getPathAndQuery=function(){return g(this)},Object.defineProperty(t.prototype,"pathSegments",{get:function(){return this.path&&this.path.match(/^[\/]|[^\/]*[\/]|[^\/]+$/g)||[]},enumerable:!0,configurable:!0}),t.prototype.toMap=function(){return this.copyTo({})},t.prototype.toString=function(){return this.absoluteUri},t.toString=function(e){return e instanceof t?e.absoluteUri:y(e)},t.getAuthority=function(t){return h(t)},t}();e.Uri=b,function(t){t[t.scheme=0]="scheme",t[t.userInfo=1]="userInfo",t[t.host=2]="host",t[t.port=3]="port",t[t.path=4]="path",t[t.query=5]="query",t[t.fragment=6]="fragment"}(e.Fields||(e.Fields={}));var v=e.Fields;Object.freeze(v);var x="/",w="//",O=n.Separator.Query,A="#",q="",E="@";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=b});
//# sourceMappingURL=Uri.js.map