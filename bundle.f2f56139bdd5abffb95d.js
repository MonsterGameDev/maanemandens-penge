(()=>{var e={2346:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function n(e){var t="function"==typeof Map?new Map:void 0;return n=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return r(e,arguments,l(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,e)},n(e)}function r(e,t,n){return r=o()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var a=document.createElement("template");a.innerHTML="\n    <style>\n        * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n        }\n        :host {\n        display: inline-block;\n        width: 100%;\n        height: 100%;\n        }  \n    </style>\n    ";var u=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(p,n);var r,u,s,f,c=(s=p,f=o(),function(){var t,n=l(s);if(f){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,t)});function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),c.call(this)}return r=p,u=[{key:"config",get:function(){return this._config},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=e,this.render()}},{key:"render",value:function(){switch(this._config.clipPath){case"cloud1":a.innerHTML+='<svg viewBox="0 0 755 513" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <defs>\n            <clipPath id="shape">\n                <path d="M172.884386,128.964385 C175.08523,82.0364402 212.255993,47.7088382 292.048744,73.6354817 C369.021441,-19.5588228 538.620636,18.2032086 568.975511,114.088648 C752.669363,108.095121 735.870897,326.264851 604.561059,337.613766 C600.497453,372.919676 566.118746,404.282318 493.277276,384.41686 C433.396542,457.342791 269.383887,453.171817 247.598946,337.613766 C59.5887971,423.253054 -44.7685457,149.095448 172.884386,128.964385 Z" id="path-1"></path>\n            </clipPath>\n            <filter x="-13.8%" y="-14.5%" width="127.5%" height="143.6%" filterUnits="objectBoundingBox" id="filter-2">\n                <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n                <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n                <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n            </filter>\n        </defs>\n        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Path-2">\n        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>\n        <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n    </g>\n</g>\n        <image width="755" height="450" clip-path="url(#shape)"  xlink:href="" id="image"></image>\n</svg>';break;case"cloud2":a.innerHTML+='<svg viewBox="0 0 1031 682" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <clipPath id="shape">\n            <path d="M249.991221,206.741046 C254.290112,-68.2917628 595.481373,13.3674599 612.179959,118.127621 C701.350956,66.7583773 790.650734,96.8961452 829.021189,206.741046 C1016.68068,150.25584 1046.10515,464.231902 829.021189,420.048138 C799.146369,597.088643 639.1576,553.626563 601.608529,502.358648 C554.263689,540.801815 518.068459,526.771088 485.016503,519.798435 C355.831878,694.971992 178.886153,545.26583 181.907458,457.113113 C-35.779044,423.798429 36.3343414,113.959383 249.991221,206.741046 Z" id="path-1"></path>\n        </clipPath>\n        <filter x="-9.7%" y="-10.3%" width="119.3%" height="131.0%" filterUnits="objectBoundingBox" id="filter-3">\n            <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n            <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n    </defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <mask id="mask-2" fill="white">\n            <use xlink:href="#path-1"></use>\n        </mask>\n        <g id="Path">\n            <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-1"></use>\n            <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n        </g>\n    </g>\n    <image width="1070" clip-path="url(#shape)"  xlink:href="" id="image"></image>\n</svg>';break;case"cloud3":a.innerHTML+='<svg viewBox="0 0 902 495" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n    <clipPath id="shape">   \n        <path d="M121.581618,402.377948 C-15.3156689,428.10906 -60.5767934,196.228273 113.014141,186.046326 C111.386589,-48.4504072 432.872144,-60.7680858 471.804176,146.227418 C563.103777,118.19939 641.714382,134.87413 695.755746,237.3831 C910.239775,230.971544 799.048813,520.1188 655.58506,420.324258 C609.212108,471.73043 499.227537,483.005693 431.454927,426.996369 C413.409821,448.684073 383.164161,484.551747 306.837697,448.114656 C256.543891,502.179107 155.898111,525.611977 121.581618,402.377948 Z" id="path-1"></path>\n    </clipPath>\n    <filter x="-11.0%" y="-12.2%" width="122.1%" height="136.6%" filterUnits="objectBoundingBox" id="filter-3">\n        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n    </filter>\n</defs>\n<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Artboard-Copy-12" transform="translate(-298.000000, -2100.000000)">\n        <g id="Group-8" transform="translate(60.000000, 2120.000000)">\n            <g id="Group-6" transform="translate(288.598192, 0.000000)">\n                <mask id="mask-2" fill="white">\n                    <use xlink:href="#path-1"></use>\n                </mask>\n                <g id="Path-4">\n                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-1"></use>\n                    <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n                </g>\n            </g>\n        </g>\n    </g>\n</g>\n<image width="904" clip-path="url(#shape)"  xlink:href="" id="image"></image>\n</svg>';break;case"cloud4":a.innerHTML+='<svg viewBox="0 0 707 376" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n    <clipPath id="shape">\n        <path d="M121.87677,381 C249.540842,380.427039 490.425508,381.196886 564.850683,380.126179 C627.241626,363.944675 613.64195,265.026571 561.727051,265.228735 C569.390125,177.38212 532.97725,153.379708 458.178863,142.619449 C488.07836,-19.2474078 271.895162,-46.0438332 231.3698,76.1560958 C184.079518,41.3426437 102.528835,56.6754287 101.321879,142.619449 C-49.5004511,197.926857 -23.0402807,362.994873 121.87677,381 Z" id="path-1"></path>\n    </clipPath>\n    <filter x="-14.8%" y="-15.7%" width="129.7%" height="147.2%" filterUnits="objectBoundingBox" id="filter-2">\n        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n    </filter>\n</defs>\n<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Artboard-Copy-12" transform="translate(-10.000000, -2313.000000)">\n        <g id="Group-8" transform="translate(60.000000, 2120.000000)">\n            <g id="Path-3" transform="translate(0.000000, 213.000000)">\n                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>\n                <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n            </g>\n        </g>\n    </g>\n</g>\n<image width="707" clip-path="url(#shape)"  xlink:href="" id="image"></image>\n</svg>'}var e=a.content;this.attachShadow({mode:"open"}).appendChild(e.cloneNode(!0)),this.shadowRoot.getElementById("image").setAttribute("xlink:href",this._config.imageUrl)}},{key:"connectedCallback",value:function(){}}],u&&t(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),p}(n(HTMLElement));customElements.define("ph-image-clipped",u)},745:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function n(e){var t="function"==typeof Map?new Map:void 0;return n=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return r(e,arguments,l(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,e)},n(e)}function r(e,t,n){return r=o()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var a=document.createElement("template");a.innerHTML='\n    <style>\n        * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n        }\n        :host {\n        display: inline-block;\n        width: 100%;\n        height: 100%;\n        }\n        .text-layer {\n            position: absolute;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            height: 100%;\n            margin-top: -1.8vw;\n        }\n        .heading {\n            font-size: 3vw;\n            text-transform: uppercase;\n            margin-bottom: 1.3vw;\n            font-family: var(--cloud-text-heading);\n            font-weight: 100;\n        }\n        .body {\n            width: 70%;\n            margin-bottom: 1.5vw;\n            text-align: center;\n            font-size: 1.15vw;\n            font-weight:normal;\n            font-family: var(--cloud-text-body);\n        }\n        .cta {}\n    </style>\n    <div class="text-layer">\n        <h2 class="heading"><slot name="heading"></slot></h2>\n        <div class="body"><slot name="body"></slot></div>\n        <div class="cta"><slot name="cta"></slot></div>\n    </div>\n    ';var u=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(p,n);var r,u,s,f,c=(s=p,f=o(),function(){var t,n=l(s);if(f){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,t)});function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),c.call(this)}return r=p,u=[{key:"config",get:function(){return this._config},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=e,this.render()}},{key:"render",value:function(){switch(this._config.clipPath){case"cloud1":a.innerHTML+='<svg viewBox="0 0 755 513" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n    <path d="M172.884386,128.964385 C175.08523,82.0364402 212.255993,47.7088382 292.048744,73.6354817 C369.021441,-19.5588228 538.620636,18.2032086 568.975511,114.088648 C752.669363,108.095121 735.870897,326.264851 604.561059,337.613766 C600.497453,372.919676 566.118746,404.282318 493.277276,384.41686 C433.396542,457.342791 269.383887,453.171817 247.598946,337.613766 C59.5887971,423.253054 -44.7685457,149.095448 172.884386,128.964385 Z" id="path-1"></path>\n    <filter x="-13.8%" y="-14.5%" width="127.5%" height="143.6%" filterUnits="objectBoundingBox" id="filter-2">\n        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n    </filter>\n</defs>\n<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Path-2">\n        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>\n        <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n    </g>\n</g>\n</svg>';break;case"cloud2":a.innerHTML+='<svg viewBox="0 0 1031 682" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <path d="M249.991221,206.741046 C254.290112,-68.2917628 595.481373,13.3674599 612.179959,118.127621 C701.350956,66.7583773 790.650734,96.8961452 829.021189,206.741046 C1016.68068,150.25584 1046.10515,464.231902 829.021189,420.048138 C799.146369,597.088643 639.1576,553.626563 601.608529,502.358648 C554.263689,540.801815 518.068459,526.771088 485.016503,519.798435 C355.831878,694.971992 178.886153,545.26583 181.907458,457.113113 C-35.779044,423.798429 36.3343414,113.959383 249.991221,206.741046 Z" id="path-1"></path>\n        <filter x="-9.7%" y="-10.3%" width="119.3%" height="131.0%" filterUnits="objectBoundingBox" id="filter-3">\n            <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n            <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n            <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n        </filter>\n    </defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <mask id="mask-2" fill="white">\n            <use xlink:href="#path-1"></use>\n        </mask>\n        <g id="Path">\n            <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-1"></use>\n            <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n        </g>\n    </g>\n</svg>';break;case"cloud3":a.innerHTML+='<svg viewBox="0 0 902 570" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<title>Path 4</title>\n<defs>\n    <path d="M121.581618,402.377948 C-15.3156689,428.10906 -60.5767934,196.228273 113.014141,186.046326 C111.386589,-48.4504072 432.872144,-60.7680858 471.804176,146.227418 C563.103777,118.19939 641.714382,134.87413 695.755746,237.3831 C910.239775,230.971544 799.048813,520.1188 655.58506,420.324258 C609.212108,471.73043 499.227537,483.005693 431.454927,426.996369 C413.409821,448.684073 383.164161,484.551747 306.837697,448.114656 C256.543891,502.179107 155.898111,525.611977 121.581618,402.377948 Z" id="path-1"></path>\n    <filter x="-11.0%" y="-12.2%" width="122.1%" height="136.6%" filterUnits="objectBoundingBox" id="filter-3">\n        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n    </filter>\n</defs>\n<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Artboard-Copy-12" transform="translate(-298.000000, -2100.000000)">\n        <g id="Group-8" transform="translate(60.000000, 2120.000000)">\n            <g id="Group-6" transform="translate(288.598192, 0.000000)">\n                <mask id="mask-2" fill="white">\n                    <use xlink:href="#path-1"></use>\n                </mask>\n                <g id="Path-4">\n                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-1"></use>\n                    <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n                </g>\n            </g>\n        </g>\n    </g>\n</g>\n</svg>';break;case"cloud4":a.innerHTML+='<svg viewBox="0 0 707 460" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n    <path d="M121.87677,381 C249.540842,380.427039 490.425508,381.196886 564.850683,380.126179 C627.241626,363.944675 613.64195,265.026571 561.727051,265.228735 C569.390125,177.38212 532.97725,153.379708 458.178863,142.619449 C488.07836,-19.2474078 271.895162,-46.0438332 231.3698,76.1560958 C184.079518,41.3426437 102.528835,56.6754287 101.321879,142.619449 C-49.5004511,197.926857 -23.0402807,362.994873 121.87677,381 Z" id="path-1"></path>\n    <filter x="-14.8%" y="-15.7%" width="129.7%" height="147.2%" filterUnits="objectBoundingBox" id="filter-2">\n        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>\n        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>\n        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n    </filter>\n</defs>\n<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Artboard-Copy-12" transform="translate(-10.000000, -2313.000000)">\n        <g id="Group-8" transform="translate(60.000000, 2120.000000)">\n            <g id="Path-3" transform="translate(0.000000, 213.000000)">\n                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>\n                <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>\n            </g>\n        </g>\n    </g>\n</g>\n</svg>'}var e=a.content;this.attachShadow({mode:"open"}).appendChild(e.cloneNode(!0))}}],u&&t(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),p}(n(HTMLElement));customElements.define("ph-text-cloud",u)},5377:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function n(e){var t="function"==typeof Map?new Map:void 0;return n=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return r(e,arguments,l(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,e)},n(e)}function r(e,t,n){return r=o()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var a=document.createElement("template");a.innerHTML="\n    <style>\n        * {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n        :host {\n            display: inline-block;\n            width: 100%;\n            height: 100%;\n        }\n        button {\n            padding: 1vw 2vw;\n            background:#FDCC00;\n            box-shadow: 0 1vw 1vw rgb(0 0 0 / 0.2);\n            color:#0D101D;\n            font-size: 1.7vw;\n            border-radius: 100px 100px;\n            font-family: var(--cta-button-font);\n            letter-spacing: .2vw;\n            border: 0;\n        }\n    </style>\n    <button><slot></slot></button>";var u=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(p,n);var r,u,s,f,c=(s=p,f=o(),function(){var t,n=l(s);if(f){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,t)});function p(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),e=c.call(this);var t=a.content;return e.attachShadow({mode:"open"}).appendChild(t.cloneNode(!0)),e}return r=p,u=[{key:"config",get:function(){return this._config},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=e,console.log("in config"),this.render()}},{key:"render",value:function(){}}],u&&t(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),p}(n(HTMLElement));customElements.define("ph-cta-button",u)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";n(2346),n(745),n(5377);var e=[{transform:"translate3d(0, -100px, 0)"},{transform:"translate3d(0, 0, 0)"}],t={duration:500,direction:"alternate",easing:"cubic-bezier(.5, 0.05, 1, .5)",iterations:1/0};n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p;const r=n.p+"7348d2af6db213309491.jpg",o=(n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p+"dbb45ba55ea8bfaae86b.png"),i=n.p+"a3023654ac55b383f853.svg",l=n.p+"f540e4c45c07177abbed.png";window.addEventListener("DOMContentLoaded",(function(){document.getElementById("logo").src=o,document.getElementById("full-moon").src=i;var n,a=document.getElementById("scroll-hand");a.src=l,(n=a,new Animation(function(n){return new KeyframeEffect(n,e,t)}(n))).play(),new IntersectionObserver((function(e,t){return e.forEach((function(e){e.isIntersecting&&a.classList.add("hide")}))}),{rootMargin:"0px",threshold:.1}).observe(document.querySelector(".second-deck")),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&a.classList.remove("hide")}))}),{threshold:.91}).observe(document.querySelector(".first-deck")),document.querySelector("ph-image-clipped").config={imageUrl:r,clipPath:"cloud2"},document.querySelector("ph-text-cloud").config={clipPath:"cloud1"}}));var a=document.querySelector(".top-curtain"),u=document.querySelector(".left-curtain"),s=document.querySelector(".right-curtain");window.addEventListener("scroll",(function(e){var t=window.scrollY;u.style.transform="translateX(-".concat(t,"px)"),s.style.transform="scaleX(-1) translateX(-".concat(t,"px)"),a.style.transform="translateY(-".concat(t-60,"px)")}))})()})();