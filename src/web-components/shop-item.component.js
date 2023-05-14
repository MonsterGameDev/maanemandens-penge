const shopItemTemplate = document.createElement('template');
shopItemTemplate.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;  
    }
    :host {}

    .container {
        width: 100%;
        position: relative;
   
        overflow: hidden;
       
    }
    .item-description {
        width: 100%;
        padding: 1rem 1rem 8rem 1rem;
       /* background: linear-gradient(to bottom, #111, transparent);

        color: var(--color-secondary-1-2)*/
    }

    .item-description h3{
        color: var(--color-secondary-1-3);
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .content {
        margin-bottom: var(--size-s)
    }

    .item-image {
       width: 100%;
       display: block;  
       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    </style>
    <div class="container"> 
    <img class="item-image" />
    <div class="item-description">
        <h3>
            <slot name="item-header"></slot>
        </h3>
        <div class="content">
            <slot name="item-text"></slot>
        </div>
        <div class="price">
            <slot name="item-price"></slot>
    </div>
   
    </div>
    `

class ShopItem extends HTMLElement {
    constructor() {
        super();

        const templateContent = shopItemTemplate.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

        this._config = {
            image: null,
        };
    }


    get config() {
        return this._config;
    }

    set config(val) {
        if (!val) return;
        this._config = val;
        this.shadowRoot.querySelector('.item-image').src = this._config?.image;
    }




}

// Define the "menu" custom element
customElements.define('ph-shop-item', ShopItem);