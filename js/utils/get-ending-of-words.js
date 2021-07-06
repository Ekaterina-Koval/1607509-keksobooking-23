const getEndingWordRooms = (number) => {
  if (number === 1) {return 'а для ';}
  if (number === 100) {return '';}
  if (1 < number <= 4) {return 'ы для ';}
};

const getEndingWordGuests = (number) => {
  if (number === 1) {return ' гостя';}
  if (number === '') { return ' не для гостей'; }
  return ' гостей';
};

export {getEndingWordRooms};
export {getEndingWordGuests};
