(()=>{var t={5997:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return r(t,arguments,a(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)},e(t)}function r(t,n,e){return r=o()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=document.createElement("template");c.innerHTML='\n    <style>\n    :host {\n        display: block;\n        margin: 16px;\n        --card-text-color: black\n      \n      }\n      .card {\n        position: relative;\n        max-width: 300px;\n        height: 100%;\n        border-radius: 10px;\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2);\n        transition: transform 0.3s ease-in-out;\n\n        display: flex;\n        flex-flow: column nowrap;\n        flex-grow: stretch;\n\n        overflow: hidden;\n      }\n      .card:hover {\n        transform: translateY(-5px);\n        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 12px 40px rgba(0, 0, 0, 0.2);\n      }\n      .card .image-top {\n        width: 100%;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        background-size: cover;\n        background-position: center;\n        height: 40%;\n\n      }\n      .card-content {\n        padding: 16px;\n        height: 66%\n      }\n      .card-title {\n        margin-top: 0;\n        margin-bottom: 8px;\n        font-size: 1.5rem;\n        font-weight: bold;\n      }\n      .card-description {\n        margin: 0;\n        font-size: 1rem;\n        line-height: 1.5;\n      }\n   </style>\n   <div class="card">\n      <div class="image-top">\n\n      </div>\n      <div class="card-content">\n        <h2 class="card-title"><slot name="card-title"></slot></h2>\n        <p class="card-description"><slot name="card-description"></slot></p>\n      </div>\n   </div>\n';var l=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(f,e);var r,l,u,s,p=(u=f,s=o(),function(){var n,e=a(u);if(s){var r=a(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function f(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),t=p.call(this);var n=c.content;return t.attachShadow({mode:"open"}).appendChild(n.cloneNode(!0)),t}return r=f,l=[{key:"config",get:function(){return this._config},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=t,this.render()}},{key:"render",value:function(){var t=this._config.cardBackground;this.shadowRoot.querySelector(".card-content").style.background=t;var n=this._config.cardTextColor;this.shadowRoot.querySelector(".card-content").style.color=n;var e=this._config.topImageUrl;this.shadowRoot.querySelector(".image-top").style.backgroundImage="url("+e+")"}}],l&&n(r.prototype,l),Object.defineProperty(r,"prototype",{writable:!1}),f}(e(HTMLElement));customElements.define("ph-image-card",l)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){var n="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return i(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},o(t)}function i(t,n,e){return i=a()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o},i.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},c(t,n)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function u(n){var e=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===t(e)?e:String(e)}e.p;var s=document.createElement("template");s.innerHTML='\n    <style>\n\t\t/* Style the menu container */\n\t\tnav {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tposition: fixed;\n\t\t\tz-index:100;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\theight: 50px;\n\t\t\tbackground-color: var(--menu-background-color);\n\t\t\tpadding: 1rem 8vw;\n\t\t\tborder-bottom: 1px solid var(--menu-font-color);\n\t\t}\n\n\t\t/* Style the menu items */\n\t\tnav a {\n\t\t\tcolor: var(--menu-font-color);\n\t\t\ttext-align: center;\n\t\t\tpadding: 10px;\n\t\t\ttext-decoration: none;\n\t\t\tfont-weight: bold;\n\t\t\tposition: relative;\n            text-transform: uppercase;\n            font-family: var(--menu-font-face);\n            font-size: 18px;\n\t\t}\n\n\t\tnav a::before,\n\t\tnav a::after,\n\t\tnav a:active::before,\n\t\tnav a:active::after {\n\t\t\tcontent: "";\n\t\t\tposition: absolute;\n\t\t\theight: 2px;\n\t\t\tbackground-color: var(--menu-font-color);\n\t\t\topacity: 0;\n\t\t\ttransition: all 0.3s ease-in-out;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t}\n\n\t\tnav a::before {\n\t\t\ttop: 0;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: left;\n\t\t}\n\n\t\tnav a::after {\n\t\t\tbottom: 0;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: right;\n\t\t}\n\n\t\tnav a:hover::before,\n\t\tnav a:hover::after {\n\t\t\ttransform: scaleX(1);\n\t\t\topacity: 1;\n\t\t}\n\n\t\tnav a:hover {\n\t\t\tcolor: var(--menu-font-color);\n\t\t}\n\n\t\t.burger-button {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.back-button-container {\n\t\t\twidth: 30px;\n\t\t\tcursor: pointer;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tmargin: var(--size-m);\n\t\t\tz-index: 1000;\n\n\t\t}\n\n\t\t.svg-stroke-color {\n\t\t\tstroke: var(--color-secondary-1-1);\n\t\t\tfill: var(--color-secondary-1-1);\n\t\t}\n\t\t\n\t\t@media only screen and (max-width: 992px) {\n\t\t\t* {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\t\t\tnav {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100vh;\n\t\t\t\ttransform: translateX(-100vw);\n\t\t\t\topacity: .2;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: space-evenly;\n\t\t\t\tpadding: 15vh 0;\n\n\t\t\t\ttransition: all .8s .2s ease-out;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\t\t\t.burger-button {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcursor: pointer;\n\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\n\t\t\t\twidth: 5rem;\n\t\t\t\theight: 5rem;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\toverflow: hidden;\n\n\t\t\t\tmargin: 2rem;\n\n\t\t\t\tz-index: 100;\n\t\t\t}\n\t\t\t\n\n\t\t\t.open {\n\t\t\t\ttransform: translateX(0);\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t\n\t\t}\n\n\t\t@media only screen and (max-width: 768px) {}\n\t\t@media only screen and (max-width: 552px) {\n\t\t\t\n\t\t\t.burger-button {\n\t\t\t\twidth: 4rem;\n\t\t\t\tmargin: 1rem;\n\t\t\t}\n\t\t}\n\n\t</style>\n\t<div class="back-button-container">\n\t<svg class= "back-button svg-stroke-color" \n\t\tfill="#000000"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"/></svg>\n\t</div>\n\t<div class="burger-button"></div>\n\t<nav>\n\t\t<a href="./om-foreningen.html">Om foreningen</a>\n\t\t<a href="./artikler.html">Artikler</a>\n\t\t<a href="./projekter.html">Projekter</a>\n\t\t<a href="./forestillinger.html">Forestillinger</a>\n\t\t<a href="./shop.html">Shop</a>\n\t</nav>';var p=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&c(t,n)}(h,e);var o,i,p,f,d=(p=h,f=a(),function(){var n,e=l(p);if(f){var o=l(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return r(n)}(this,n)});function h(){var t,n,e,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,h),n=r(t=d.call(this)),o=function(){console.log("toggleMenu",t.menuOpen),t.menuOpen?(t.navMenu.classList.remove("open"),t.loadOpenMenuIcon()):(t.navMenu.classList.add("open"),t.loadCloseMenuIcon()),t.menuOpen=!t.menuOpen},(e=u(e="toggleMenu"))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o;var i=s.content;return t.attachShadow({mode:"open"}).appendChild(i.cloneNode(!0)),t.menuOpen=!1,t.navMenu,t}return o=h,(i=[{key:"connectedCallback",value:function(){this.loadOpenMenuIcon(),this.menuOpen=!1,this.setupEventListners(),this.navMenu=this.shadowRoot.querySelector("nav")}},{key:"loadOpenMenuIcon",value:function(){this.shadowRoot.querySelector(".burger-button").innerHTML='\n\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" class="svg-stroke-color"/>\n\t\t<path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"  class="svg-stroke-color"/>\n\t\t<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"  class="svg-stroke-color"/>\n\t\t</svg>\n\t\t'}},{key:"loadCloseMenuIcon",value:function(){console.log("closing"),this.shadowRoot.querySelector(".burger-button").innerHTML='\n\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"  class="svg-stroke-color"/></svg>\n\t\t'}},{key:"setupEventListners",value:function(){var t=this,n=this.shadowRoot.querySelector(".back-button-container");n&&n.addEventListener("click",(function(){history.back()})),this.shadowRoot.querySelector(".burger-button").addEventListener("click",this.toggleMenu),this.shadowRoot.querySelectorAll("a").forEach((function(n){return n.addEventListener("click",t.toggleMenu)}))}}])&&n(o.prototype,i),Object.defineProperty(o,"prototype",{writable:!1}),h}(o(HTMLElement));customElements.define("ph-menu",p),e(5997);const f=e.p+"360dd9609e117706844e.jpeg",d=(e.p,e.p,e.p,e.p,e.p+"bb3f18d25d8160449656.webp"),h=(e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p+"4a430fd27fc83b892e74.webp");e.p,e.p,addEventListener("DOMContentLoaded",(function(){document.querySelector("ph-image-card#card1").config={topImageUrl:f,cardBackground:"linear-gradient(to bottom right, rgba(255, 192, 203, 0.7), transparent)",cardTextColor:"white"},document.querySelector("ph-image-card#card2").config={topImageUrl:d,cardBackground:"linear-gradient(to bottom right,#cea6bf, #151b1f)",cardTextColor:""},document.querySelector("ph-image-card#card3").config={topImageUrl:h,cardBackground:"linear-gradient(to bottom right, #93754e, #623519)",cardTextColor:""}}))})()})();