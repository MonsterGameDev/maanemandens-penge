const menu = document.createElement('template');
menu.innerHTML = `
    <style>
        :host{
           
        }
		/* Style the menu container */
		nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			height: 50px;
			background-color: black;
			padding: 10px 200px;
			border-bottom: 1px solid white;
		}

		/* Style the menu items */
		nav a {
			color: white;
			text-align: center;
			padding: 10px;
			text-decoration: none;
			font-weight: bold;
			position: relative;
            text-transform: uppercase;
            font-family: var(--font-montserrat-regular);
            font-size: 18px;
		}

		nav a::before,
		nav a::after {
			content: "";
			position: absolute;
			height: 2px;
			background-color: #ffd700;
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
			color: #ffd700;
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