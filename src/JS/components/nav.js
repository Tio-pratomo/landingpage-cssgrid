class Nav extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setAttribute('class', 'menu');
        this.setAttribute('role', 'navigation');

        this.domSelection().button.addEventListener('click', () => {
            this.domSelection().list.classList.toggle('slide');
            this.domSelection().button.classList.toggle('slide');
            this.domSelection().hamburgerIcon.classList.toggle('slide');
            this.domSelection().closeIcon.classList.toggle('slide');
        });
    }

    render() {
        this.innerHTML = /* html */ `
        <button class="menu__button">
            <span class="menu__button__hamburger material-symbols-outlined">
            menu
            </span>
            <span class="menu__button__close material-symbols-outlined">
                close
            </span>
        </button>

        <div class="menu__brand">
            <h1 class="menu__brand--heading"><a class="menu__brand--link" href="/">This's Laptop</a></h1>
        </div>

        <ul class="menu__list">
            <li class="menu__list--item"><a class="menu__list--link" href="#">Home</a></li>
            <li class="menu__list--item"><a class="menu__list--link" href="#">Product</a></li>
            <li class="menu__list--item"><a class="menu__list--link" href="#">About</a></li>
            <li class="menu__list--item"><a class="menu__list--link" href="#gallery__heading">Gallery</a></li>
        </ul>
        `;
    }

    domSelection() {
        return {
            list: this.lastElementChild,
            button: this.firstElementChild,
            hamburgerIcon: this.firstElementChild.firstElementChild,
            closeIcon: this.firstElementChild.lastElementChild,
        };
    }
}

customElements.define('my-nav', Nav);
const nav = document.createElement('my-nav');

export default nav;
