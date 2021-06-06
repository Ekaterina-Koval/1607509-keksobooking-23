// Утилитарные функции
const getInteger = (min, max) => {
  if (min < 0) {
    return 'Ошибка ввода данных: минимальное/максимальное значения ожидаются положительные числа (включая ноль)';
  }
  if (min >= max) {
    return 'Ошибка ввода данных: минимальное значение ожидается меньше максимального';
  }
  if (Math.floor(min) === Math.floor(max)) {
    return 'Ошибка ввода данных: в переданном дапазоне отсутствует целое число';
  }

  return Math.ceil(Math.random() * (max - min) + min);
};

const getFloat = (min, max, fixed) => {
  if (min < 0) {
    return 'Ошибка ввода данных: минимальное/максимальное значения ожидаются положительные числа (включая ноль)';
  }
  if (fixed < 0 || !Number.isInteger(fixed)) {
    return 'Ошибка ввода данных: количество знаков после запятой ожидается целое положительное число (включая ноль)';
  }
  if (min >= max) {
    return 'Ошибка ввода данных: минимальное значение ожидается меньше максимального';
  }
  if (min.toFixed(fixed) === max.toFixed(fixed)) {
    return 'Ошибка ввода данных: необходимо увеличить количество знаков после запятой или изменить диапазон значений';
  }
  return (Math.random() * (max - min) + min).toFixed(fixed);
};

// Генерация временных данных
const TITLE = [
  'Лучшее предложение! Спешите забронировать до конца недели.',
  'Комфорт и уют наше кредо. Почувствуйте себя как дома',
  'Остановившись у нас, вы не забудете Токио никогда!',
  'Предложение для самых требовательных',
  'Cashback 10% и экскурсия на выбор в подарок',
  'Бронируйте сейчас - платите потом.',
  'Незабываемый отдых в лучшем районе столицы Японии',
  'Великолепный вид из окна, удобное расположение',
  'Отличная цена! Вам понравится наше предложение!',
  'Не возможно удержаться от того, чтобы не вернуться ещё раз',
];
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'Хорошее место для доступа в любую точку Токио, но это очень тихий, чистый и безопасный жилой район.',
  'Очень красивая территория с детскими и спортивными площадками.',
  'Тихий, безопасный и красивый жилой район, недалеко от центра города на поезде с удобным транспортным сообщением.',
  'У нас есть дополнительный велосипед для гостей, чтобы они могли кататься по окрестностям или на вокзал.',
  'Комната реконструирована в прошлом году, компромисс между японским и западным стилями, на стене висит картина.',
  'Здесь так красиво в сезон полного цветения сакуры.',
  'Дорога к станции, по обе стороны реки обсажена вишневыми деревьями.',
  'Полностью отремонтированное, меблированное высококачественное жильё в центре Токио. Полностью оборудованная кухня и ванные комнаты.',
  'Тихое и спокойное место ночью, но активная и привлекательная зона днем.',
  'Многочисленные магазины, различные рестораны, и супермаркет всего в 1 минуте, это идеальное место, чтобы пережить опыт жителя Токио, наслаждаясь доступом к близлежащим туристическим достопримечательностям.',
];

const getRandomArrayElement = (elements) => elements[getInteger(0, elements.length - 1)];
const createRandomArray = (array) => new Array(getInteger(0, array.length - 1)).fill(null).map(() => array[getInteger(0, array.length - 1)]);

const createAdvertisement = () => {
  const userAvatar = `img/avatars/user0${getInteger(0, 10)}.png`;
  const locationX = getFloat(35.65000, 35.70000, 5);
  const locationY = getFloat(139.7, 139.8, 5);
  return {
    author: userAvatar,
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${locationX}, ${locationY}`,
      price: getInteger(0, 1000000),
      type: getRandomArrayElement(TYPE),
      rooms: getInteger(1, 3),
      guests: getInteger(1, 6),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: createRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: createRandomArray(PHOTOS),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
};

const advertisementListLength = 10;
const advertisementList = new Array(advertisementListLength).fill(null).map(() => createAdvertisement());

advertisementList;
