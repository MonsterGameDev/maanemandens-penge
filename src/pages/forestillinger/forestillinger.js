import './forestillinger.scss';
import './../../general.js';
import './../../web-components/card.component.js'

import '/src/web-components/article.component.js';
import * as IMAGES from './../../img/forestillinger/'



window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('ph-image-card#card1').config = {
        topImageUrl: IMAGES.DE_TRE_MUSKETERER,
        cardBackground: 'linear-gradient(to bottom right, rgba(255, 192, 203, 0.7), transparent)',//'linear-gradient(to bottom right, rgba(173, 216, 230, 0.7), transparent)',
        cardTextColor: 'white',
    };

    // Card 2
    document.querySelector('ph-image-card#card2').config = {
        topImageUrl: IMAGES.BLOKHUS,
        cardBackground: 'linear-gradient(to bottom right,#cea6bf, #151b1f)',
        cardTextColor: '',
    };


    // Card 3
    document.querySelector('ph-image-card#card3').config = {
        topImageUrl: IMAGES.KLOKKETAARN,
        cardBackground: 'linear-gradient(to bottom right, #93754e, #623519)',
        cardTextColor: '',
    };
});

