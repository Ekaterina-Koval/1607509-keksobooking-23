import { createCardList } from './create-temporary-data.js';

const cardTemplate = document.querySelector('#card').content;
const mapCanvasElement = document.querySelector('.map__canvas');

const cardList = createCardList();

const mapCanvasFragment = document.createDocumentFragment();

cardList.forEach(({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);
  const getTypeTranslate = (offerType) => {
    switch (offerType) {
      case 'bungalow': return 'Бунгало';
      case 'flat': return 'Квартира';
      case 'hotel': return 'Отель';
      case 'house': return 'Дом';
      case 'palace': return 'Дворец';
    }
  };
  cardElement.querySelector('.popup__avatar').src = author;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = getTypeTranslate(offer.type);
  // Изменить окончания комнатЫ и гостЕЙ в соответствии со значениями
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  /* Доработать по лайву
  cardElement.querySelector('.popup__features')
  */
  cardElement.querySelector('.popup__description').textContent = offer.description;
  /* Разобраться с фото
  cardElement.querySelector('.popup__photos');
  */

  mapCanvasFragment.appendChild(cardElement);

});

mapCanvasElement.appendChild(mapCanvasFragment);
