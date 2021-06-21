const getEndingWordRooms = (number) => {
  const n = number % 10;
  if (n === 1) {return 'а';}
  if (1 < n <= 4) {return 'ы';}
  if (n === 0 || n > 4) {return '';}
};

const getEndingWordGuests = (number) => {
  const n = number % 10;
  if(n === 1) {return 'я';}
  return 'ей';
};

export {getEndingWordRooms};
export {getEndingWordGuests};
