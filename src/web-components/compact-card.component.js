/*
config = {
  backgroundImageUrl: string;

}
*/

const compactCard = document.createElement("template");
compactCard.innerHTML = `
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.compact-card {
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--box-shadow-1);
  border: 1px solid rgba(0,0,0,.7);
  position: relative;
  z-index: 0;
}

.aspect-sizer {
  width: 100%;
  padding-bottom: 65%;
}

.compact-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  transform: translateY(100%);
  transition: .5s .2s ease-out;
  padding: var(--size-s)
}

.compact-card-overlay-show {
  transform: translateY(15%); 
}

.card-title {
  margin-bottom: var(--size-s);
}

.card-text {

}



</style>
<div class="compact-card">
  <div class="aspect-sizer"></div>
  <div class="compact-card-overlay">
  <h3 class="card-title"><slot name="compact-card-title"></span></h3>
  <p class="card-text"><slot name="compact-card-text"></span></p>
  </div>
</div>
`;

class CompactCardComponent extends HTMLElement {

  constructor() {
    super();

    const templateContent = compactCard.content;
    this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );

  }


  get config() {
    return this._config;
  }

  set config(val) {
    if (!val) return;
    this._config = val;
    this.render();
  }

  connectedCallback() {
    this.registerEvents();
  }

  render() {
    this.shadowRoot.querySelector('.compact-card').style.backgroundImage = `url(${this._config.backgroundImageUrl})`
  }

  registerEvents() {
    const compactCard = this.shadowRoot.querySelector('.compact-card');
    const overlay = this.shadowRoot.querySelector('.compact-card-overlay');

    compactCard.addEventListener('mouseenter', () => {
      overlay.classList.add('compact-card-overlay-show')
    });

    compactCard.addEventListener('mouseleave', () => {
      overlay.classList.remove('compact-card-overlay-show')
    });
  }
}

customElements.define("ph-compact-card", CompactCardComponent);
