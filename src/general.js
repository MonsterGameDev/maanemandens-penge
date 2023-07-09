import './web-components/moon-menu-component.js';


window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        document.querySelector('html').classList.remove('no-transition');
        document.querySelector('body').classList.add('show');
    }, 500);
});