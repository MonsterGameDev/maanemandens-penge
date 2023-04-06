import './main.scss';

const body = document.querySelector('body');

const helloworld = document.createElement('h1');
helloworld.innerHTML = 'Hello World...!'

const helloworld2 = document.createElement('h2');
helloworld2.innerHTML = 'secondary'

body.appendChild(helloworld);
body.appendChild(helloworld2);