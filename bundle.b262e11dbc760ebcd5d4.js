(()=>{var t={997:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return r(t,arguments,c(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)},e(t)}function r(t,n,e){return r=o()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=document.createElement("template");a.innerHTML='\n    <style>\n    :host {\n        display: block;\n        margin: 16px;\n        --card-text-color: black\n      \n      }\n      .card {\n        position: relative;\n        max-width: 300px;\n        height: 100%;\n        border-radius: 10px;\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2);\n        transition: transform 0.3s ease-in-out;\n\n        display: flex;\n        flex-flow: column nowrap;\n        flex-grow: stretch;\n\n        overflow: hidden;\n      }\n      .card:hover {\n        transform: translateY(-5px);\n        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 12px 40px rgba(0, 0, 0, 0.2);\n      }\n      .card .image-top {\n        width: 100%;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        background-size: cover;\n        background-position: center;\n        height: 40%;\n\n      }\n      .card-content {\n        padding: 16px;\n        height: 66%\n      }\n      .card-title {\n        margin-top: 0;\n        margin-bottom: 8px;\n        font-size: 1.5rem;\n        font-weight: bold;\n      }\n      .card-description {\n        margin: 0;\n        font-size: 1rem;\n        line-height: 1.5;\n      }\n   </style>\n   <div class="card">\n      <div class="image-top">\n\n      </div>\n      <div class="card-content">\n        <h2 class="card-title"><slot name="card-title"></slot></h2>\n        <p class="card-description"><slot name="card-description"></slot></p>\n      </div>\n   </div>\n';var u=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(s,e);var r,u,l,p,f=(l=s,p=o(),function(){var n,e=c(l);if(p){var r=c(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function s(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),t=f.call(this);var n=a.content;return t.attachShadow({mode:"open"}).appendChild(n.cloneNode(!0)),t}return r=s,u=[{key:"config",get:function(){return this._config},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("setting config: ",t),this._config=t,this.render()}},{key:"render",value:function(){var t=this._config.cardBackground;this.shadowRoot.querySelector(".card-content").style.background=t;var n=this._config.cardTextColor;this.shadowRoot.querySelector(".card-content").style.color=n;var e=this._config.topImageUrl;this.shadowRoot.querySelector(".image-top").style.backgroundImage="url("+e+")"}}],u&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),s}(e(HTMLElement));customElements.define("ph-image-card",u)},890:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t){var r="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,c)}function c(){return e(t,arguments,i(this).constructor)}return c.prototype=Object.create(t.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o(c,t)},n(t)}function e(t,n,i){return e=r()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&o(i,e.prototype),i},e.apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function o(t,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},o(t,n)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}var c=document.createElement("template");c.innerHTML='\n    <style>\n\t\t/* Style the menu container */\n\t\tnav {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tposition: fixed;\n\t\t\tz-index:100;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\theight: 50px;\n\t\t\tbackground-color: var(--menu-background-color);\n\t\t\tpadding: 10px 200px;\n\t\t\tborder-bottom: 1px solid var(--menu-font-color);\n\t\t}\n\n\t\t/* Style the menu items */\n\t\tnav a {\n\t\t\tcolor: var(--menu-font-color);\n\t\t\ttext-align: center;\n\t\t\tpadding: 10px;\n\t\t\ttext-decoration: none;\n\t\t\tfont-weight: bold;\n\t\t\tposition: relative;\n            text-transform: uppercase;\n            font-family: var(--menu-font-face);\n            font-size: 18px;\n\t\t}\n\n\t\tnav a::before,\n\t\tnav a::after {\n\t\t\tcontent: "";\n\t\t\tposition: absolute;\n\t\t\theight: 2px;\n\t\t\tbackground-color: var(--menu-font-color);\n\t\t\topacity: 0;\n\t\t\ttransition: all 0.3s ease-in-out;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t}\n\n\t\tnav a::before {\n\t\t\ttop: 0;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: left;\n\t\t}\n\n\t\tnav a::after {\n\t\t\tbottom: 0;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: right;\n\t\t}\n\n\t\tnav a:hover::before,\n\t\tnav a:hover::after {\n\t\t\ttransform: scaleX(1);\n\t\t\topacity: 1;\n\t\t}\n\n\t\tnav a:hover {\n\t\t\tcolor: var(--menu-font-color);\n\t\t}\n\t</style>\n\n\t<nav>\n\t\t<a href="./om-foreningen.html">Om foreningen</a>\n\t\t<a href="./artikler.html">Artikler</a>\n\t\t<a href="./projekter.html">Projekter</a>\n\t\t<a href="./forestillinger.html">Forestillinger</a>\n\t\t<a href="./shop.html">Shop</a>\n\t</nav>';var a=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&o(t,n)}(p,n);var e,a,u,l=(a=p,u=r(),function(){var n,e=i(a);if(u){var r=i(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function p(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),t=l.call(this);var n=c.content;return t.attachShadow({mode:"open"}).appendChild(n.cloneNode(!0)),t}return e=p,Object.defineProperty(e,"prototype",{writable:!1}),e}(n(HTMLElement));customElements.define("ph-menu",a)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";e(890),e(997);const t=e.p+"360dd9609e117706844e.jpeg",n=(e.p,e.p,e.p,e.p,e.p+"bb3f18d25d8160449656.webp"),r=(e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p+"4a430fd27fc83b892e74.webp");e.p,e.p,addEventListener("DOMContentLoaded",(function(){document.querySelector("ph-image-card#card1").config={topImageUrl:t,cardBackground:"linear-gradient(to bottom right, rgba(255, 192, 203, 0.7), transparent)",cardTextColor:"white"},document.querySelector("ph-image-card#card2").config={topImageUrl:n,cardBackground:"linear-gradient(to bottom right,#cea6bf, #151b1f)",cardTextColor:""},document.querySelector("ph-image-card#card3").config={topImageUrl:r,cardBackground:"linear-gradient(to bottom right, #93754e, #623519)",cardTextColor:""}}))})()})();