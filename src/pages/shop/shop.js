import './shop.scss';
import './../../general.js';
import './../../web-components/shop-item.component.js';
import * as data from './data.js';

console.log('shop online');

function createListOfItems(elem, items) {
    items.forEach(item => {
        const phShopItem = document.createElement('ph-shop-item');

        const header = document.createElement('div');
        header.setAttribute('slot', 'item-header');
        header.innerHTML = item.header;
        phShopItem.appendChild(header);

        const text = document.createElement('div');
        text.setAttribute('slot', 'item-text');
        text.innerHTML = item.text;
        phShopItem.appendChild(text);

        const price = document.createElement('div');
        price.setAttribute('slot', 'item-price');
        price.innerHTML = `Pris kr: ${item.price}`;
        phShopItem.appendChild(price);


        phShopItem.config = {
            image: item.image
        };

        elem.appendChild(phShopItem);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const arkContainer = document.querySelector('.component-container-ark');
    const figurContainer = document.querySelector('.component-container-figurer');
    const prosceniumContainer = document.querySelector('.component-container-proscenier');

    createListOfItems(arkContainer, data.shopItems_Ark);
    createListOfItems(figurContainer, data.shopItems_Figurer);
    createListOfItems(prosceniumContainer, data.shopItems_ProsceniumOgDraperier);

});