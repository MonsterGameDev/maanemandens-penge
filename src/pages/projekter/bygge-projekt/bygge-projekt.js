import './bygge-projekt.scss';

import '/src/general.js';
import '/src/web-components/article.component.js';

import * as BYGGE_PICS from '../../../img/projekter/bygge-projekt';

addEventListener("DOMContentLoaded", (event) => {
    const pic1 = document.getElementById('pic1');
    pic1.src = BYGGE_PICS.IMG_10;
    const pic2 = document.getElementById('pic2');
    pic2.src = BYGGE_PICS.IMG_2;
    const pic3 = document.getElementById('pic3');
    pic3.src = BYGGE_PICS.IMG_1;
    const pic4 = document.getElementById('pic4');
    pic4.src = BYGGE_PICS.IMG_4;
    const pic5 = document.getElementById('pic5');
    pic5.src = BYGGE_PICS.IMG_5;
    const pic6 = document.getElementById('pic6');
    pic6.src = BYGGE_PICS.IMG_6;
    const pic7 = document.getElementById('pic7');
    pic7.src = BYGGE_PICS.IMG_7;

});
