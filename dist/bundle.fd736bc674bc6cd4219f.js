(()=>{var n={1758:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===n(i)?i:String(i)),r)}var i}function e(n){var t="function"==typeof Map?new Map:void 0;return e=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return o(n,arguments,c(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,n)},e(n)}function o(n,t,e){return o=r()?Reflect.construct.bind():function(n,t,e){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(n,o));return e&&i(r,e.prototype),r},o.apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function i(n,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},i(n,t)}function c(n){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},c(n)}var a=document.createElement("template");a.innerHTML='\n    <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;  \n    }\n    :host {\n        width: 100%;\n        --size-m: 2rem;\n    }\n    .category {\n        display: block;\n        text-align: center;\n        font-size: 2rem;\n        margin: var(--size-s) 0;\n    }\n    h1 {\n        display: block;\n        width:100%;\n        text-align: center;\n        font-weight: bold;\n        margin: var(--size-s) 0;\n\n        \n        font-family: var(--heading-font-face);\n        font-size: var(--heading-font-size);\n        color: var(--heading-font-color);\n    }\n    .banner {\n        display: block;\n        max-width:100%;\n        height: 50vw;\n        background-image: var(--article-banner-image);\n        background-size:cover;\n        background-position: center;\n        margin-bottom: 4rem;\n\n        \n    }\n    .article-content {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n        \n        \n    }\n    .content-left-column {\n        display: inline-block;\n        width:20%;\n\n    }\n    .content-center-column {\n        display: inline-block;\n        width:60%;\n        \n    }\n    .article-meta {\n        display: block;\n        width:;\n        width: 100%;\n\n        font-color: var(--color-secondary-1-4);\n        font-size: var(--page-fontsize-small)\n    }\n    .divider {\n        width: 100%;\n        height: 3px;\n        margin: 2rem 0;\n        background-color: var(--color-secondary-2-0)\n    }\n    .content-right-column {\n        display: inline-block;\n        width:20%;\n        \n    }\n    \n    @media only screen and (max-width: 992px) {\n        .content-right-column {display: none;}\n        .content-left-column {display: none}\n        .content-center-column {\n            width:100%;\n        }\n        \n        .article-content {\n            padding: 0 var(--size-m);\n        }\n\n    }\n    \n\t</style>\n\n    <div class="category"><slot name="category">Category</slot></div>\n    <h1><slot name="heading">My heading goes here</slot></h1>\n    <div class="banner"><slot name="banner"></slot></div>\n    <div class="article-content">\n        <div class="content-left-column"><slot name="content-left-column"></slot></div>\n        <div class="content-center-column">\n            <div class="article-meta">\n                <div class="byline"><slot name="byline"></slot> - <slot name="date"></slot></div>\n                <div class="comment"><slot name="comment"></slot></div>\n            </div>\n            <div class="divider"></div> \n            <slot name="content-center-column"></slot>\n            \n        </div>\n        <div class="content-right-column"><slot name="content-right-column"></slot></div>\n    </div>\n';var l=function(e){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&i(n,t)}(p,e);var o,l,s,u,f=(s=p,u=r(),function(){var t,e=c(s);if(u){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}(this,t)});function p(){var n;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),n=f.call(this);var t=a.content;return n.attachShadow({mode:"open"}).appendChild(t.cloneNode(!0)),n._config={},n}return o=p,(l=[{key:"config",get:function(){return this._config},set:function(n){n&&(this._config=n)}}])&&t(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),p}(e(HTMLElement));customElements.define("ph-article",l)},5997:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===n(i)?i:String(i)),r)}var i}function e(n){var t="function"==typeof Map?new Map:void 0;return e=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return o(n,arguments,c(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,n)},e(n)}function o(n,t,e){return o=r()?Reflect.construct.bind():function(n,t,e){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(n,o));return e&&i(r,e.prototype),r},o.apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function i(n,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},i(n,t)}function c(n){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},c(n)}var a=document.createElement("template");a.innerHTML='\n    <style>\n    :host {\n        display: block;\n        margin: 16px;\n        --card-text-color: black\n      \n      }\n      .card {\n        position: relative;\n        max-width: 300px;\n        height: 100%;\n        border-radius: 10px;\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2);\n        transition: transform 0.3s ease-in-out;\n\n        display: flex;\n        flex-flow: column nowrap;\n        flex-grow: stretch;\n\n        overflow: hidden;\n      }\n      .card:hover {\n        transform: translateY(-5px);\n        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 12px 40px rgba(0, 0, 0, 0.2);\n      }\n      .card .image-top {\n        width: 100%;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        background-size: cover;\n        background-position: center;\n        height: 40%;\n\n      }\n      .card-content {\n        padding: 16px;\n        height: 66%\n      }\n      .card-title {\n        margin-top: 0;\n        margin-bottom: 8px;\n        font-size: 1.5rem;\n        font-weight: bold;\n      }\n      .card-description {\n        margin: 0;\n        font-size: 1rem;\n        line-height: 1.5;\n      }\n   </style>\n   <div class="card">\n      <div class="image-top">\n\n      </div>\n      <div class="card-content">\n        <h2 class="card-title"><slot name="card-title"></slot></h2>\n        <p class="card-description"><slot name="card-description"></slot></p>\n      </div>\n   </div>\n';var l=function(e){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&i(n,t)}(p,e);var o,l,s,u,f=(s=p,u=r(),function(){var t,e=c(s);if(u){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}(this,t)});function p(){var n;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),n=f.call(this);var t=a.content;return n.attachShadow({mode:"open"}).appendChild(t.cloneNode(!0)),n}return o=p,l=[{key:"config",get:function(){return this._config},set:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=n,this.render()}},{key:"render",value:function(){var n=this._config.cardBackground;this.shadowRoot.querySelector(".card-content").style.background=n;var t=this._config.cardTextColor;this.shadowRoot.querySelector(".card-content").style.color=t;var e=this._config.topImageUrl;this.shadowRoot.querySelector(".image-top").style.backgroundImage="url("+e+")"}}],l&&t(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),p}(e(HTMLElement));customElements.define("ph-image-card",l)}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{"use strict";const n=e.p+"033e73fe3957a2a9de23.svg",t=e.p+"c48f4d22776899692df3.svg";function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,(void 0,i=function(n,t){if("object"!==o(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}function i(n){var t="function"==typeof Map?new Map:void 0;return i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,o)}function o(){return c(n,arguments,s(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),l(o,n)},i(n)}function c(n,t,e){return c=a()?Reflect.construct.bind():function(n,t,e){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(n,o));return e&&l(r,e.prototype),r},c.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},l(n,t)}function s(n){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},s(n)}var u=document.createElement("template");u.innerHTML='\n    <style>\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n    .moon-icon {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 100;\n\n        width: 6rem;\n        height: 6rem;\n        margin: 1rem;\n        margin-right: calc(1rem + 10vw);\n\n        -webkit-filter: drop-shadow(5px 5px 5px #222);\n        filter: drop-shadow(5px 5px 5px #222);\n\n        transition: .4s .2s ease-out;\n        transform: translateY(10px) rotate(-360deg);\n        opacity: 0;\n    }\n    .moon-icon-show {\n        transform: translateY(0) rotate(0);\n        opacity: 1;\n    }\n    .show-menu  {\n        transform: scale(30);\n    }\n    /*\n    .burger-menu-icon {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 103;\n\n        width: 50px;\n        height: 50px;\n        margin: 1.5rem;\n        margin-right: calc(1.5rem + 10vw);\n        : opacity  .4s .4s ease-out;\n        opacity: 0;\n\n        pointer-events: none;\n    }\n    .burger-menu-icon-show {\n        opacity: 1;\n    }\n    */\n    .close {\n        position: fixed;\n        top: 0;\n        right: 0;\n        z-index: 102;\n\n        width: 50px;\n        height: 50px;\n        margin: 1.5rem;\n        margin-right: calc(1.5rem + 10vw);\n\n        transition: all .4s .6s ease-out;\n        opacity: 0;\n        transform:  rotate(365deg);\n\n        pointer-events: none;\n\n    }\n    .close-show {\n        opacity: 1;\n        transform: rotate(0);\n        pointer-events: all;\n       \n    }\n    .overlay  {\n        position: fixed;\n        inset: 0;\n        z-index: 101;\n\n        width: 100wv;\n        height: 100vh;\n        background-color: rgba(0,0,0,.8);\n        \n        display: flex;\n        justify-content: flex-end;\n        align-items: 50%;\n\n        transition: opacity  .4s .4s ease-out;\n        opacity: 0;\n\n        pointer-events: none;\n       \n        \n    }\n    .overlay-show {\n        opacity: 1;\n      \n    }\n    nav {\n        height: 90vh;\n        padding: 2rem;\n\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        padding: 12rem 12rem; 6rem 0;\n    }\n\n    a {\n        font-family: var(--heading-font-face);\n        font-weight: 900;\n        font-size: 5rem;\n        text-decoration: none;\n        color: var(--general-font-color);\n        letter-spacing: 10px;\n\n        transition: transform .8s .8s ease-out;\n        transform: rotateX(90deg);\n        transform-origin:  center bottom\n        \n    }\n    a:hover {\n        color:#ff5722;\n    }\n\n    .items-shown {\n        cursor: pointer;\n        pointer-events: all;\n        transform: rotateX(0);\n    }\n\n\n\n\n\n    /*\n        MEDIAQUERYS\n    */\n        @media only screen and (max-width: 1200px) {\n     \n        }\n        \n        /* Large (large laptop) */\n        @media only screen and (max-width: 992px) {\n            .moon-icon {\n                margin-right: 1rem;\n            }\n            .close{\n                margin-right: 1.5rem;\n            }\n        }\n        \n        /* Medium (small laptop) */\n        @media only screen and (max-width: 768px) {\n            .overlay {\n                justify-content: center;\n            }\n        }\n        \n        /* Extra small (mobile) */\n        @media only screen and (max-width: 552px) {\n            \n            a {\n                letter-spacing: 4px;\n            }\n        }\n\n\n    </style>\n    <img class="moon-icon moon-icon-show">\n   \x3c!-- <img class="burger-menu-icon burger-menu-icon-show"> --\x3e\n    <img class="close">\n    <div class="overlay">\n        <nav class="menu-list">\n            <a href="/" class="menu-item">Home</a>\n            <a href="./om-foreningen.html">Om</a>\n            <a href="./artikler.html">Artikler</a>\n            <a href="./projekter.html">Projekter</a>\n            <a href="./forestillinger.html">Forestillinger</a>\n            <a href="./shop.html">Shop</a>\n        </nav>\n    </div>\n    ';var f=function(e){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&l(n,t)}(m,e);var i,c,f,p,d=(f=m,p=a(),function(){var n,t=s(f);if(p){var e=s(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return function(n,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(this,n)});function m(){var n;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),n=d.call(this);var t=u.content;return n.attachShadow({mode:"open"}).appendChild(t.cloneNode(!0)),n.menuOpen=!1,n.navMenu,n}return i=m,c=[{key:"config",get:function(){return this._config},set:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=n}},{key:"connectedCallback",value:function(){var e,o=document.querySelector("body"),r=this.shadowRoot.querySelector(".moon-icon");r.src=n;var i=this.shadowRoot.querySelector(".close");i.src=t;var c=this.shadowRoot.querySelector(".overlay"),a=this.shadowRoot.querySelectorAll("a");window.addEventListener("scroll",(function(){window.clearTimeout(e),r.classList.remove("moon-icon-show"),e=setTimeout((function(){console.log("scrolling has stopped"),r.classList.add("moon-icon-show")}),100)})),r.addEventListener("click",(function(){o.style.overflow="hidden",r.classList.add("show-menu"),i.classList.add("close-show"),c.classList.add("overlay-show"),a.forEach((function(n){return n.classList.add("items-shown")}))})),i.addEventListener("click",(function(){o.style.overflow="unset",r.classList.remove("show-menu"),i.classList.remove("close-show"),c.classList.remove("overlay-show"),a.forEach((function(n){return n.classList.remove("items-shown")}))}))}},{key:"render",value:function(){}}],c&&r(i.prototype,c),Object.defineProperty(i,"prototype",{writable:!1}),m}(i(HTMLElement));customElements.define("ph-moon-menu",f),e(5997),e(1758),e.p,e.p,e.p;const p=e.p+"c1fdc557ba404223890e.jpg",d=(e.p,e.p,e.p,e.p+"bcf645a7a19a6eeb1384.jpg"),m=e.p+"caf1a4b7fa4ca7d7585a.jpg";e.p,e.p,window.addEventListener("DOMContentLoaded",(function(){document.querySelector("ph-image-card#card1").config={topImageUrl:d,cardBackground:"linear-gradient(to bottom right, rgba(255, 192, 203, 0.7), transparent)",cardTextColor:"white"},document.querySelector("ph-image-card#card2").config={topImageUrl:p,cardBackground:"linear-gradient(to bottom right,#cea6bf, #151b1f)",cardTextColor:""},document.querySelector("ph-image-card#card3").config={topImageUrl:m,cardBackground:"linear-gradient(to bottom right, #93754e, #623519)",cardTextColor:""}}))})()})();