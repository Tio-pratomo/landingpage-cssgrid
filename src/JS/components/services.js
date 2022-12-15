class Services extends HTMLElement {
    constructor() {
        super();
        this.servicesText = [
            {
                icon: '💻',
                heading: 'Barang Baru',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, dicta. Perspiciatis autem accusamus reprehenderit a!',
            },
            {
                icon: '🛠',
                heading: 'Bergaransi',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, dicta. Perspiciatis autem accusamus reprehenderit a!',
            },
            {
                icon: '🚚',
                heading: 'Diantar juga bisa',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, dicta. Perspiciatis autem accusamus reprehenderit a!',
            },
            {
                icon: '💳',
                heading: 'Pembayaran mudah',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, dicta. Perspiciatis autem accusamus reprehenderit a!',
            },
        ];
    }

    connectedCallback() {
        this.setAttribute('class', 'services');
        this.render();
    }

    render() {
        const servicesElement = this.processServiceElement();
        servicesElement.forEach((element) => {
            this.insertAdjacentHTML('beforeend', element);
        });
    }

    processServiceElement() {
        return this.servicesText.map(
            (serviceText) => /* html */ `
        <div class="service">
            <div class="service__icon">${serviceText.icon}</div>
            <h3 class="service__heading">${serviceText.heading}</h3>
            <p class="service__text">${serviceText.text}</p>
        </div>
        `
        );
    }
}

customElements.define('my-services', Services);
const services = document.createElement('my-services');

export default services;
