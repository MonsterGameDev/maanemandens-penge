import './home.scss';
import './../../general.js';
import './../../web-components/quote.component.js';
import './../../web-components/testimonial-image-circle.js';
import './../../web-components/round-photo-button.js';
import './../../web-components/compact-card.component.js';
import * as IMAGES from './../../img/home/';
import * as WORKSHOP_IMAGES from './../../img/projekter/bygge-projekt'
import * as FORESTILLINGER_IMAGES from './../../img/forestillinger'
import * as OM_OS_IMAGES from './../../img/foreningen/';
console.log('home loaded');

window.addEventListener('DOMContentLoaded', () => {
    //document.getElementById('main-image').src = IMAGES.MP_TEATER;
    const mainBG = document.querySelector('.parallax-1');
    mainBG.style.backgroundImage = ` url(${IMAGES.VOVVOV})`;

    const parallax2 = document.querySelector('.parallax-2');
    parallax2.style.backgroundImage = `url(${WORKSHOP_IMAGES.BANNER})`

    const parallax3 = document.querySelector('.parallax-3');
    parallax3.style.backgroundImage = `url(${FORESTILLINGER_IMAGES.DAEKKET})`;

    const parallax4 = document.querySelector('.parallax-4');
    parallax4.style.backgroundImage = `url(${IMAGES.BG_PIC1})`;

    const parallax5 = document.querySelector('.parallax-5');
    parallax5.style.backgroundImage = `url(${IMAGES.MP_TEATER})`;


    const logo = document.querySelectorAll('.logo');
    logo.forEach(l =>
        l.src = IMAGES.LOGO
    );

    const testimonial = document.querySelector('ph-testimonial-image-circle');
    testimonial.config = {
        profileImage: OM_OS_IMAGES.HOLDET,
        mouseOverEffect: 'grayscale',
    }

    const compactCard1 = document.querySelector('ph-compact-card#ws1');
    compactCard1.config = {
        backgroundImage: WORKSHOP_IMAGES.IMG_4,
    }
    const compactCard2 = document.querySelector('ph-compact-card#ws2');
    compactCard2.config = {
        backgroundImage: WORKSHOP_IMAGES.IMG_9,
    }
    const compactCard3 = document.querySelector('ph-compact-card#ws3');
    compactCard3.config = {
        backgroundImage: WORKSHOP_IMAGES.IMG_11,
    }

    // CTAs
    document.querySelector('.cta-workshops').addEventListener('click', () => {
        console.log('cta-workshops clicked');
    })

});


function tilmeldWorkshop() {
    console.log('Tilmeld Workshop Clicked')
}

