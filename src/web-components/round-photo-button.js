const roundImageButtonTemplate = document.createElement('template');
roundImageButtonTemplate.innerHTML = `
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

    .button-container {
        border-radius: 50%;
        overflow: hidden;
        background-size: cover;
    }

    </style>
    <div class="button-container"> 
   
    </div>
    `

class RoundImageButtonComponent extends HTMLElement {
    constructor() {
        super();

        const templateContent = roundImageButtonTemplate.content;
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

        this.render();
    }

    render() {
        const buttonContainer = this.shadowRoot.querySelector('.button-container');
        buttonContainer.style.width = this._config.buttonDiameter;
        buttonContainer.style.height = this._config.buttonDiameter;
        buttonContainer.style.backgroundImage = `url(${this._config.imageUrl})`;
    }



}


customElements.define('ph-round-image-button', RoundImageButtonComponent);