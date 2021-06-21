import { createCardsArray } from './create-temporary-data.js';
import { getComparison } from './utils/get-comparison.js';
import { getEndingWordRooms, getEndingWordGuests} from './utils/get-ending-of-words.js';

const cardTemplate = document.querySelector('#card').content;
const mapCanvasElement = document.querySelector('.map__canvas');
const POPUP_PHOTO = {
  className: 'popup__photo',
  width: 45,
  height: 40,
  alt: 'Фотография жилья',
};

const cardsArray = createCardsArray();

const mapCanvasFragment = document.createDocumentFragment();

cardsArray.forEach(({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);

  author.length === 0 ? cardElement.querySelector('.popup__avatar').classList.add('hidden') : cardElement.querySelector('.popup__avatar').src = author;
  offer.title === 0 ? cardElement.querySelector('.popup__title').classList.add('hidden') : cardElement.querySelector('.popup__title').textContent = offer.title;
  offer.address === 0 ? cardElement.querySelector('.popup__text--address').classList.add('hidden') : cardElement.querySelector('.popup__text--address').textContent = offer.address;
  offer.price === 0 ? cardElement.querySelector('.popup__text--price').classList.add('hidden') : cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offer.type === 0 ? cardElement.querySelector('.popup__type').classList.add('hidden') : cardElement.querySelector('.popup__type').textContent = getComparison(offer.type);
  offer.guests === 0 ? cardElement.querySelector('.popup__text--capacity').classList.add('hidden') : cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат${getEndingWordRooms(offer.rooms)} для ${offer.guests} гост${getEndingWordGuests(offer.guests)}`;
  offer.checkout === 0 ? cardElement.querySelector('.popup__text--time').classList.add('hidden') : cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  if (!offer.features) {
    cardElement.querySelector('.popup__features').classListAdd('hidden');
  } else {
    const featuresList = cardElement.querySelector('.popup__features');
    while (featuresList.firstChild) {
      featuresList.removeChild(featuresList.firstChild);
    }
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
    const createPopupPhoto = (photo, offerPhoto) => {
      while (offerPhotos.firstChild) {
        offerPhotos.removeChild(offerPhotos.firstChild);
      }
      if (photo) {
        photos.forEach((photoSrc) => {
          const newPhoto = document.createElement('img');
          newPhoto.classList.add(POPUP_PHOTO.className);
          newPhoto.src = photoSrc;
          newPhoto.width = POPUP_PHOTO.width;
          newPhoto.height = POPUP_PHOTO.height;
          newPhoto.alt = POPUP_PHOTO.alt;
          offerPhoto.appendChild(newPhoto);
        });
      }
    };
    createPopupPhoto(photos, offerPhotos);
  }

  mapCanvasFragment.appendChild(cardElement);

});

mapCanvasElement.appendChild(mapCanvasFragment);
