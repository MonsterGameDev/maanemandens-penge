import './home.scss';
import './../../general.js';
import './../../web-components/quote.component.js';
import './../../web-components/testimonial-image-circle.js';
import './../../web-components/round-photo-button.js';
import './../../web-components/compact-card.component.js';
import './../../web-components/moon-menu-component/moon-menu.component.js';
import * as IMAGES from './../../img/home/';
import * as WORKSHOP_IMAGES from './../../img/projekter/bygge-projekt'
import * as FORESTILLINGER_IMAGES from './../../img/forestillinger'
import * as SHOP_IMAGES from './../../img/shop/';
import * as OM_OS_IMAGES from './../../img/foreningen/';
import * as GENERAL_IMAGES from './../../img/general/'


window.addEventListener('DOMContentLoaded', () => {

    // MOON MENU
    const menu = document.querySelector('ph-moon-menu');
    menu.config = {
        burgerIconUrl: GENERAL_IMAGES.MOON,
    }




    // PARALLAXED IMAGES
    const mainBG = document.querySelector('.parallax-1');
    mainBG.style.backgroundImage = ` url(${IMAGES.VOVVOV})`;

    setTimeout(() => {
        // https://stackoverflow.com/questions/64386608/element-with-opacity-0-in-css-is-not-initially-zero-on-page-load
        document.querySelector('.welcome-overlay').style.transition = 'all 1s 1s ease-out';
        document.querySelector('.welcome-overlay').classList.add('welcome-overlay-show');
    }, 300);


    // setTimeout(() => {
    //     window.scrollTo({
    //         top: window.innerHeight,
    //         left: 0,
    //         behavior: "smooth",
    //     })
    // }, 3000);

    const parallax2 = document.querySelector('.parallax-2');
    parallax2.style.backgroundImage = `url(${WORKSHOP_IMAGES.IMG_12})`

    const parallax3 = document.querySelector('.parallax-3');
    parallax3.style.backgroundImage = `url(${FORESTILLINGER_IMAGES.DAEKKET})`;

    const parallax4 = document.querySelector('.parallax-4');
    parallax4.style.backgroundImage = `url(${IMAGES.KIDS})`;

    const parallax5 = document.querySelector('.parallax-5');
    parallax5.style.backgroundImage = `url(${IMAGES.MP_TEATER})`;


    // FIRST DECK
    const logo = document.querySelectorAll('.logo');
    logo.forEach(l =>
        l.src = IMAGES.LOGO
    );

    const testimonial = document.querySelector('ph-testimonial-image-circle');
    testimonial.config = {
        profileImage: OM_OS_IMAGES.HOLDET,
        mouseOverEffect: 'grayscale',
    }

    // SECTION  2 - WORKSHOP

    const compactCard1 = document.querySelector('ph-compact-card#ws1');
    compactCard1.config = {
        backgroundImageUrl: WORKSHOP_IMAGES.IMG_4,
    }
    const compactCard2 = document.querySelector('ph-compact-card#ws2');
    compactCard2.config = {
        backgroundImageUrl: WORKSHOP_IMAGES.IMG_9,
    }
    const compactCard3 = document.querySelector('ph-compact-card#ws3');
    compactCard3.config = {
        backgroundImageUrl: WORKSHOP_IMAGES.IMG_11,
    }

    // SECTION  3 - FORESTILLINGER

    const compactCardForestillinger1 = document.querySelector('ph-compact-card#f1');
    compactCardForestillinger1.config = {
        backgroundImageUrl: FORESTILLINGER_IMAGES.BLOKHUS,
    }
    const compactCardForestillinger2 = document.querySelector('ph-compact-card#f2');
    compactCardForestillinger2.config = {
        backgroundImageUrl: FORESTILLINGER_IMAGES.DE_TRE_MUSKETERER,
    }
    const compactCardForestillinger3 = document.querySelector('ph-compact-card#f3');
    compactCardForestillinger3.config = {
        backgroundImageUrl: FORESTILLINGER_IMAGES.KLOKKETAARN,
    }

    // SECTION  4 - SHOP

    const compactCardShop1 = document.querySelector('ph-compact-card#s1');
    compactCardShop1.config = {
        backgroundImageUrl: SHOP_IMAGES.PROSCENIUM_M_LOGGIA,
    }
    const compactCardShop2 = document.querySelector('ph-compact-card#s2');
    compactCardShop2.config = {
        backgroundImageUrl: SHOP_IMAGES.FIGURER_1,
    }
    const compactCardShop3 = document.querySelector('ph-compact-card#s3');
    compactCardShop3.config = {
        backgroundImageUrl: SHOP_IMAGES.ARK_01_02,
    }

    // FORM EKSPERIMENTER

    // Focus event handler
    document.querySelectorAll('input').forEach(function (input) {
        input.addEventListener('focus', function () {
            this.parentNode.classList.add('focused');
        });
    });

    // Blur event handler
    document.querySelectorAll('input').forEach(function (input) {
        input.addEventListener('blur', function () {
            var inputValue = this.value;
            if (inputValue === "") {
                this.classList.remove('filled');
                this.parentNode.classList.remove('focused');
            } else {
                this.classList.add('filled');
            }
        });
    });




    // CTAs
    document.querySelector('.cta-workshops').addEventListener('click', () => {
        console.log('cta-workshops clicked');
    })

});


function tilmeldWorkshop() {
    console.log('Tilmeld Workshop Clicked')
}

function animate() {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    welcomeOverlay.classList.add('welcome-overlay-show');
}

