import './maurisk-proscenium.scss';

import '/src/general.js';
import '../../../web-components/article.component.js';
import '../../../web-components/image-fader.component.js'

import * as PROSCENIUM from '../../../img/projekter/mauriske-proscenium/index.js'

addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('ark-400').src = PROSCENIUM.PROSCENIUM;

    document.getElementById('layer-1').src = PROSCENIUM.LAYERS_1;
    document.getElementById('layer-2').src = PROSCENIUM.LAG_2;
    document.getElementById('layer-3').src = PROSCENIUM.LAG_3;
    document.getElementById('layer-4').src = PROSCENIUM.LAG_4;

    const imageFaderComponent = document.querySelector('ph-image-fader');
    imageFaderComponent.config = {
        images: [
            PROSCENIUM.LAYERS_1,
            PROSCENIUM.LAYERS_2,
            PROSCENIUM.LAYERS_3,
            PROSCENIUM.LAYERS_4,
            PROSCENIUM.LAYERS_5
        ]
    }


});