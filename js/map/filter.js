import { createCards } from './map.js';
import { debounce } from '../utils/debounce.js';
import { isInRange } from '../utils/isInRange.js';

/*
const housingTypeFilter = filters.querySelector('.housing-type');
const housingPriceFilter = filters.querySelector('.housing-price');
const housingRoomsFilter = filters.querySelector('.housing-rooms');
const housingGuestsFilter = filters.querySelector('.housing-guests');
const housingFeaturesFilter = filters.querySelector('.housing-features');
*/

const mapFilters = document.querySelector('.map__filters');
const filterOptions = mapFilters.querySelectorAll('.map__filter');
const filterInputs = mapFilters.querySelectorAll('input');
const priceRange = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, Infinity],
};
const filteredCards = (cardsArray) => {
  const getOptionsValues = () => {
    const optionsValues = {};
    filterOptions.forEach((selectName) => {
      const name = selectName.getAttribute('name');
      const value = selectName.value;
      if (value !== 'any') {
        optionsValues[name] = value;
      }
    });

    return optionsValues;
  };

  const getInputsValues = () => {
    const inputsArray = [];
    filterInputs.forEach((input) => {
      const value = input.getAttribute('value');
      if (input.checked) {
        inputsArray.push(value);
      }
    });

    return inputsArray;
  };

  const housingOptions = getOptionsValues();
  const housingFeatures = getInputsValues();

  const filteredCardsArray = cardsArray.filter((card) => {
    if (housingFeatures.length > 0 && (!card.offer.features || card.offer.features.length === 0)) {
      return false;
    }
    for (const input of housingFeatures) {
      if (!card.offer.features.includes(input)) {
        return false;
      }
    }
    if (housingOptions['housing-type'] && housingOptions['housing-type'] !== card.offer.type) {
      return false;
    }
    if (housingOptions['housing-rooms'] && +housingOptions['housing-rooms'] !== +card.offer.rooms) {
      return false;
    }
    if (housingOptions['housing-guests'] && +housingOptions['housing-guests'] !== +card.offer.guests) {
      return false;
    }
    return !(housingOptions['housing-price'] && !isInRange(+card.offer.price, priceRange[housingOptions['housing-price']]));
  });

  const sortedCardsArray = filteredCardsArray.sort((a, b) => {
    if (a.offer.features && b.offer.features) {
      return a.offer.features.length - b.offer.features.length;
    }
    return 0;
  });

  return sortedCardsArray.slice(0, 10);
};

const setFilterChangeHandler = () => {
  filterInputs.forEach((input) => {
    input.addEventListener('change', debounce(() => createCards(10)));
  });

  filterOptions.forEach((select) => {
    select.addEventListener('change', debounce(() => createCards(10)));
  });
};

export { setFilterChangeHandler, filteredCards };

