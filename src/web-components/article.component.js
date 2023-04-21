

const articleTemplate = document.createElement('template');
articleTemplate.innerHTML = `
    <style>
    :host {
        width: 100%;
       
    }
    .category {
        display: block;
        text-align: center;
        font-size: 2rem;
    }
    h1 {
        display: block;
        width:100%;
        text-align: center;
        font-weight: bold;
        
        font-family: var(--heading-font-face);
        font-size: var(--heading-font-size);
        color: var(--heading-font-color);
    }
    .banner {
        display: block;
        max-width:100%;
        height: 50vw;
        background-image: var(--article-banner-image);
        background-size:cover;
        background-position: center;
        margin-bottom: 4rem;

        
    }
    .article-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .content-left-column {
        display: inline-block;
        width:20%;

    }
    .content-center-column {
        display: inline-block;
        width:60%;
        
    }
    .article-meta {
        display: block;
        width:;
        width: 100%;

        font-color: var(--color-secondary-1-4);
        font-size: var(--page-fontsize-small)
    }
    .divider {
        width: 100%;
        height: 3px;
        margin: 2rem 0;
        background-color: var(--color-secondary-2-0)
    }
    .content-right-column {
        display: inline-block;
        width:20%;
    }
    
    @media (max-width: 992px){
        .content-left-column {display: none}
        .content-center-column {width:100%}
        .content-right-column {display: none;}
      }
    
	</style>

    <div class="category"><slot name="category">Category</slot></div>
    <h1><slot name="heading">My heading goes here</slot></h1>
    <div class="banner"><slot name="banner"></slot></div>
    <div class="article-content">
        <div class="content-left-column"><slot name="content-left-column"></slot></div>
        <div class="content-center-column">
            <div class="article-meta">
                <div class="byline"><slot name="byline"></slot> - <slot name="date"></slot></div>
                <div class="comment"><slot name="comment"></slot></div>
            </div>
            <div class="divider"></div> 
            <slot name="content-center-column"></slot>
            
        </div>
        <div class="content-right-column"><slot name="content-right-column"></slot></div>
    </div>
`

class ArticleTemplate extends HTMLElement {
    constructor() {
        super();

        const templateContent = articleTemplate.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

        this._config = {};
    }


    get config() {
        return this._config
    }

    set config(val) {
        if (!val) return;
        this._config = val;
    }


}

// Define the "menu" custom element
customElements.define('ph-article', ArticleTemplate);