import './home.scss';
import './../../web-components/cloud-clippath-on-image.js';
import './../../web-components/cloud-with-text.component.js';
import './../../web-components/cta-button.js';
import './../../web-components/moon-menu-component.js'
import './../../services/animations.js';


import * as PROJECT_IMAGES from './../../img/projekter/bygge-projekt';
import * as IMAGES from './../../img/home/';
import * as FORESTILLINGER_IMAGES from './../../img/forestillinger/';
import * as OM_OS_IMAGES from './../../img/foreningen';
import * as PROJEKTER_IMAGES from './../../img/projekter/mauriske-proscenium';
import * as SHOP_IMAGES from './../../img/shop';
import { bounceAnim } from './../../services/animations.js';

let scrollHandAnimation;


// scroll to top on refresh
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

const suffit = document.querySelector('.top-curtain');
const drapperiL = document.querySelector('.left-curtain');
const drapperiR = document.querySelector('.right-curtain');

window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.scroll-container').addEventListener('scroll', () => {
        scrollY = document.querySelector('.scroll-container').scrollTop;
        console.log(scrollY)
    });

    setTimeout(() => {
        document.querySelector('html').classList.remove('no-transition');
        document.querySelector('body').classList.add('show');
    }, 500);


    // DECK 1
    // Images
    const logo = document.getElementById('logo');
    logo.src = IMAGES.YELLOW_LOGO;

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







    // DECK 2

    // Image CloudClippath
    const cloud1Image = document.querySelector('ph-image-clipped#workshops');
    cloud1Image.config = {
        imageUrl: PROJECT_IMAGES.IMG_11,
        clipPath: 'cloud2'
    }

    // text cloud
    const cloud1Text = document.querySelector('ph-text-cloud#workshops-text');

    cloud1Text.config = {
        clipPath: 'cloud1'
    }


    // DECK 3
    // Image SloudClippath
    const cloud2Image = document.querySelector('ph-image-clipped#forestillinger');
    cloud2Image.config = {
        imageUrl: FORESTILLINGER_IMAGES.DAEKKET,
        clipPath: 'cloud3'
    }
    // Text Cloud
    const cloud2Text = document.querySelector('ph-text-cloud#forestillinger-text');

    cloud2Text.config = {
        clipPath: 'cloud4'
    }

    // DECK 4
    // Image SloudClippath
    const cloud3Image = document.querySelector('ph-image-clipped#om-os');
    cloud3Image.config = {
        imageUrl: OM_OS_IMAGES.HOLDET,
        clipPath: 'cloud4'
    }
    // Text Cloud
    const cloud3Text = document.querySelector('ph-text-cloud#om-os-text');

    cloud3Text.config = {
        clipPath: 'cloud2'
    }

    // DECK 5
    // Image SloudClippath
    const cloud4Image = document.querySelector('ph-image-clipped#projekter');
    cloud4Image.config = {
        imageUrl: PROJEKTER_IMAGES.BANNER,
        clipPath: 'cloud1'
    }
    // Text Cloud
    const cloud4Text = document.querySelector('ph-text-cloud#projekter-text');

    cloud4Text.config = {
        clipPath: 'cloud4'
    }

    // DECK 6
    // Image SloudClippath
    const cloud5Image = document.querySelector('ph-image-clipped#shop');
    cloud5Image.config = {
        imageUrl: SHOP_IMAGES.FIGURER_2,
        clipPath: 'cloud2'
    }
    // Text Cloud
    const cloud5Text = document.querySelector('ph-text-cloud#shop-text');

    cloud5Text.config = {
        clipPath: 'cloud3'
    }

    //*******************************************************
    // **** ------- INTERSECTION OBSERVERS -------- *********
    //*******************************************************

    const deck2Observer = document.querySelector('.second-deck .cloud-container');
    const deck3Observer = document.querySelector('.third-deck .cloud-container');
    const deck4Observer = document.querySelector('.fourth-deck .cloud-container');
    const deck5Observer = document.querySelector('.fifth-deck .cloud-container');
    const deck6Observer = document.querySelector('.sixth-deck .cloud-container');
    console.log(deck2Observer);

    const cloudIntersectionOptions = {
        rootMargin: '0%',
        threshold: .6,

    };

    const deck2$ = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cloud1Image.classList.remove('hide');
                cloud1Text.classList.remove('from-top');
            }
        })
    }, cloudIntersectionOptions);

    deck2$.observe(deck2Observer);

    const deck3$ = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cloud2Image.classList.remove('hide');
                cloud2Text.classList.remove('from-top')
            }
        })
    }, cloudIntersectionOptions);

    deck3$.observe(deck3Observer);

    const deck4$ = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cloud3Image.classList.remove('hide');
                cloud3Text.classList.remove('from-bottom');

            }
        })
    }, cloudIntersectionOptions);

    deck4$.observe(deck4Observer);

    const deck5$ = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cloud4Image.classList.remove('hide');
                cloud4Text.classList.remove('from-top');
            }
        })
    }, cloudIntersectionOptions);

    deck5$.observe(deck5Observer);

    const deck6$ = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cloud5Image.classList.remove('hide');
                cloud5Text.classList.remove('from-top');
            }
        })
    }, cloudIntersectionOptions);

    deck6$.observe(deck6Observer);
});


document.querySelector('.scroll-container').addEventListener('scroll', (e) => {
    const pos = window.scrollY;
    drapperiL.style.transform = `translateX(-${pos}px)`;
    drapperiR.style.transform = `scaleX(-1) translateX(-${pos}px)`;

    // wierd genious: when pos < 60 the result will be --val as a string, which will be ignored until pos=60
    suffit.style.transform = `translateY(-${pos - 60}px)`;

});

function transition(url) {
    console.log(url);
    document.querySelector('body').classList.remove('show');
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
};



