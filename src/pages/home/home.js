import './home.scss';
import './../../web-components/cloud-clippath-on-image.js';
import './../../web-components/cloud-with-text.component.js';
import './../../web-components/cta-button.js';
import './../../services/animations.js';


import * as PROJECT_IMAGES from './../../img/projekter/bygge-projekt'
import * as IMAGES from './../../img/home/'
import { bounceAnim } from './../../services/animations.js';

let scrollHandAnimation;


// scroll to top on refresh
// window.addEventListener('beforeunload', function () {
//     window.scrollTo(0, 0);
// });

window.addEventListener('DOMContentLoaded', () => {

    // DECK 1
    // Images
    const logo = document.getElementById('logo');
    logo.src = IMAGES.YELLOW_LOGO;

    const fullMoon = document.getElementById('full-moon');
    fullMoon.src = IMAGES.FULLMOON;

    const scrollHand = document.getElementById('scroll-hand');
    scrollHand.src = IMAGES.SCROLLHAND;



    // Animations
    scrollHandAnimation = bounceAnim(scrollHand);
    scrollHandAnimation.play();

    // Intersection observers
    const hideBouncingHandOptions = {
        rootMargin: "0px",
        threshold: .1,
    };

    let hideBouncingHand$ = new IntersectionObserver((entries, observer) =>
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                scrollHand.classList.add('hide');
            }
        })
        , hideBouncingHandOptions);

    hideBouncingHand$.observe(document.querySelector('.second-deck'))

    const showBouncingHandOptions = {
        threshold: .91,
    }
    const showBouncingHand$ = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                scrollHand.classList.remove('hide');
            }
        })
    }, showBouncingHandOptions);

    showBouncingHand$.observe(document.querySelector('.first-deck'))


    // DECK 2 - første sky
    const cloud1Image = document.querySelector('ph-image-clipped');
    cloud1Image.config = {
        imageUrl: PROJECT_IMAGES.IMG_11,
        clipPath: 'cloud2'
    }

    // første textsky
    const cloud1Text = document.querySelector('ph-text-cloud');

    cloud1Text.config = {
        clipPath: 'cloud1'
    }

});
const suffit = document.querySelector('.top-curtain');
const drapperiL = document.querySelector('.left-curtain');
const drapperiR = document.querySelector('.right-curtain');

window.addEventListener('scroll', (e) => {
    const pos = window.scrollY;
    drapperiL.style.transform = `translateX(-${pos}px)`;
    drapperiR.style.transform = `scaleX(-1) translateX(-${pos}px)`;

    // wierd genious: when pos < 60 the result will be --val as a string, which will be ignored until pos=60
    suffit.style.transform = `translateY(-${pos - 60}px)`;

});