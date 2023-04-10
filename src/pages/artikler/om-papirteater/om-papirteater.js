import './om-papirteater.scss';

import '/src/general.js';
import '/src/web-components/article.component.js';
import '/src/web-components/theater/stage-and-opening.js';
import PariserOpera from './../../../img/artikler/om-papirteater/theater/467-69-70'
import StageOpening from './../../../img/artikler/om-papirteater/theater/stage-opening'
import Proscenium from './../../../img/artikler/om-papirteater/theater/C-047-proscenium-full.webp';
import * as IMAGES from './../../../img/artikler/om-papirteater/'

addEventListener("DOMContentLoaded", (event) => {

    //*************************************************** */

    const proscenium = document.getElementById('proscenium');
    proscenium.src = Proscenium;
    const stageAndOpeningBehindProscenium = document.querySelector('ph-stage-and-opening#behind-proscenium');
    stageAndOpeningBehindProscenium.stageConfig = PariserOpera; //stageRetrievalService.getStageById('pariseropera')
    stageAndOpeningBehindProscenium.stageOpeningConfig = StageOpening[0]; //stageRetrievalService.getStageOpeningById('traditional');

    document.getElementById('pic1').src = IMAGES.ANTIKT_TEATER;
    document.getElementById('pic2').src = IMAGES.FRA_SIDEN_MED_BORN;
    document.getElementById('pic3').src = IMAGES.ALFRED;
    document.getElementById('pic4').src = IMAGES.FAMILIE_JOURNALEN;



});