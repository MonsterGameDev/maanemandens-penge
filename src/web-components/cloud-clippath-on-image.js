const imageClippedTemplate = document.createElement('template');
imageClippedTemplate.innerHTML = `
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
    </style>
    `


const cloud1 = `<svg viewBox="0 0 755 513" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <clipPath id="shape">
                <path d="M172.884386,128.964385 C175.08523,82.0364402 212.255993,47.7088382 292.048744,73.6354817 C369.021441,-19.5588228 538.620636,18.2032086 568.975511,114.088648 C752.669363,108.095121 735.870897,326.264851 604.561059,337.613766 C600.497453,372.919676 566.118746,404.282318 493.277276,384.41686 C433.396542,457.342791 269.383887,453.171817 247.598946,337.613766 C59.5887971,423.253054 -44.7685457,149.095448 172.884386,128.964385 Z" id="path-1"></path>
            </clipPath>
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
        <image width="755" height="450" clip-path="url(#shape)"  xlink:href="" id="image"></image>
    </svg>`


    ;

class ClippedImage extends HTMLElement {

    set config(val = {}) {
        this._config = val;
        this.render();
    }

    get config() {
        return this._config;
    }

    constructor() {
        super();

    }

    render() {
        switch (this._config.clipPath) {
            case 'cloud1':
                imageClippedTemplate.innerHTML += cloud1;
                break;
            default:
                break;

        }

        const templateContent = imageClippedTemplate.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));


        const img1 = this.shadowRoot.getElementById('image');
        img1.setAttribute('xlink:href', this._config.imageUrl)


    }
    connectedCallback() {
        console.log('connected callback')
    }
}

customElements.define('ph-image-clipped', ClippedImage);
