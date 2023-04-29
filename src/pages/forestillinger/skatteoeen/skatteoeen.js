import './skatteoeen.scss';

import '/src/general.js';
import '/src/web-components/article.component.js';
import '/src/web-components/image-fader.component.js';

import * as IMAGES from './../../../img/forestillinger/'

//import * as IMAGES from './../../../img/artikler/XXX/index.js'

addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('img1').src = IMAGES.STEVENSON
    document.getElementById('img2').src = IMAGES.JUNGEL
    document.getElementById('img3').src = IMAGES.BLOKHUS

    const imageFaderComponent = document.querySelector('ph-image-fader');
    imageFaderComponent.config = {
        images: [
            IMAGES.KRO_CARD_1,
            IMAGES.KRO_CARD_2,
            IMAGES.KRO_CARD_3,
        ]
    }
});