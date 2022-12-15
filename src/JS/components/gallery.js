import * as Laptop from './photos';

class Gallery extends HTMLElement {
    constructor() {
        super();
        this.photos = [
            { theSource: Laptop.laptop1, theAlt: 'Acer_Swift3_OLED' },
            { theSource: Laptop.laptop2, theAlt: 'Acer_Nitro_5' },
            { theSource: Laptop.laptop3, theAlt: 'ASUS_X44H' },
            { theSource: Laptop.laptop4, theAlt: 'ASUS_X200CA' },
            { theSource: Laptop.laptop5, theAlt: 'dell 3511' },
            { theSource: Laptop.laptop6, theAlt: 'hp_envy_13' },
            { theSource: Laptop.laptop7, theAlt: 'infinix_inbook_x1' },
            { theSource: Laptop.laptop8, theAlt: 'Lenovo_IdeaPad_Slim_3' },
            { theSource: Laptop.laptop9, theAlt: 'Lenovo_Legion_Y740' },
            { theSource: Laptop.laptop10, theAlt: 'pavillion_X360' },
        ];
    }

    connectedCallback() {
        this.setAttribute('class', 'gallery');
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
        <h2 id="gallery__heading" class="gallery__heading">Gallery</h2>
        ${this.insertPhotoToGallery()}
        `;
    }

    insertPhotoToGallery() {
        let elements = '';

        this.processPhotos().forEach((photo) => {
            elements += photo;
        });

        return elements;
    }

    processPhotos() {
        return this.photos.map(
            (photo) => /* html */ `
        <img class="gallery__image" src="${photo.theSource}" alt="${photo.theAlt}">
        `
        );
    }
}

customElements.define('my-gallery', Gallery);
const gallery = document.createElement('my-gallery');

export default gallery;
