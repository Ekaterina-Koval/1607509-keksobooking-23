import { createCardsArray } from './create-temporary-data.js';
import { getComparison } from './utils/get-comparison.js';

const cardTemplate = document.querySelector('#card').content;
const mapCanvasElement = document.querySelector('.map__canvas');

const cardsArray = createCardsArray();

const mapCanvasFragment = document.createDocumentFragment();

cardsArray.forEach(({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);

  author.length === 0 ? cardElement.querySelector('.popup__avatar').classList.add('hidden') : cardElement.querySelector('.popup__avatar').src = author;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = getComparison(offer.type);
  // Изменить окончания комнатЫ и гостЕЙ в соответствии со значениями
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  if (!offer.features) {
    cardElement.querySelector('.popup__features').classListAdd('hidden');
  } else {
    const featuresList = cardElement.querySelector('.popup__features');
    featuresList.innerHTML = '';
    offer.features.map((feature) => {
      const newFeaturesItem = document.createElement('li');
      newFeaturesItem.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresList.appendChild(newFeaturesItem);
    });
  }

  offer.description === 0 ? cardElement.querySelector('.popup__description').classList.add('hidden') : cardElement.querySelector('.popup__description').textContent = offer.description;

  if (offer.photos.length === 0) {
    cardElement.querySelector('.popup__photos').classList.add('hidden');
  } else {
    const photos = offer.photos;
    const offerPhotos = cardElement.querySelector('.popup__photos');
    const createPopupImage = (photo, offerPhoto) => {
      while (offerPhotos.firstChild) {
        offerPhotos.removeChild(offerPhotos.firstChild);
      }
      if (photo) {
        photos.forEach((photoSrc) => {
          const photoWidth = 40;
          const photoHeight = 45;
          const newPhoto = document.createElement('img');
          newPhoto.classList.add('popup__photo');
          newPhoto.src = photoSrc;
          newPhoto.width = photoWidth;
          newPhoto.height = photoHeight;
          newPhoto.alt = 'Фотография жилья';
          offerPhoto.appendChild(newPhoto);
        });
      }
    };
    createPopupImage(photos, offerPhotos);
  }

  mapCanvasFragment.appendChild(cardElement);

});

mapCanvasElement.appendChild(mapCanvasFragment);
