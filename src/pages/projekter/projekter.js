import './../../general.js';
import './../../web-components/card.component.js'
import * as IMAGES_YOUTUBE from '../../img/projekter/youtube-channel';
import * as IMAGES_BYGGEPROJEKT from '../../img/projekter/bygge-projekt';
import * as IMAGES_MAURISK_PROSCENIUM from '../../img/projekter/mauriske-proscenium';
import './../artikler/artikler.scss';

addEventListener('DOMContentLoaded', () => {
    // Card 1
    document.querySelector('ph-image-card#card1').config = {
        topImageUrl: IMAGES_YOUTUBE.YOUTUBE_BANNER,
        cardBackground: 'linear-gradient(to bottom right, rgba(255, 192, 203, 0.7), transparent)',//'linear-gradient(to bottom right, rgba(173, 216, 230, 0.7), transparent)',
        cardTextColor: 'white',
    };



    // Card 2
    document.querySelector('ph-image-card#card2').config = {
        topImageUrl: IMAGES_BYGGEPROJEKT.IMG_5,
        cardBackground: 'linear-gradient(to bottom right,#cea6bf, #151b1f)',
        cardTextColor: '',
    };


    // Card 3
    document.querySelector('ph-image-card#card3').config = {
        topImageUrl: IMAGES_MAURISK_PROSCENIUM.BANNER,
        cardBackground: 'linear-gradient(to bottom right, #93754e, #623519)',
        cardTextColor: '',
    };


});


// const burgerMenu = document.querySelector('.burger-menu');
// const navLinks = document.querySelector('.nav-links');

// burgerMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });