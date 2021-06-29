import { createCardsArray } from '../data/create-temporary-data.js';
import { enabledElementsWithPerrent } from '../form/change-page-state.js';
import { addressField, resetButton } from '../form/form-validation.js';

const DEFAULT_ADDRESS = {
  lat: 35.68950,
  lng: 139.69200,
};

const MAIN_MARKER = {
  url: '../../leaflet/images/marker-icon.png',
  size: {
    width: 52,
    height: 52,
  },
  ancor: {
    width: 26,
    height: 52,
  },
};

const REGULAR_MARKER = {
  url: '../../img/pin.svg',
  size: {
    width: 40,
    height: 40,
  },
  ancor: {
    width: 20,
    height: 40,
  },
};

const map = L.map('map-canvas');


const resetAddressField = () =>
  addressField.value = `${DEFAULT_ADDRESS.lat.toFixed(5)}, ${DEFAULT_ADDRESS.lng.toFixed(5)}`;

resetAddressField();

map.on('load', () => {
  enabledElementsWithPerrent('ad-form', 'fieldset');
  enabledElementsWithPerrent('map__filters', 'select, fieldset');
});

map.setView(
  DEFAULT_ADDRESS,
  10,
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: '../../leaflet/images/marker-icon.png',
  iconSize: [MAIN_MARKER.size.width, MAIN_MARKER.size.height],
  iconAnchor: [MAIN_MARKER.ancor.width, MAIN_MARKER.ancor.height],
});

const mainMarker = L.marker(
  DEFAULT_ADDRESS,
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  addressField.value = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`;
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetAddressField();
  mainMarker.setLatLng(DEFAULT_ADDRESS);
  map.setView(DEFAULT_ADDRESS);
});

/*
const cardsArray = [
  {
    author: 'img/avatars/user01.png',
    offer: {
      title: undefined,
      address: '35.65638, 139.71503',
      price: 313725,
      type: 'palace',
      rooms: 2,
      guests: 2,
      checkin: '13:00',
      checkout: '13:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.65638', lng: '139.71503' },
  },
  {
    author: 'img/avatars/user02.png',
    offer: {
      title: undefined,
      address: '35.65982, 139.70984',
      price: 716300,
      type: 'hotel',
      rooms: 100,
      guests: '',
      checkin: '12:00',
      checkout: '12:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.65982', lng: '139.70984' },
  },
  {
    author: 'img/avatars/user03.png',
    offer: {
      title: undefined,
      address: '35.67045, 139.75711',
      price: 558405,
      type: 'bungalow',
      rooms: 3,
      guests: 3,
      checkin: '13:00',
      checkout: '13:00',
      features: [Array],
      description: undefined,
      photos: [],
    },
    location: { lat: '35.67045', lng: '139.75711' },
  },
  {
    author: 'img/avatars/user04.png',
    offer: {
      title: undefined,
      address: '35.67640, 139.77057',
      price: 81095,
      type: 'flat',
      rooms: 1,
      guests: 1,
      checkin: '14:00',
      checkout: '14:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.67640', lng: '139.77057' },
  },
  {
    author: 'img/avatars/user05.png',
    offer: {
      title: undefined,
      address: '35.68630, 139.77305',
      price: 531402,
      type: 'palace',
      rooms: 2,
      guests: 2,
      checkin: '14:00',
      checkout: '14:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.68630', lng: '139.77305' },
  },
  {
    author: 'img/avatars/user06.png',
    offer: {
      title: undefined,
      address: '35.69129, 139.77683',
      price: 814127,
      type: 'flat',
      rooms: 100,
      guests: '',
      checkin: '12:00',
      checkout: '12:00',
      features: [],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.69129', lng: '139.77683' },
  },
  {
    author: 'img/avatars/user07.png',
    offer: {
      title: undefined,
      address: '35.67040, 139.78592',
      price: 21443,
      type: 'house',
      rooms: 3,
      guests: 3,
      checkin: '12:00',
      checkout: '12:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.67040', lng: '139.78592' },
  },
  {
    author: 'img/avatars/user08.png',
    offer: {
      title: undefined,
      address: '35.66971, 139.74425',
      price: 187206,
      type: 'flat',
      rooms: 100,
      guests: '',
      checkin: '12:00',
      checkout: '12:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.66971', lng: '139.74425' },
  },
  {
    author: 'img/avatars/user09.png',
    offer: {
      title: undefined,
      address: '35.65228, 139.78006',
      price: 541197,
      type: 'palace',
      rooms: 3,
      guests: 3,
      checkin: '13:00',
      checkout: '13:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.65228', lng: '139.78006' },
  },
  {
    author: 'img/avatars/user10.png',
    offer: {
      title: undefined,
      address: '35.66883, 139.71549',
      price: 581140,
      type: 'bungalow',
      rooms: 1,
      guests: 1,
      checkin: '13:00',
      checkout: '13:00',
      features: [Array],
      description: undefined,
      photos: [Array],
    },
    location: { lat: '35.66883', lng: '139.71549' },
  },
];
*/
const cardsArray = createCardsArray();

cardsArray.forEach(({ location}) => {
  const icon = L.icon({
    iconUrl: REGULAR_MARKER.url,
    iconSize: [REGULAR_MARKER.size.width, REGULAR_MARKER.size.height],
    iconAnchor: [REGULAR_MARKER.ancor.width, REGULAR_MARKER.ancor.height],
  });
  const cardMarker = L.marker(
    location,
    {
      icon,
    },
  );

  cardMarker
    .addTo(map);

});


