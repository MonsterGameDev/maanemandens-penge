
/*

config-properties:
    config.profileImage,
    config.mouseOverEffect  ('blur', 'grayscale'),
    

slots: 
    image-label
    testimonial-heading
    default

CSS-vars
    --circle-diameter: 100px;
    --background-color: red;
    --font-color: black;
    --font-family: Montserrat;
    --heading-font-family: Montserrat;


*/
const testimonialImageCircleTemplate = document.createElement('template');
testimonialImageCircleTemplate.innerHTML = `
<style>
    :host {
        --circle-diameter: 100px;
        --background-color: red;
        --font-color: black;
        --font-family: Montserrat;
        --heading-font-family: Montserrat;
        display: inline-block;
    }
    
    .bottom-layer {
        background: var(--background-color);
    }

    .container{
        width: 100%;
        position: relative;
        display: inline-block;
    }
    .image-container {
        float: left;
        shape-outside: circle(50%);
        width: var(--circle-diameter);
        height: var(--circle-diameter);
        margin-right: calc(0.15 * var(--circle-diameter));
    }
    .image-box {
        height: 100%;
        text-align: center;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 50%;
    }
    .pic {
        height: 98%;
        width: 98%;
        border-radius: 50%;
        overflow: hidden;
        background-size: cover;
        background-position: center center;
        transition: filter .3s ease-out;
        position: relative;
        
    }
    .blur {
        filter: blur(calc(0.02 * var(--circle-diameter)));
    }
    .remove-grayscale {
        filter: grayscale(0);
    }
    .profile-label {
        font-size: calc(0.15 * var(--circle-diameter));
        font-weight: bolder;
        font-family: var(--font-family);
        color: #eee;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        opacity: 0;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(calc(0.5 * var(--circle-diameter)));
        transition: all 0.5s;

    }
    .from-bottom {
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
    }
   
    .text-content {
        font-size: calc(0.12  * var(--circle-diameter));
        margin-top: 0.25vw;
        margin-bottom: 0;
        color: var(--font-color);
        font-family: var(--font-family);
    }
    h3 {
        margin-top: 0;
        margin-bottom: 0vw;
        font-size: calc(0.17 * var(--circle-diameter));
        color: var(--font-color);
        font-family: var(--heading-font-family);
    }


    /* Extra large (desktop) */
@media only screen and (max-width: 1200px) {
}

/* Large (large laptop) */
@media only screen and (max-width: 992px) {

}

/* Medium (small laptop) */
@media only screen and (max-width: 768px) {

}

/* Extra small (mobile) */
@media only screen and (max-width: 552px) {
    .image-container {
        float: none;
        shape-outside: none;
        width: var(--circle-diameter);
        margin: 0 auto;      
    }
}

   
</style>
<div class="aligner">
    <div class="bottom-layer">
        <div class="container">
            <div class="image-container">
                <div class="image-box">
                    <div class="pic"></div>
                    <div class="profile-label">
                        <slot name="image-label"></slot>
                    </div>
                </div>
            </div>
            <h3>
                <slot name="testimonial-heading"></slot>
            </h3>
            <p class="text-content">
                <slot></slot>
            </p>
        </div>
    </div>
</div>
`;


class TestimonialImageCircle extends HTMLElement {
    get config() {
        return this._config
    }

    set config(val) {
        if (!val) return;
        this._config = val;
        this.render()
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // INIT
        const templateContent = testimonialImageCircleTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true))

        this.imgContainer = this.shadowRoot.querySelector('.pic');

        this._config = {}

    }

    render() {
        this.imgContainer.style.backgroundImage = `url(${this._config.profileImage})`;

        const eventZone = this.shadowRoot.querySelector('.container');
        const imageCircle = this.shadowRoot.querySelector('.pic');
        const profileLabel = this.shadowRoot.querySelector('.profile-label');

        this.removeGrayscale = () => {
            imageCircle.style.filter = 'grayscale(0)';
            profileLabel.classList.add('from-bottom')
        };
        this.addGrayscale = () => {
            imageCircle.style.filter = 'grayscale(100%)';
            profileLabel.classList.remove('from-bottom')
        };
        this.addBlur = () => {
            imageCircle.classList.add('blur')
            profileLabel.classList.add('from-bottom');
        };
        this.removeBlur = () => {
            imageCircle.classList.remove('blur');
            profileLabel.classList.remove('from-bottom');
        };

        let fnAddEffect;
        let fnRemoveEffect;
        switch (this._config.mouseOverEffect) {
            case 'blur':
                fnAddEffect = this.addBlur;
                fnRemoveEffect = this.removeBlur;
                break;
            case 'grayscale':
                // make image bw initially
                imageCircle.style.filter = 'grayscale(100%)';
                fnAddEffect = this.removeGrayscale
                fnRemoveEffect = this.addGrayscale
                break;
            default:
                fnAddEffect = fnRemoveEffect = () => { };
                break;
        }

        eventZone.addEventListener('mouseenter', fnAddEffect);
        eventZone.addEventListener('mouseleave', fnRemoveEffect);
    };

}

window.customElements.define('ph-testimonial-image-circle', TestimonialImageCircle);