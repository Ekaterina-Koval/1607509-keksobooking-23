import { enabledElementsWithPerrent } from '../form/change-form-state.js';
import { createCard } from './create-markup-cards.js';
import { getData } from './api.js';
import { addressField, resetButton } from '../form/form-validation.js';
import { AD_FORM } from '../form/form-validation.js';
import { showAlert } from '../utils/show-alert.js';
import { filteredData } from './filter.js';
import { userFilterDataArray } from './api.js';


const DEFAULT_ADDRESS = {
  lat: 35.68950,
  lng: 139.69200,
};

const MAIN_MARKER = {
  url: 'leaflet/images/marker-icon.png',
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
  url: 'img/pin.svg',
  size: {
    width: 40,
    height: 40,
  },
  ancor: {
    width: 20,
    height: 40,
  },
};

const NUMBER_OF_CARDS_TO_SHOW = 10;

const map = L.map('map-canvas');
const markersLayer = L.layerGroup().addTo(map);

const resetAddressField = () =>
  addressField.value = `${DEFAULT_ADDRESS.lat.toFixed(5)}, ${DEFAULT_ADDRESS.lng.toFixed(5)}`;

resetAddressField();

const createCards = (cardsArray) => {
  cardsArray.forEach(({ author, location, offer }) => {
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
      .addTo(markersLayer)
      .bindPopup(
        createCard({ author, offer }),
        {
          keepInView: true,
        },
      );
  });
};

getData(
  (dataArray) => createCards(dataArray.slice(0, NUMBER_OF_CARDS_TO_SHOW)),
  () => showAlert('Ошибка при загрузке данных'),
);

const renderFiltredCards = () => {
  markersLayer.clearLayers();
  const cardsData = filteredData(userFilterDataArray, NUMBER_OF_CARDS_TO_SHOW);
  cardsData.forEach(({ author, location, offer }) => {
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
      .addTo(markersLayer)
      .bindPopup(
        createCard({ author, offer }),
        {
          keepInView: true,
        },
      );
  });
};


map.on('load', () => {
  enabledElementsWithPerrent('ad-form', 'fieldset');
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
  iconUrl: MAIN_MARKER.url,
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

mainMarker.on('move', (evt) => {
  const latLng = evt.target.getLatLng();
  addressField.value = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`;
});

const resetUserForm = () => {
  resetAddressField();
  AD_FORM.reset();
  mainMarker.setLatLng(DEFAULT_ADDRESS);
  map.setView(DEFAULT_ADDRESS);
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetUserForm();
});

export {createCards, renderFiltredCards, resetUserForm };

