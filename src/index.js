import './main.scss';

const body = document.querySelector('body');

const helloworld = document.createElement('h1');
helloworld.innerHTML = 'Hello World...!'

body.appendChild(helloworld);