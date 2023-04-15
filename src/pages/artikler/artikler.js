import './../../general.js';
import './../../web-components/card.component.js'
import * as IMAGES_ANALOG_LEG from '../../img/artikler/analog-leg';
import * as IMAGES_OM_PAPIRTEATER from '../../img/artikler/om-papirteater';
import * as IMAGES_OM_DMF from '../../img/artikler/om-dmf';
import './artikler.scss';

addEventListener('DOMContentLoaded', () => {
    // Card 1
    document.querySelector('ph-image-card#card1').config = {
        topImageUrl: IMAGES_ANALOG_LEG.DIGITAL_KIDS,
        cardBackground: 'linear-gradient(to bottom right, rgba(255, 192, 203, 0.7), transparent)',//'linear-gradient(to bottom right, rgba(173, 216, 230, 0.7), transparent)',
        cardTextColor: 'white',
    };



    // Card 2
    document.querySelector('ph-image-card#card2').config = {
        topImageUrl: IMAGES_OM_PAPIRTEATER.FRA_SIDEN_MED_BORN,
        cardBackground: 'linear-gradient(to bottom right,rgba(144, 238, 144, 0.7), transparent)',
        cardTextColor: '',
    };


    // Card 3
    document.querySelector('ph-image-card#card3').config = {
        topImageUrl: IMAGES_OM_DMF.MEDLEMMER_1943,
        cardBackground: 'linear-gradient(to bottom right, rgba(255, 165, 0, 0.7), transparent)',
        cardTextColor: '',
    };


});


// const burgerMenu = document.querySelector('.burger-menu');
// const navLinks = document.querySelector('.nav-links');

// burgerMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });