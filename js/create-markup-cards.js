import {createCardsArray} from './create-temporary-data.js';

const cardTemplate = document.querySelector('#card').content;
const mapCanvasElement = document.querySelector('.map__canvas');

const cardsArray = createCardsArray();

const mapCanvasFragment = document.createDocumentFragment();

cardsArray.forEach(({ author, offer }) => {
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

  //const features = offer.features;
  /*
  const features = [
    'wifi',
    'parking',
    'elevator',
    'conditioner',
  ];
  const featuresList = document.querySelector('.popup__features');

  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  featuresList.querySelectorAll('.popup__feature').forEach((item) => {
    const modifire = item.classList[1];
    if(!modifiers.includes(modifire)) {
      item.remove();
    }
  });
  */
  cardElement.querySelector('.popup__description').textContent = offer.description;
  /* Разобраться с фото
  cardElement.querySelector('.popup__photos');
  */

  mapCanvasFragment.appendChild(cardElement);

});

mapCanvasElement.appendChild(mapCanvasFragment);
