/*const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = filters.querySelector('.housing-type');
const housingPriceFilter = filters.querySelector('.housing-price');
const housingRoomsFilter = filters.querySelector('.housing-rooms');
const housingGuestsFilter = filters.querySelector('.housing-guests');
const housingFeaturesFilter = filters.querySelector('.housing-features');

const filterType = ({offer}) => housingTypeFilter.value === offer.type || housingTypeFilter.value === 'any';


const getFilter = (offer) => {
  const filters = [
    filterType,
  ];

  return filters.every((check) => check(offer));
};

const getFilters = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  });
};

const getFilteredCards = (offers) => {
  const filteredOffers = offers.filter(getFilter).slice(0, 10);
  return filteredOffers;
};

export {getFilters, getFilteredCards};
*/
