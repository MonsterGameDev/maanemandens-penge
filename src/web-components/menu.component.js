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
			padding: 10px 200px;
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
		nav a::after {
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
	</style>

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

		// Get the template content and attach it to the shadow root

		const templateContent = menu.content;
		this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
	}
}

// Define the "menu" custom element
customElements.define('ph-menu', Menu);