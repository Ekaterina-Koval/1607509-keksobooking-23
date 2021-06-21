const getComparison = (basicValue) => {
  switch (basicValue) {
    case 'bungalow': return 'Бунгало';
    case 'flat': return 'Квартира';
    case 'hotel': return 'Отель';
    case 'house': return 'Дом';
    case 'palace': return 'Дворец';
  }
};

export { getComparison };
