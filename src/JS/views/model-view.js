import header from '../components/header';
import nav from '../components/nav';
import services from '../components/services';
import gallery from '../components/gallery';

/**
 * FUNCTION ini menerima input custom element.
 * yang dibuat pada folder component.
 * kemudian mengembalikan array yang berisi
 * element element yang akan ditampilakan
 * ke DOM
 */
const insertElementToDOM = (...elements) => {
    return elements;
};

const elementInsertDOM = insertElementToDOM(header, nav, services, gallery);

export default elementInsertDOM;
