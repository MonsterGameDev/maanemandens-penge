/*
**PROPERTIES
config = { 
    clipPath: cloud1 | cloud2 | cloud3 | cloud4
}   imageUrl: string
**ATTRIBUTES
**SLOTS
**CSS-PROPS


*/

const imageClippedTemplate = document.createElement('template');



const cloud1 = `<svg viewBox="0 0 755 513" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <clipPath id="shape">
                <path d="M172.884386,128.964385 C175.08523,82.0364402 212.255993,47.7088382 292.048744,73.6354817 C369.021441,-19.5588228 538.620636,18.2032086 568.975511,114.088648 C752.669363,108.095121 735.870897,326.264851 604.561059,337.613766 C600.497453,372.919676 566.118746,404.282318 493.277276,384.41686 C433.396542,457.342791 269.383887,453.171817 247.598946,337.613766 C59.5887971,423.253054 -44.7685457,149.095448 172.884386,128.964385 Z" id="path-1"></path>
            </clipPath>
        </defs>
        <image width="755" height="450" clip-path="url(#shape)"  xlink:href="" id="image"></image>
</svg>`;

const cloud2 = `<svg viewBox="0 0 1031 682" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <clipPath id="shape">
            <path d="M249.991221,206.741046 C254.290112,-68.2917628 595.481373,13.3674599 612.179959,118.127621 C701.350956,66.7583773 790.650734,96.8961452 829.021189,206.741046 C1016.68068,150.25584 1046.10515,464.231902 829.021189,420.048138 C799.146369,597.088643 639.1576,553.626563 601.608529,502.358648 C554.263689,540.801815 518.068459,526.771088 485.016503,519.798435 C355.831878,694.971992 178.886153,545.26583 181.907458,457.113113 C-35.779044,423.798429 36.3343414,113.959383 249.991221,206.741046 Z" id="path-1"></path>
        </clipPath>
    </defs>

    <image width="1070" clip-path="url(#shape)"  xlink:href="" id="image"></image>
</svg>`;

const cloud3 = `<svg viewBox="0 0 902 495" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
    <clipPath id="shape">   
        <path d="M121.581618,402.377948 C-15.3156689,428.10906 -60.5767934,196.228273 113.014141,186.046326 C111.386589,-48.4504072 432.872144,-60.7680858 471.804176,146.227418 C563.103777,118.19939 641.714382,134.87413 695.755746,237.3831 C910.239775,230.971544 799.048813,520.1188 655.58506,420.324258 C609.212108,471.73043 499.227537,483.005693 431.454927,426.996369 C413.409821,448.684073 383.164161,484.551747 306.837697,448.114656 C256.543891,502.179107 155.898111,525.611977 121.581618,402.377948 Z" id="path-1"></path>
    </clipPath>
</defs>
<image width="904" clip-path="url(#shape)"  xlink:href="" id="image"></image>
</svg>`;

const cloud4 = `<svg viewBox="0 0 707 376" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
    <clipPath id="shape">
        <path d="M121.87677,381 C249.540842,380.427039 490.425508,381.196886 564.850683,380.126179 C627.241626,363.944675 613.64195,265.026571 561.727051,265.228735 C569.390125,177.38212 532.97725,153.379708 458.178863,142.619449 C488.07836,-19.2474078 271.895162,-46.0438332 231.3698,76.1560958 C184.079518,41.3426437 102.528835,56.6754287 101.321879,142.619449 C-49.5004511,197.926857 -23.0402807,362.994873 121.87677,381 Z" id="path-1"></path>
    </clipPath>
</defs>

<image width="707" clip-path="url(#shape)"  xlink:href="" id="image"></image>
</svg>`;


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
        this.imageClippedTemplate = document.createElement('template');
        this.imageClippedTemplate.innerHTML = `
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
            svg {
               filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 54px 55px)   drop-shadow(rgba(0, 0, 0, 0.12) 0px 4px 6px) drop-shadow(rgba(0, 0, 0, 0.17) 0px 12px 13px) drop-shadow( rgba(0, 0, 0, 0.09) 0px -3px 5px);
            }
        </style>
        `

    }

    render() {

        console.log('render', imageClippedTemplate.innerHTML)
        switch (this._config.clipPath) {
            case 'cloud1':
                // console.log('cloud1: ', imageClippedTemplate.innerHTML);
                // console.log('***************************')
                this.imageClippedTemplate.innerHTML += cloud1;
                // console.log('cloud1: ', imageClippedTemplate.innerHTML);
                break;
            case 'cloud2':
                // console.log('cloud2: ', imageClippedTemplate.innerHTML);
                // console.log('***************************')
                this.imageClippedTemplate.innerHTML += cloud2;
                // console.log('cloud2: ', imageClippedTemplate.innerHTML);
                break;
            case 'cloud3':
                // console.log('cloud3: ', imageClippedTemplate.innerHTML);
                // console.log('***************************')
                this.imageClippedTemplate.innerHTML += cloud3;
                //console.log('cloud3: ', imageClippedTemplate.innerHTML);
                break;
            case 'cloud4':
                // console.log('cloud4: ', imageClippedTemplate.innerHTML);
                // console.log('***************************')
                this.imageClippedTemplate.innerHTML += cloud4;
                // console.log('cloud4: ', imageClippedTemplate.innerHTML);
                break;
            default:
                break;

        }

        const templateContent = this.imageClippedTemplate.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));


        const img1 = this.shadowRoot.getElementById('image');
        img1.setAttribute('xlink:href', this._config.imageUrl)


    }
    connectedCallback() {

    }
}

customElements.define('ph-image-clipped', ClippedImage);
