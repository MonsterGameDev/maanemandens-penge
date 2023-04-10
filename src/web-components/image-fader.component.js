const imageFader = document.createElement('template');
imageFader.innerHTML = `
    <style>
    .animation-container {
       
        width: 100%;

        .image-fader-image {
            width: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
	</style>
    <div class="animation-container"></div>
`




class ImageFader extends HTMLElement {
    constructor() {
        super();
        // Get the template content and attach it to the shadow root
        const templateContent = imageFader.content;
        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

        this._config = {};
    }

    get config() {
        return this._config
    }

    set config(val) {
        if (!val) return;
        this._config = val;

        this.render();

    }



    render() {
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        };

        let observer = new IntersectionObserver(this.fadeIn, options);


        const animationContainer = this.shadowRoot.querySelector('.animation-container');
        observer.observe(animationContainer);

        this._config.images.forEach((src, i) => {

            const img = document.createElement('img');
            img.src = src;
            img.classList.add('image-fader-image')
            img.style.zIndex = i * 10;

            animationContainer.appendChild(img);
        });


    }

    fadeIn = (entries => {
        entries.forEach(entry => {

            const fadeInKeyframes = [
                { opacity: 0 },
                { opacity: 1 }
            ];
            entry.target.querySelectorAll('img').forEach((img, i) => {
                const delay = i * 1500;
                img.animate(fadeInKeyframes, {
                    delay,
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'backwards'
                })
            })

        });
    })
}

// Define the "menu" custom element
customElements.define('ph-image-fader', ImageFader);