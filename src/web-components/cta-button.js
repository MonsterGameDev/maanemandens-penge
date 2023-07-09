const ctaButtonTemplate = document.createElement('template');
ctaButtonTemplate.innerHTML = `
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
        button {
            padding: 1vw 2vw;
            background:#FDCC00;
            box-shadow: 0 1vw 1vw rgb(0 0 0 / 0.2);
            color:#0D101D;
            border-radius: 100px 100px;
            font-family: var(--cta-button-font);
            font-size: var(--cta-button-font-size, 1.5vw);
            letter-spacing: .2vw;
            border: 0;
        }
    </style>
    <button><slot></slot></button>`

class CtaButton extends HTMLElement {
    set config(val = {}) {
        this._config = val;
        console.log('in config');
        this.render();
    }

    get config() {
        return this._config;
    }

    constructor() {
        super();

        const templateContent = ctaButtonTemplate.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
    }

    render() {


    }
}

customElements.define('ph-cta-button', CtaButton);