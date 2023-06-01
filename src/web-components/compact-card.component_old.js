/* 
CSS-Properties
--size-m
--size-s
--heading-font-face
--general-font-face
--compact-card-height

Input Properties
config = {
    backgroundImage: string

}
*/
const compactCard = document.createElement('template');
compactCard.innerHTML = `
<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .compact-card {
        /*height: var(--compact-card-height, 10rem);
        max-height: 15rem;*/
        background-color: orange;
        border-radius: 15px; 
        overflow: hidden;
        margin: var(--size-m, 2rem);
        background-size: cover;
       
    }  
    .text-content {
        transform: translateY(100%);
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        display: inline-block;
        padding: var(--size-m);
        opacity: 0;
        padding: var(--size-m);
        padding-bottom: 56.25%;
        transition: all .5s .1s ease-out;       
    }

    .text-content-shown {
        transform: translateY(0%);
        opacity: 1
    } 

    .card-title {
        font-family: var(--heading-font-face);
        margin: 0 0 var(--size-s, 1rem) 0;

    }

    .card-content {
        font-family: var(--general-font-face);
        position: relative;
       
    }
   

</style>
<div  class="compact-card">
    <div class="text-content">
        <h3 class="card-title"><slot name="compact-card-title"></span></h3>
        <p class="card-content"><slot name="compact-card-text"></span></p>
    </div>
</div>
`;

class CompactCardComponentOld extends HTMLElement {

    get config() {
        return this._config
    }

    set config(val) {
        if (!val) return;
        this._config = val;

        this.render();
    }
    constructor() {
        super();

        const templateContent = compactCard.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

    }

    connectedCallback() {
        this.registerEvents();
    }

    render() {
        console.log('here')
        if (!!this._config?.backgroundImage) {

            console.log('hello', this._config?.backgroundImage);
            this.shadowRoot.querySelector('.compact-card').style.backgroundImage = `url(${this._config?.backgroundImage})`;
        }
    }

    registerEvents() {
        this.shadowRoot.querySelector('.compact-card').addEventListener('mouseenter', () =>
            this.shadowRoot.querySelector('.text-content').classList.add('text-content-shown'))
        this.shadowRoot.querySelector('.compact-card').addEventListener('mouseleave', () =>
            this.shadowRoot.querySelector('.text-content').classList.remove('text-content-shown'))
    }
}

customElements.define('ph-compact-card-old', CompactCardComponentOld);