import elementInsertDOM from './model-view';

const container = document.querySelector('.container');

elementInsertDOM.forEach((element) => {
    container.insertAdjacentElement('beforeend', element);
});
