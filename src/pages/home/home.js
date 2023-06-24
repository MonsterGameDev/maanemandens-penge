import './home.scss';
import './../../web-components/cloud-clippath-on-image.js'

import * as PROJECT_IMAGES from './../../img/projekter/bygge-projekt'

window.addEventListener('DOMContentLoaded', () => {
    const cloud1Image = document.querySelector('ph-image-clipped');
    cloud1Image.config = {
        imageUrl: PROJECT_IMAGES.IMG_11,
        clipPath: 'cloud1'
    }
});

window.addEventListener('scroll', (e) => {
    const pos = window.scrollY;
    const suffit = document.querySelector('.top-curtain');
    const drapperiL = document.querySelector('.left-curtain');
    const drapperiR = document.querySelector('.right-curtain');

    if (pos > 60) suffit.style.transform = `translateY(-${pos - 60}px)`;

    drapperiL.style.transform = `translateX(-${pos}px)`;
    drapperiR.style.transform = `scaleX(-1) translateX(-${pos}px)`;
});