/*

*/
import MOON from './moon.svg';
import CLOSE from './burger-menu-close.svg';

const menu = document.createElement('template');
menu.innerHTML = `
    <style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .moon-icon {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;

        width: 6rem;
        height: 6rem;
        margin: 1rem;
        margin-right: calc(1rem + 10vw);

        /*box-shadow: var(--box-shadow-1);*/
        -webkit-filter: drop-shadow(5px 5px 5px #222);
        filter: drop-shadow(5px 5px 5px #222);

        transition: .4s .2s ease-out;
        transform: translateY(10px) rotate(-360deg);
        opacity: 0;
    }
    .moon-icon-show {
        transform: translateY(0) rotate(0);
        opacity: 1;
    }
    .show-menu  {
        transform: scale(30);
    }
    .close {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 102;

        width: 50px;
        height: 50px;
        margin: 1.5rem;
        margin-right: calc(1.5rem + 10vw);

        transition: all .4s .6s ease-out;
        opacity: 0;
        transform:  rotate(365deg);

        pointer-events: none;

    }
    .close-show {
        opacity: 1;
        transform: rotate(0);
        pointer-events: all;
       
    }
    .overlay  {
        position: fixed;
        inset: 0;
        z-index: 101;

        width: 100wv;
        height: 100vh;
        background-color: rgba(0,0,0,.8);
        
        display: flex;
        justify-content: flex-end;
        align-items: 50%;

        transition: opacity  .4s .4s ease-out;
        opacity: 0;

        pointer-events: none;
       
        
    }
    .overlay-show {
        opacity: 1;
      
    }
    nav {
        height: 90vh;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 12rem 12rem; 6rem 0;
    }

    a {
        font-family: var(--heading-font-face);
        font-weight: 900;
        font-size: 5rem;
        text-decoration: none;
        color: var(--general-font-color);
        letter-spacing: 10px;

        transition: all .8s .8s ease-out;
        transform: rotateX(90deg);
        transform-origin:  center bottom
        
    }
    a:hover {
        transition: all .2s .2s ease-out;
        color:#e220e0;
        transform: scale(1.2);
    }

    .items-shown {
        cursor: pointer;
        pointer-events: all;
        transform: rotateX(0);
    }

    /*
        MEDIAQUERYS
    */
        @media only screen and (max-width: 1200px) {
     
        }
        
        /* Large (large laptop) */
        @media only screen and (max-width: 992px) {
            .moon-icon {
                margin-right: 1rem;
            }
            .close{
                margin-right: 1.5rem;
            }
        }
        
        /* Medium (small laptop) */
        @media only screen and (max-width: 768px) {
            .overlay {
                justify-content: center;
            }
        }
        
        /* Extra small (mobile) */
        @media only screen and (max-width: 552px) {
            
            a {
                letter-spacing: 4px;
            }
        }


    </style>
    <img class="moon-icon moon-icon-show">
    <img class="close">
    <div class="overlay">
        <nav class="menu-list">
            <a href="/" class="menu-item">Home</a>
            <a href="./om-foreningen.html">Om</a>
            <a href="./artikler.html">Artikler</a>
            <a href="./projekter.html">Projekter</a>
            <a href="./forestillinger.html">Forestillinger</a>
            <a href="./shop.html">Shop</a>
        </nav>
    </div>
    `

class MoonMenu extends HTMLElement {
    set config(val = {}) {
        this._config = val;
        // this.render();
    }

    get config() {
        return this._config;
    }

    constructor() {
        super();

        const templateContent = menu.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

        this.menuOpen = false;
        this.navMenu;
    }

    connectedCallback() {
        let isScrolling;
        const body = document.querySelector('body');

        const moonImage = this.shadowRoot.querySelector('.moon-icon');
        moonImage.src = MOON;

        const closeButton = this.shadowRoot.querySelector('.close');
        closeButton.src = CLOSE;

        const overlay = this.shadowRoot.querySelector('.overlay');

        const links = this.shadowRoot.querySelectorAll('a');


        // EVENTS
        window.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            moonImage.classList.remove('moon-icon-show');

            isScrolling = setTimeout(() => {
                console.log('scrolling has stopped');
                moonImage.classList.add('moon-icon-show');
            }, 100);

        });

        // Open  Menu
        moonImage.addEventListener('click', () => {
            body.style.overflow = 'hidden';
            moonImage.classList.add('show-menu');
            closeButton.classList.add('close-show');
            overlay.classList.add('overlay-show');
            links.forEach(link => link.classList.add('items-shown'));


        });

        // Close Menu
        closeButton.addEventListener('click', () => {
            body.style.overflow = 'unset';
            moonImage.classList.remove('show-menu');


            closeButton.classList.remove('close-show');
            overlay.classList.remove('overlay-show');

            links.forEach(link => link.classList.remove('items-shown'));
        });

    }

    render() {

    }
}
customElements.define('ph-moon-menu', MoonMenu);