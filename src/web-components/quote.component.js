const quoteTemplate = document.createElement('template');
quoteTemplate.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;  
    }
    :host {
        min-height: 100px;
        width: 100%;
    }

    .quote-container {
        width: 100%;
        position: relative;
        overflow: hidden;      
    }

    .quote-container blockquote {
        position: relative;
        z-index: 1;
        font-size: 1.8rem;
        text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3);
        padding: var(--size-l);
        font-style: italic;
    }

    .quote-container::before {
        content: '”';
        font-size: 470px;
        height: 82px;
        line-height: 0.78;
        line-height: 1;
        position: absolute;
        top: -65px;
        left: -6px;
        z-index: 0;
        font-family: sans-serif, serif;
        color: #ccc;
        opacity: 0.1;
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
    .quote-container blockquote {
        padding: var(--size-m);
    }

    .quote-container::before {
        left: -16px;
    }
}
    </style>
    <div class="quote-container"> 
    <blockquote><slot></slot></blockquote>
    </div>
    `

class QuoteComponent extends HTMLElement {
    constructor() {
        super();

        const templateContent = quoteTemplate.content;
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
    }




}

// Define the "menu" custom element
customElements.define('ph-quote', QuoteComponent);