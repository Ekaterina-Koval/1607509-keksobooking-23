import { createCards } from '../map/map.js';
import { showAlert } from '../utils/show-alert.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((cards) => {
      onSuccess(cards.slice(0, 10));
    })
    .catch(() => {
      showAlert('Ошибка при загрузке данных.');
    });
};

getData((cardsArray) => {
  createCards(cardsArray);
});

