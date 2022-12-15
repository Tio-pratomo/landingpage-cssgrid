class Header extends HTMLElement {
    connectedCallback() {
        this.setAttribute('class', 'header');
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `

                <div class="header__hero">
                    <h2 class="header__hero__heading">This's Laptop</h2>
                    <p class="header__hero__sub-heading">Anything Laptop</p>
                </div>

                <div class="features features--1">
                    <h4 class="features__price">IDR 5.739.000</h4>
                    <p class="features__item">Vivobook M415</p>
                </div>

                <div class="features features--2">
                    <h4 class="features__price">IDR 18.000.000</h4>
                    <p class="features__item">Apple Macbook Air MQD42 New 2017</p>
                </div>
        `;
    }
}

customElements.define('my-header', Header);
const header = document.createElement('my-header');
export default header;
