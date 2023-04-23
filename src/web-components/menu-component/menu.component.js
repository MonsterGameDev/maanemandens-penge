import * as BURGER_MENU from './burger-menu.svg';

const menu = document.createElement('template');
menu.innerHTML = `
    <style>
		/* Style the menu container */
		nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			z-index:100;
			top: 0;
			left: 0;
			right: 0;
			height: 50px;
			background-color: var(--menu-background-color);
			padding: 1rem 8vw;
			border-bottom: 1px solid var(--menu-font-color);
		}

		/* Style the menu items */
		nav a {
			color: var(--menu-font-color);
			text-align: center;
			padding: 10px;
			text-decoration: none;
			font-weight: bold;
			position: relative;
            text-transform: uppercase;
            font-family: var(--menu-font-face);
            font-size: 18px;
		}

		nav a::before,
		nav a::after,
		nav a:active::before,
		nav a:active::after {
			content: "";
			position: absolute;
			height: 2px;
			background-color: var(--menu-font-color);
			opacity: 0;
			transition: all 0.3s ease-in-out;
			left: 0;
			right: 0;
		}

		nav a::before {
			top: 0;
			transform: scaleX(0);
			transform-origin: left;
		}

		nav a::after {
			bottom: 0;
			transform: scaleX(0);
			transform-origin: right;
		}

		nav a:hover::before,
		nav a:hover::after {
			transform: scaleX(1);
			opacity: 1;
		}

		nav a:hover {
			color: var(--menu-font-color);
		}

		.burger-button {
			display: none;
		}
		
		@media only screen and (max-width: 992px) {
			* {
				box-sizing: border-box;
			}
			nav {
				width: 100%;
				height: 100vh;
				transform: translateX(-100vw);
				opacity: .2;
				flex-direction: column;
				justify-content: space-evenly;
				padding: 15vh 0;

				transition: all .8s .2s ease-out;
				z-index: 1;
			}
			.burger-button {
				display: inline-block;

				position: fixed;
				top: 0;
				right: 0;

				width: 5rem;
				height: 5rem;
				border-radius: 50%;
				overflow: hidden;

				margin: 2rem;

				z-index: 100;
			}

			.burger-button:hover {
				curson: pointer;
			}
			.svg-stroke-color {
				stroke: var(--color-secondary-1-1);
				fill: var(--color-secondary-1-1);
			}

			.open {
				transform: translateX(0);
				opacity: 1;
			}
			
		}

		@media only screen and (max-width: 768px) {}
		@media only screen and (max-width: 552px) {
			
			.burger-button {
				width: 4rem;
				margin: 1rem;
			}
		}

	</style>
	<div class="burger-button"></div>
	<nav>
		<a href="./om-foreningen.html">Om foreningen</a>
		<a href="./artikler.html">Artikler</a>
		<a href="./projekter.html">Projekter</a>
		<a href="./forestillinger.html">Forestillinger</a>
		<a href="./shop.html">Shop</a>
	</nav>`




class Menu extends HTMLElement {

	constructor() {
		super();

		const templateContent = menu.content;
		this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

		this.menuOpen = false;
		this.navMenu;
	}

	connectedCallback() {
		this.loadOpenMenuIcon();
		this.menuOpen = false;

		this.setupEventListners();
		this.navMenu = this.shadowRoot.querySelector('nav');
	}

	loadOpenMenuIcon() {
		const burgerMenuSVG = `
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" class="svg-stroke-color"/>
		<path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"  class="svg-stroke-color"/>
		<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"  class="svg-stroke-color"/>
		</svg>
		`
		this.shadowRoot.querySelector('.burger-button').innerHTML = burgerMenuSVG;
	}

	loadCloseMenuIcon() {
		console.log('closing');
		const burgerCrossSVG = `
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"  class="svg-stroke-color"/></svg>
		`;

		this.shadowRoot.querySelector('.burger-button').innerHTML = burgerCrossSVG;
	}

	setupEventListners() {
		this.shadowRoot.querySelector('.burger-button').addEventListener('click', () => {

			if (this.menuOpen) {
				this.navMenu.classList.remove('open');
				this.loadOpenMenuIcon();
			} else {
				this.navMenu.classList.add('open');
				this.loadCloseMenuIcon();
			}

			this.menuOpen = !this.menuOpen;

		})
	}

	// connectedCallback() {
	// 	const scaleBurgerLineKF = [
	// 		{
	// 			opacity: 1,
	// 			transform: 'scaleY(1)'
	// 		},
	// 		{
	// 			opacity: 0,
	// 			transform: 'scaleY(0)'
	// 		},
	// 	];
	// 	const scaleBurgerCrossKF = [
	// 		{
	// 			opacity: 0,
	// 			transform: 'rotateZ(-45deg) scale(0)'
	// 		},
	// 		{
	// 			opacity: 1,
	// 			transform: 'rotateZ(-45deg) scale(1)'
	// 		},
	// 	];

	// 	const burgerLine = this.shadowRoot.querySelector('.burger-line');
	// 	const burgerCross = this.shadowRoot.querySelector('.burger-cross');
	// 	const burgerLineAnimation = burgerLine.animate(scaleBurgerLineKF, {
	// 		delay: 200,
	// 		duration: 500,
	// 		easing: 'ease-out',
	// 		fill: 'forwards',
	// 	});
	// 	burgerLineAnimation.pause();
	// 	const burgerCrossAnimation = burgerCross.animate(scaleBurgerCrossKF, {
	// 		delay: 200,
	// 		duration: 500,
	// 		easing: 'ease-out',
	// 		fill: 'forwards',
	// 	});
	// 	burgerCrossAnimation.pause();

	// 	const burgerLineAnimationReverse = burgerLine.animate(scaleBurgerLineKF, {
	// 		delay: 200,
	// 		duration: 500,
	// 		easing: 'ease-out',
	// 		fill: 'forwards',
	// 		direction: 'reverse'
	// 	});
	// 	burgerLineAnimationReverse.pause();
	// 	const burgerCrossAnimationReverse = burgerCross.animate(scaleBurgerCrossKF, {
	// 		delay: 200,
	// 		duration: 500,
	// 		easing: 'ease-out',
	// 		fill: 'forwards',
	// 		direction: 'reverse'
	// 	});
	// 	burgerCrossAnimationReverse.pause();

	// 	// this.toggle = (e) => {
	// 	// 	if (!this.menuOpen) {

	// 	// 		burgerLineAnimation.play();
	// 	// 		burgerLineAnimation.onfinish = () => {
	// 	// 			burgerCrossAnimation.play();
	// 	// 		};
	// 	// 		this.menuOpen = true;
	// 	// 	} else {
	// 	// 		burgerCrossAnimationReverse.play();
	// 	// 		burgerCrossAnimationReverse.onfinish = () => {
	// 	// 			burgerLineAnimationReverse.play()
	// 	// 		}
	// 	// 		this.menuOpen = false;
	// 	// 	}

	// 	// };

	// 	this.burgerButton = this.shadowRoot.querySelector('.burger-button');
	// 	this.burgerButton.addEventListener('click', () => {});

	// }





}

// Define the "menu" custom element
customElements.define('ph-menu', Menu);