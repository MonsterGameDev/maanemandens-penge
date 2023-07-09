/*
**PROPERTIES
config = { 
    clipPath: cloud1 | cloud2 | cloud3 | cloud4
}  
**ATTRIBUTES
**SLOTS
 - heading
 - body
 - cta
**CSS-PROPS
--cloud-text-heading (font-family)
--cloud-text-body (font-family)
*/




const cloud1 = `<svg viewBox="0 0 755 513" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
    <path d="M172.884386,128.964385 C175.08523,82.0364402 212.255993,47.7088382 292.048744,73.6354817 C369.021441,-19.5588228 538.620636,18.2032086 568.975511,114.088648 C752.669363,108.095121 735.870897,326.264851 604.561059,337.613766 C600.497453,372.919676 566.118746,404.282318 493.277276,384.41686 C433.396542,457.342791 269.383887,453.171817 247.598946,337.613766 C59.5887971,423.253054 -44.7685457,149.095448 172.884386,128.964385 Z" id="path-1"></path>
    <filter x="-13.8%" y="-14.5%" width="127.5%" height="143.6%" filterUnits="objectBoundingBox" id="filter-2">
        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
    </filter>
</defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Path-2">
        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
        <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
    </g>
</g>
</svg>`

const cloud2 = `<svg viewBox="0 0 1031 682" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M249.991221,206.741046 C254.290112,-68.2917628 595.481373,13.3674599 612.179959,118.127621 C701.350956,66.7583773 790.650734,96.8961452 829.021189,206.741046 C1016.68068,150.25584 1046.10515,464.231902 829.021189,420.048138 C799.146369,597.088643 639.1576,553.626563 601.608529,502.358648 C554.263689,540.801815 518.068459,526.771088 485.016503,519.798435 C355.831878,694.971992 178.886153,545.26583 181.907458,457.113113 C-35.779044,423.798429 36.3343414,113.959383 249.991221,206.741046 Z" id="path-1"></path>
        <filter x="-9.7%" y="-10.3%" width="119.3%" height="131.0%" filterUnits="objectBoundingBox" id="filter-3">
            <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <mask id="mask-2" fill="white">
            <use xlink:href="#path-1"></use>
        </mask>
        <g id="Path">
            <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-1"></use>
            <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
        </g>
    </g>
</svg>`;

const cloud3 = `<svg viewBox="0 0 902 570" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Path 4</title>
<defs>
    <path d="M121.581618,402.377948 C-15.3156689,428.10906 -60.5767934,196.228273 113.014141,186.046326 C111.386589,-48.4504072 432.872144,-60.7680858 471.804176,146.227418 C563.103777,118.19939 641.714382,134.87413 695.755746,237.3831 C910.239775,230.971544 799.048813,520.1188 655.58506,420.324258 C609.212108,471.73043 499.227537,483.005693 431.454927,426.996369 C413.409821,448.684073 383.164161,484.551747 306.837697,448.114656 C256.543891,502.179107 155.898111,525.611977 121.581618,402.377948 Z" id="path-1"></path>
    <filter x="-11.0%" y="-12.2%" width="122.1%" height="136.6%" filterUnits="objectBoundingBox" id="filter-3">
        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
    </filter>
</defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Artboard-Copy-12" transform="translate(-298.000000, -2100.000000)">
        <g id="Group-8" transform="translate(60.000000, 2120.000000)">
            <g id="Group-6" transform="translate(288.598192, 0.000000)">
                <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                </mask>
                <g id="Path-4">
                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-1"></use>
                    <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                </g>
            </g>
        </g>
    </g>
</g>
</svg>`

const cloud4 = `<svg viewBox="0 0 707 460" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
    <path d="M121.87677,381 C249.540842,380.427039 490.425508,381.196886 564.850683,380.126179 C627.241626,363.944675 613.64195,265.026571 561.727051,265.228735 C569.390125,177.38212 532.97725,153.379708 458.178863,142.619449 C488.07836,-19.2474078 271.895162,-46.0438332 231.3698,76.1560958 C184.079518,41.3426437 102.528835,56.6754287 101.321879,142.619449 C-49.5004511,197.926857 -23.0402807,362.994873 121.87677,381 Z" id="path-1"></path>
    <filter x="-14.8%" y="-15.7%" width="129.7%" height="147.2%" filterUnits="objectBoundingBox" id="filter-2">
        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
        <feOffset dx="0" dy="30" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.217274913 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
    </filter>
</defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Artboard-Copy-12" transform="translate(-10.000000, -2313.000000)">
        <g id="Group-8" transform="translate(60.000000, 2120.000000)">
            <g id="Path-3" transform="translate(0.000000, 213.000000)">
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
        </g>
    </g>
</g>
</svg>`



class TextCloud extends HTMLElement {
    set config(val = {}) {
        this._config = val;
        this.render();
    }

    get config() {
        return this._config;
    }

    constructor() {
        super();

        this.textCloudTemplate = document.createElement('template');
        this.textCloudTemplate.innerHTML = `
    <style>
        * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        }
        :host {
        display: inline-block;
        width: 100%;
        height: 100%;
        }
        .text-layer {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            margin-top: -1.8vw;
        }
        .heading {
            font-size: 3vw;
            text-transform: uppercase;
            margin-bottom: 1.2vw;
            font-family: var(--cloud-text-heading);
            font-weight: 100;
        }
        .body {
            width: 70%;
            margin-bottom: 1.5vw;
            text-align: center;
            font-size: 1.3vw;
            font-weight:normal;
            font-family: var(--cloud-text-body);
        }
        .cta {}

        /* CLOUD 1 */
        .text-layer-cloud1 {
            margin-top: -1vw;
            margin-left: 1vw;
           
        }
        .heading-cloud1 {
            margin-bottom: 2.2vw;
            margin-left: -3vw
        }
        .body-cloud1 {
            margin-bottom: 2.2vw;
            margin-left: 0vw;
        }
        /* CLOUD 2 */
        .text-layer-cloud2 {
            margin-top: 0vw;
        }
        .heading-cloud2 {
            margin-bottom: 2.2vw;
            margin-left: -3vw
        }
        .body-cloud2 {
            margin-bottom: 2.2vw;
            margin-left: -4vw;
        }

        /* CLOUD 3 */
        .text-layer-cloud3 {
            margin-top: 3vw;
        }
        .heading-cloud3 {
            margin-bottom: 2.2vw;
            margin-left: -12vw
        }
        .body-cloud3 {
            margin-bottom: 2.2vw;
            margin-left: -4vw;
        }

        /* CLOUD 4 */
        .text-layer-cloud4 {
            margin-top: 5vw;
        }
        .heading-cloud4 {
            margin-bottom: 2.2vw;
            margin-left: -3vw
        }
        .body-cloud4 {
            margin-bottom: 2.2vw;
            margin-left: -4vw;
        }

       


    </style>
    <div class="text-layer">
        <h2 class="heading"><slot name="heading"></slot></h2>
        <div class="body"><slot name="body"></slot></div>
        <div class="cta"><slot name="cta"></slot></div>
    </div>
    `
    }


    render() {
        switch (this._config.clipPath) {
            case 'cloud1':
                this.textCloudTemplate.innerHTML += cloud1;
                break;
            case 'cloud2':
                this.textCloudTemplate.innerHTML += cloud2;
                break;
            case 'cloud3':
                this.textCloudTemplate.innerHTML += cloud3;
                break;
            case 'cloud4':
                this.textCloudTemplate.innerHTML += cloud4;
                break;
            default:
                break;

        }

        const templateContent = this.textCloudTemplate.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

        switch (this._config.clipPath) {
            case 'cloud1':
                this.shadowRoot.querySelector('.text-layer').classList.add('text-layer-cloud1');
                this.shadowRoot.querySelector('.heading').classList.add('heading-cloud1');
                this.shadowRoot.querySelector('.body').classList.add('body-cloud1');
                break;
            case 'cloud2':
                this.shadowRoot.querySelector('.text-layer').classList.add('text-layer-cloud2');
                this.shadowRoot.querySelector('.heading').classList.add('heading-cloud2');
                this.shadowRoot.querySelector('.body').classList.add('body-cloud2');
                break;
            case 'cloud3':
                this.shadowRoot.querySelector('.text-layer').classList.add('text-layer-cloud3');
                this.shadowRoot.querySelector('.heading').classList.add('heading-cloud3');
                this.shadowRoot.querySelector('.body').classList.add('body-cloud3');
                break;
            case 'cloud4':
                this.shadowRoot.querySelector('.text-layer').classList.add('text-layer-cloud4');
                this.shadowRoot.querySelector('.heading').classList.add('heading-cloud4');
                this.shadowRoot.querySelector('.body').classList.add('body-cloud4');
                break;
            default:
                break;

        }
    }

}

customElements.define('ph-text-cloud', TextCloud);
