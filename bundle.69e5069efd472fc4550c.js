(()=>{var t={758:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==t(n)||null===n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var r=o.call(n,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return o(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)},e(t)}function o(t,n,e){return o=r()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&i(r,e.prototype),r},o.apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=document.createElement("template");a.innerHTML='\n    <style>\n    :host {\n        width: 100%;\n       \n    }\n    .category {\n        display: block;\n        text-align: center;\n        font-size: 2rem;\n    }\n    h1 {\n        display: block;\n        width:100%;\n        text-align: center;\n        font-weight: bold;\n        \n        font-family: var(--heading-font-face);\n        font-size: var(--heading-font-size);\n        color: var(--heading-font-color);\n    }\n    .banner {\n        display: block;\n        max-width:100%;\n        height: 50vw;\n        background-image: var(--article-banner-image);\n        background-size:cover;\n        margin-bottom: 4rem;\n\n        \n    }\n    .article-content {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n    }\n    .content-left-column {\n        display: inline-block;\n        width:20%;\n\n    }\n    .content-center-column {\n        display: inline-block;\n        width:60%;\n        \n    }\n    .article-meta {\n        display: block;\n        width:;\n        width: 100%;\n\n        font-color: var(--color-secondary-1-4);\n        font-size: var(--page-fontsize-small)\n    }\n    .divider {\n        width: 100%;\n        height: 3px;\n        margin: 2rem 0;\n        background-color: var(--color-secondary-2-0)\n    }\n    .content-right-column {\n        display: inline-block;\n        width:20%;\n    }\n    \n    @media (max-width: 1024px){\n        .content-left-column {display: none}\n        .content-center-column {width:100%}\n        .content-right-column {display: none;}\n      }\n    \n\t</style>\n\n    <div class="category"><slot name="category">Category</slot></div>\n    <h1><slot name="heading">My heading goes here</slot></h1>\n    <div class="banner"><slot name="banner"></slot></div>\n    <div class="article-content">\n        <div class="content-left-column"><slot name="content-left-column"></slot></div>\n        <div class="content-center-column">\n            <div class="article-meta">\n                <div class="byline"><slot name="byline"></slot> - <slot name="date"></slot></div>\n                <div class="comment"><slot name="comment"></slot></div>\n            </div>\n            <div class="divider"></div> \n            <slot name="content-center-column"></slot>\n            \n        </div>\n        <div class="content-right-column"><slot name="content-right-column"></slot></div>\n    </div>\n';var l=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(p,e);var o,l,u,f,s=(u=p,f=r(),function(){var n,e=c(u);if(f){var o=c(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function p(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),t=s.call(this);var n=a.content;return t.attachShadow({mode:"open"}).appendChild(n.cloneNode(!0)),t._config={},t}return o=p,(l=[{key:"config",get:function(){return this._config},set:function(t){t&&(this._config=t)}}])&&n(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),p}(e(HTMLElement));customElements.define("ph-article",l)},890:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t){var o="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,c)}function c(){return e(t,arguments,i(this).constructor)}return c.prototype=Object.create(t.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),r(c,t)},n(t)}function e(t,n,i){return e=o()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return e&&r(i,e.prototype),i},e.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}var c=document.createElement("template");c.innerHTML='\n    <style>\n\t\t/* Style the menu container */\n\t\tnav {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tposition: fixed;\n\t\t\tz-index:100;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\theight: 50px;\n\t\t\tbackground-color: var(--menu-background-color);\n\t\t\tpadding: 10px 200px;\n\t\t\tborder-bottom: 1px solid var(--menu-font-color);\n\t\t}\n\n\t\t/* Style the menu items */\n\t\tnav a {\n\t\t\tcolor: var(--menu-font-color);\n\t\t\ttext-align: center;\n\t\t\tpadding: 10px;\n\t\t\ttext-decoration: none;\n\t\t\tfont-weight: bold;\n\t\t\tposition: relative;\n            text-transform: uppercase;\n            font-family: var(--menu-font-face);\n            font-size: 18px;\n\t\t}\n\n\t\tnav a::before,\n\t\tnav a::after {\n\t\t\tcontent: "";\n\t\t\tposition: absolute;\n\t\t\theight: 2px;\n\t\t\tbackground-color: var(--menu-font-color);\n\t\t\topacity: 0;\n\t\t\ttransition: all 0.3s ease-in-out;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t}\n\n\t\tnav a::before {\n\t\t\ttop: 0;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: left;\n\t\t}\n\n\t\tnav a::after {\n\t\t\tbottom: 0;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: right;\n\t\t}\n\n\t\tnav a:hover::before,\n\t\tnav a:hover::after {\n\t\t\ttransform: scaleX(1);\n\t\t\topacity: 1;\n\t\t}\n\n\t\tnav a:hover {\n\t\t\tcolor: var(--menu-font-color);\n\t\t}\n\t</style>\n\n\t<nav>\n\t\t<a href="./om-foreningen.html">Om foreningen</a>\n\t\t<a href="./artikler.html">Artikler</a>\n\t\t<a href="./projekter.html">Projekter</a>\n\t\t<a href="./forestillinger.html">Forestillinger</a>\n\t\t<a href="./shop.html">Shop</a>\n\t</nav>';var a=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&r(t,n)}(f,n);var e,a,l,u=(a=f,l=o(),function(){var n,e=i(a);if(l){var o=i(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function f(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),t=u.call(this);var n=c.content;return t.attachShadow({mode:"open"}).appendChild(n.cloneNode(!0)),t}return e=f,Object.defineProperty(e,"prototype",{writable:!1}),e}(n(HTMLElement));customElements.define("ph-menu",a)}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";e(890),e(758);const t=e.p+"1b7ad58f75ad49491d95.webp",n=e.p+"13ecff744b372d447f70.webp",o=(e.p,e.p+"bd7c411bf595584361fd.webp"),r=e.p+"bb3f18d25d8160449656.webp",i=e.p+"821c34a4c0ca7e76abf2.webp",c=e.p+"842468c0c79826549da9.webp",a=(e.p,e.p,e.p+"0bca78f39c10d4dbf76b.webp");addEventListener("DOMContentLoaded",(function(e){document.getElementById("pic1").src=a,document.getElementById("pic2").src=n,document.getElementById("pic3").src=t,document.getElementById("pic4").src=o,document.getElementById("pic5").src=r,document.getElementById("pic6").src=i,document.getElementById("pic7").src=c}))})()})();