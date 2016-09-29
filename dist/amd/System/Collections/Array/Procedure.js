/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports"],function(n,r){"use strict";function e(n,r){if(void 0===r&&(r=!1),!n||!n.length)return 0;var e=0;return r?n.forEach(function(n){isNaN(n)||(e+=n)}):n.every(function(n){return e+=n,!isNaN(e)}),e}function t(n,r){if(void 0===r&&(r=!1),!n||!n.length)return NaN;var e,t=0;return r?(e=0,n.forEach(function(n){isNaN(n)||(t+=n,e++)})):(e=n.length,n.every(function(n){return t+=n,!isNaN(t)})),!e||isNaN(t)?NaN:t/e}function i(n,r){if(void 0===r&&(r=!1),!n||!n.length)return NaN;var e=1;if(r){var t=!1;n.forEach(function(n){isNaN(n)||(e*=n,t||(t=!0))}),t||(e=NaN)}else n.every(function(n){return isNaN(n)?(e=NaN,!1):(e*=n,!0)});return e}function u(n,r){if(void 0===r&&(r=!1),!n||n.length<2)return NaN;var e=n[0],t=!1;return n.every(function(n,i){if(i){if(0===n)return e=NaN,!1;if(isNaN(n)){if(!r)return e=NaN,!1}else e/=n,t||(t=!0)}return!0}),t||(e=NaN),e}function N(n,r,e,t){if(!n||!n.length)return NaN;var i=r;if(e){var u=!1;n.forEach(function(n){isNaN(n)||(t(n,i)&&(i=n),u||(u=!0))}),u||(i=NaN)}else n.every(function(n){return isNaN(n)?(i=NaN,!1):(t(n,i)&&(i=n),!0)});return i}function a(n,r){return void 0===r&&(r=!1),N(n,+(1/0),r,function(n,r){return n<r})}function f(n,r){return void 0===r&&(r=!1),N(n,-(1/0),r,function(n,r){return n>r})}r.sum=e,r.average=t,r.product=i,r.quotient=u,r.min=a,r.max=f});
//# sourceMappingURL=Procedure.js.map