const compactCard = document.createElement('template');
compactCard.innerHTML = `
<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    

    .compact-card {
        
        max-height: 15rem;
        background-color: orange;
        border-radius: 15px; 
        overflow: hidden;
        padding: var(--size-m, 2rem);
        margin: var(--size-m, 2rem);
    }   

    .card-title {
        font-family: var(--heading-font-face);
        margin: 0 0 var(--size-s, 1rem) 0;

    }

    .card-content {
        font-family: var(--general-font-face);

    }
</style>
<div  class="compact-card">
    <h3 class="card-title"><slot name="compact-card-title"></span></h3>
    <p class="card-content"><slot name="compact-card-text"></span></p>
</div>
`;

class CompactCardComponent extends HTMLElement {

    get config() {
        return this._config
    }

    set config(val) {
        if (!val) return;
        this._config = val;
    }
    constructor() {
        super();

        const templateContent = compactCard.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

    }

    connectedCallback() {
        this.registerEvents();

        if (!!this._config?.backgroundImage) {
            this.shadowRoot.querySelector('.compact-card').style.backgroundImage = this._config.backgroundImage
        }


    }

    registerEvents() { }
}

customElements.define('ph-compact-card', CompactCardComponent);