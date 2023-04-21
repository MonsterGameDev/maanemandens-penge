const imageCard = document.createElement('template');
imageCard.innerHTML = `
    <style>
    :host {
        display: block;
        margin: 16px;
        --card-text-color: black
      
      }
      .card {
        position: relative;
        max-width: 300px;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease-in-out;

        display: flex;
        flex-flow: column nowrap;
        flex-grow: stretch;

        overflow: hidden;
      }
      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 12px 40px rgba(0, 0, 0, 0.2);
      }
      .card .image-top {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-size: cover;
        background-position: center;
        height: 40%;

      }
      .card-content {
        padding: 16px;
        height: 66%
      }
      .card-title {
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 1.5rem;
        font-weight: bold;
      }
      .card-description {
        margin: 0;
        font-size: 1rem;
        line-height: 1.5;
      }
   </style>
   <div class="card">
      <div class="image-top">

      </div>
      <div class="card-content">
        <h2 class="card-title"><slot name="card-title"></slot></h2>
        <p class="card-description"><slot name="card-description"></slot></p>
      </div>
   </div>
`


class ImageCard extends HTMLElement {

  set config(val = {}) {
    this._config = val;

    this.render();
  }

  get config() {
    return this._config;
  }

  constructor() {
    super();

    const templateContent = imageCard.content;
    this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
  }

  render() {
    const cardBackground = this._config.cardBackground;
    this.shadowRoot.querySelector('.card-content').style.background = cardBackground;

    const cardTextColor = this._config.cardTextColor;
    this.shadowRoot.querySelector('.card-content').style.color = cardTextColor;

    const topImageUrl = this._config.topImageUrl;
    this.shadowRoot.querySelector('.image-top').style.backgroundImage = 'url(' + topImageUrl + ')';

  }
}
customElements.define('ph-image-card', ImageCard);