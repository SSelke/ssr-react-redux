!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),u=(n(7),n(0)),c=n.n(u),i=n(4),l=n.n(i),a=n(2),f=n(5),p=n.n(f),s=n(6),y=n(1);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return d(r,(n=r=d(this,(e=h(t)).call.apply(e,[this].concat(u))),r.head=function(){return c.a.createElement(y.Helmet,null,c.a.createElement("title",null,"Home Page"))},n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){return c.a.createElement("div",null,this.head(),c.a.createElement("h1",null,"My Home Page"),c.a.createElement("p",null,"Some content"),c.a.createElement(s.Link,{to:"/contact"},"Contact"),c.a.createElement("button",{onClick:function(){return console.log("This has been logged")}},"Console log"))}}])&&m(n.prototype,r),o&&m(n,o),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return j(r,(n=r=j(this,(e=S(t)).call.apply(e,[this].concat(u))),r.head=function(){return c.a.createElement(y.Helmet,null,c.a.createElement("title",null,"Contact Page"))},n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){return c.a.createElement("div",null,this.head(),c.a.createElement("h1",null,"Contact Page"),c.a.createElement("button",{onClick:function(){return console.log("This has been logged")}},"Console log"))}}])&&_(n.prototype,r),o&&_(n,o),t}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,T(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(a.Switch,null,c.a.createElement(a.Route,{path:"/contact",render:function(e){return c.a.createElement(w,e)}}),c.a.createElement(a.Route,{path:"/",render:function(e){return c.a.createElement(g,e)}})))}}])&&x(n.prototype,r),o&&x(n,o),t}(),R=o()(),H=process.env.PORT||3e3;R.use(p.a.json()),R.use(o.a.static("build/public")),R.get("*",function(e,t){var n=l.a.renderToString(c.a.createElement(a.StaticRouter,{location:e.url,context:{}},c.a.createElement(q,null))),r=y.Helmet.renderStatic(),o="\n        <html>\n            <head>\n                <title>".concat(r.title.toString(),'</title>\n            </head>\n            <body>\n                <div id="root">').concat(n,'</div>\n                <script src="client_bundle.js"><\/script>\n            </body>\n        </html>\n    ');t.send(o)}),R.listen(H,function(){console.log("Server live on port ".concat(H))})}]);