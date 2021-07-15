import { debounce } from '../utils/debounce.js';
import { isInRange } from '../utils/isInRange.js';
import {renderFiltredCards} from './map.js';

const mapFilters = document.querySelector('.map__filters');
const filterOptions = mapFilters.querySelectorAll('.map__filter');
const filterInputs = mapFilters.querySelectorAll('input');
const priceRange = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, Infinity],
};
const filteredData = (dataArray) => {
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

  const filteredDataArray = dataArray.filter((element) => {
    if (housingFeatures.length > 0 && (!element.offer.features || element.offer.features.length === 0)) {
      return false;
    }
    for (const input of housingFeatures) {
      if (!element.offer.features.includes(input)) {
        return false;
      }
    }
    if (housingOptions['housing-type'] && housingOptions['housing-type'] !== element.offer.type) {
      return false;
    }
    if (housingOptions['housing-rooms'] && +housingOptions['housing-rooms'] !== +element.offer.rooms) {
      return false;
    }
    if (housingOptions['housing-guests'] && +housingOptions['housing-guests'] !== +element.offer.guests) {
      return false;
    }
    return !(housingOptions['housing-price'] && !isInRange(+element.offer.price, priceRange[housingOptions['housing-price']]));
  });

  const sortedCardsArray = filteredDataArray.sort((a, b) => {
    if (a.offer.features && b.offer.features) {
      return a.offer.features.length - b.offer.features.length;
    }
    return 0;
  });
  return sortedCardsArray.slice(0, 10);

};

const setFilterChangeHandler = () => {
  filterInputs.forEach((input) => {
    input.addEventListener('change', debounce (() => renderFiltredCards()));
  });

  filterOptions.forEach((select) => {
    select.addEventListener('change', debounce(() => renderFiltredCards()));
  });
};

setFilterChangeHandler();

export { setFilterChangeHandler, filteredData };
