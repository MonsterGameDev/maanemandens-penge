(()=>{var n={1758:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===n(i)?i:String(i)),r)}var i}function t(n){var e="function"==typeof Map?new Map:void 0;return t=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return o(n,arguments,c(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,n)},t(n)}function o(n,e,t){return o=r()?Reflect.construct.bind():function(n,e,t){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(n,o));return t&&i(r,t.prototype),r},o.apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function i(n,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},i(n,e)}function c(n){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},c(n)}var a=document.createElement("template");a.innerHTML='\n    <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;  \n    }\n    :host {\n        width: 100%;\n        --size-m: 2rem;\n    }\n    .category {\n        display: block;\n        text-align: center;\n        font-size: 2rem;\n        margin: var(--size-s) 0;\n    }\n    h1 {\n        display: block;\n        width:100%;\n        text-align: center;\n        font-weight: bold;\n        margin: var(--size-s) 0;\n\n        \n        font-family: var(--heading-font-face);\n        font-size: var(--heading-font-size);\n        color: var(--heading-font-color);\n    }\n    .banner {\n        display: block;\n        max-width:100%;\n        height: 50vw;\n        background-image: var(--article-banner-image);\n        background-size:cover;\n        background-position: center;\n        margin-bottom: 4rem;\n\n        \n    }\n    .article-content {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n        \n        \n    }\n    .content-left-column {\n        display: inline-block;\n        width:20%;\n\n    }\n    .content-center-column {\n        display: inline-block;\n        width:60%;\n        \n    }\n    .article-meta {\n        display: block;\n        width:;\n        width: 100%;\n\n        font-color: var(--color-secondary-1-4);\n        font-size: var(--page-fontsize-small)\n    }\n    .divider {\n        width: 100%;\n        height: 3px;\n        margin: 2rem 0;\n        background-color: var(--color-secondary-2-0)\n    }\n    .content-right-column {\n        display: inline-block;\n        width:20%;\n        \n    }\n    \n    @media only screen and (max-width: 992px) {\n        .content-right-column {display: none;}\n        .content-left-column {display: none}\n        .content-center-column {\n            width:100%;\n        }\n        \n        .article-content {\n            padding: 0 var(--size-m);\n        }\n\n    }\n    \n\t</style>\n\n    <div class="category"><slot name="category">Category</slot></div>\n    <h1><slot name="heading">My heading goes here</slot></h1>\n    <div class="banner"><slot name="banner"></slot></div>\n    <div class="article-content">\n        <div class="content-left-column"><slot name="content-left-column"></slot></div>\n        <div class="content-center-column">\n            <div class="article-meta">\n                <div class="byline"><slot name="byline"></slot> - <slot name="date"></slot></div>\n                <div class="comment"><slot name="comment"></slot></div>\n            </div>\n            <div class="divider"></div> \n            <slot name="content-center-column"></slot>\n            \n        </div>\n        <div class="content-right-column"><slot name="content-right-column"></slot></div>\n    </div>\n';var l=function(t){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&i(n,e)}(p,t);var o,l,s,u,f=(s=p,u=r(),function(){var e,t=c(s);if(u){var o=c(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}(this,e)});function p(){var n;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),n=f.call(this);var e=a.content;return n.attachShadow({mode:"open"}).appendChild(e.cloneNode(!0)),n._config={},n}return o=p,(l=[{key:"config",get:function(){return this._config},set:function(n){n&&(this._config=n)}}])&&e(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),p}(t(HTMLElement));customElements.define("ph-article",l)},1405:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,l(o.key),o)}}function t(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function o(n){var e="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,o)}function o(){return r(n,arguments,a(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,n)},o(n)}function r(n,e,t){return r=i()?Reflect.construct.bind():function(n,e,t){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(n,o));return t&&c(r,t.prototype),r},r.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},c(n,e)}function a(n){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},a(n)}function l(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}var s=document.createElement("template");s.innerHTML='\n    <style>\n    .animation-container {\n       \n        width: 100%;\n\n        \n    }\n\n    .image-fader-image {\n        width: 100%;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    .image-fader-image:first-of-type {\n        position: relative;\n    }\n\t</style>\n    <div class="animation-container"></div>\n';var u=function(o){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&c(n,e)}(m,o);var r,u,f,p,d=(f=m,p=i(),function(){var e,o=a(f);if(p){var r=a(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return function(e,o){if(o&&("object"===n(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return t(e)}(this,e)});function m(){var n,e,o,r;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),e=t(n=d.call(this)),r=function(n){n.forEach((function(n){var e=[{opacity:0},{opacity:1}];n.target.querySelectorAll("img").forEach((function(n,t){var o=1500*t;n.animate(e,{delay:o,duration:500,easing:"ease-in-out",fill:"backwards"})}))}))},(o=l(o="fadeIn"))in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r;var i=s.content;return n.attachShadow({mode:"open"}).appendChild(i.cloneNode(!0)),n._config={},n}return r=m,(u=[{key:"config",get:function(){return this._config},set:function(n){n&&(this._config=n,this.render())}},{key:"render",value:function(){var n=new IntersectionObserver(this.fadeIn,{rootMargin:"0px",threshold:1}),e=this.shadowRoot.querySelector(".animation-container");n.observe(e),this._config.images.forEach((function(n,t){var o=document.createElement("img");o.src=n,o.classList.add("image-fader-image"),o.style.zIndex=10*t,e.appendChild(o)}))}}])&&e(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),m}(o(HTMLElement));customElements.define("ph-image-fader",u)}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{"use strict";const n=t.p+"033e73fe3957a2a9de23.svg",e=t.p+"c48f4d22776899692df3.svg";function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==o(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}function i(n){var e="function"==typeof Map?new Map:void 0;return i=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,o)}function o(){return c(n,arguments,s(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),l(o,n)},i(n)}function c(n,e,t){return c=a()?Reflect.construct.bind():function(n,e,t){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(n,o));return t&&l(r,t.prototype),r},c.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function l(n,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},l(n,e)}function s(n){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},s(n)}var u=document.createElement("template");u.innerHTML='\n    <style>\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n    .moon-icon {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 100;\n\n        width: 6rem;\n        height: 6rem;\n        margin: 1rem;\n        margin-right: calc(1rem + 10vw);\n\n        -webkit-filter: drop-shadow(5px 5px 5px #222);\n        filter: drop-shadow(5px 5px 5px #222);\n\n        transition: .4s .2s ease-out;\n        transform: translateY(10px) rotate(-360deg);\n        opacity: 0;\n    }\n    .moon-icon-show {\n        transform: translateY(0) rotate(0);\n        opacity: 1;\n    }\n    .show-menu  {\n        transform: scale(30);\n    }\n    /*\n    .burger-menu-icon {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 103;\n\n        width: 50px;\n        height: 50px;\n        margin: 1.5rem;\n        margin-right: calc(1.5rem + 10vw);\n        : opacity  .4s .4s ease-out;\n        opacity: 0;\n\n        pointer-events: none;\n    }\n    .burger-menu-icon-show {\n        opacity: 1;\n    }\n    */\n    .close {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 102;\n\n        width: 50px;\n        height: 50px;\n        margin: 1.5rem;\n        margin-right: calc(1.5rem + 10vw);\n\n        transition: all .4s .6s ease-out;\n        opacity: 0;\n        transform:  rotate(365deg);\n\n        pointer-events: none;\n\n    }\n    .close-show {\n        opacity: 1;\n        transform: rotate(0);\n        pointer-events: all;\n       \n    }\n    .overlay  {\n        position: fixed;\n        inset: 0;\n        z-index: 101;\n\n        width: 100wv;\n        height: 100vh;\n        background-color: rgba(0,0,0,.8);\n        \n        display: flex;\n        justify-content: flex-end;\n        align-items: 50%;\n\n        transition: opacity  .4s .4s ease-out;\n        opacity: 0;\n\n        pointer-events: none;\n       \n        \n    }\n    .overlay-show {\n        opacity: 1;\n      \n    }\n    nav {\n        height: 90vh;\n        padding: 2rem;\n\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        padding: 12rem 12rem; 6rem 0;\n    }\n\n    a {\n        font-family: var(--heading-font-face);\n        font-weight: 900;\n        font-size: 5rem;\n        text-decoration: none;\n        color: var(--general-font-color);\n        letter-spacing: 10px;\n\n        transition: transform .8s .8s ease-out;\n        transform: rotateX(90deg);\n        transform-origin:  center bottom\n        \n    }\n    a:hover {\n        color:#ff5722;\n    }\n\n    .items-shown {\n        cursor: pointer;\n        pointer-events: all;\n        transform: rotateX(0);\n    }\n\n\n\n\n\n    /*\n        MEDIAQUERYS\n    */\n        @media only screen and (max-width: 1200px) {\n     \n        }\n        \n        /* Large (large laptop) */\n        @media only screen and (max-width: 992px) {\n            .moon-icon {\n                margin-right: 1rem;\n            }\n            .close{\n                margin-right: 1.5rem;\n            }\n        }\n        \n        /* Medium (small laptop) */\n        @media only screen and (max-width: 768px) {\n            .overlay {\n                justify-content: center;\n            }\n        }\n        \n        /* Extra small (mobile) */\n        @media only screen and (max-width: 552px) {\n            \n            a {\n                letter-spacing: 4px;\n            }\n        }\n\n\n    </style>\n    <img class="moon-icon moon-icon-show">\n   \x3c!-- <img class="burger-menu-icon burger-menu-icon-show"> --\x3e\n    <img class="close">\n    <div class="overlay">\n        <nav class="menu-list">\n            <a href="/" class="menu-item">Home</a>\n            <a href="./om-foreningen.html">Om</a>\n            <a href="./artikler.html">Artikler</a>\n            <a href="./projekter.html">Projekter</a>\n            <a href="./forestillinger.html">Forestillinger</a>\n            <a href="./shop.html">Shop</a>\n        </nav>\n    </div>\n    ';var f=function(t){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&l(n,e)}(m,t);var i,c,f,p,d=(f=m,p=a(),function(){var n,e=s(f);if(p){var t=s(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(this,n)});function m(){var n;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),n=d.call(this);var e=u.content;return n.attachShadow({mode:"open"}).appendChild(e.cloneNode(!0)),n.menuOpen=!1,n.navMenu,n}return i=m,c=[{key:"config",get:function(){return this._config},set:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=n}},{key:"connectedCallback",value:function(){var t,o=document.querySelector("body"),r=this.shadowRoot.querySelector(".moon-icon");r.src=n;var i=this.shadowRoot.querySelector(".close");i.src=e;var c=this.shadowRoot.querySelector(".overlay"),a=this.shadowRoot.querySelectorAll("a");window.addEventListener("scroll",(function(){window.clearTimeout(t),r.classList.remove("moon-icon-show"),t=setTimeout((function(){console.log("scrolling has stopped"),r.classList.add("moon-icon-show")}),100)})),r.addEventListener("click",(function(){o.style.overflow="hidden",r.classList.add("show-menu"),i.classList.add("close-show"),c.classList.add("overlay-show"),a.forEach((function(n){return n.classList.add("items-shown")}))})),i.addEventListener("click",(function(){o.style.overflow="unset",r.classList.remove("show-menu"),i.classList.remove("close-show"),c.classList.remove("overlay-show"),a.forEach((function(n){return n.classList.remove("items-shown")}))}))}},{key:"render",value:function(){}}],c&&r(i.prototype,c),Object.defineProperty(i,"prototype",{writable:!1}),m}(i(HTMLElement));customElements.define("ph-moon-menu",f),t(1758),t(1405);const p=t.p+"37297291b8fc276517b8.jpg",d=t.p+"e2c1d8d19a5dc38cb889.jpg",m=t.p+"1d4c7b64fd2e67cb0456.jpg",y=t.p+"c1fdc557ba404223890e.jpg",h=t.p+"d8503200dc6e24685939.jpg",v=(t.p,t.p,t.p,t.p,t.p+"ede33ef89416c005ec65.jpg");t.p,addEventListener("DOMContentLoaded",(function(n){document.getElementById("img1").src=v,document.getElementById("img2").src=h,document.getElementById("img3").src=y,document.querySelector("ph-image-fader").config={images:[p,d,m]}}))})()})();