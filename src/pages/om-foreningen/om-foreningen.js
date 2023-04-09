import './om-foreningen.scss';
import './../../general.js';

const sectionTop = document.querySelector('.section-om-foreningen');
const cardArray = [1, 2, 3, 4];

cardArray.forEach((card, i) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-small-container');

    const component = document.createElement('div');
    component.classList.add('card');
    component.classList.add('card' + i);
    cardContainer.append(component);

    sectionTop.appendChild(cardContainer);

})


    ;