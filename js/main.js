// Константы для генерации временных данных
const ADVERTISEMENT_LIST_LENGTH = 10;
const INTEGER_ARRAY_ADVERTISEMENT_LENGTH = Array.from({length: ADVERTISEMENT_LIST_LENGTH}, (v, i) => i + 1);
const TITLE = [
  '(01) Лучшее предложение! Спешите забронировать до конца недели.',
  '(02) Комфорт и уют наше кредо. Почувствуйте себя как дома',
  '(03) Остановившись у нас, вы не забудете Токио никогда!',
  '(04) Предложение для самых требовательных',
  '(05) Cashback 10% и экскурсия на выбор в подарок',
  '(06) Бронируйте сейчас - платите потом.',
  '(07) Незабываемый отдых в лучшем районе столицы Японии',
  '(08) Великолепный вид из окна, удобное расположение',
  '(09) Отличная цена! Вам понравится наше предложение!',
  '(10) Не возможно удержаться от того, чтобы не вернуться ещё раз',
];
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TIMES = [
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
  '(01) Хорошее место для доступа в любую точку Токио, но это очень тихий, чистый и безопасный жилой район.',
  '(02) Очень красивая территория с детскими и спортивными площадками.',
  '(03) Тихий, безопасный и красивый жилой район, недалеко от центра города на поезде с удобным транспортным сообщением.',
  '(04) У нас есть дополнительный велосипед для гостей, чтобы они могли кататься по окрестностям или на вокзал.',
  '(05) Комната реконструирована в прошлом году, компромисс между японским и западным стилями, на стене висит картина.',
  '(06) Здесь так красиво в сезон полного цветения сакуры.',
  '(07) Дорога к станции, по обе стороны реки обсажена вишневыми деревьями.',
  '(08) Полностью отремонтированное, меблированное высококачественное жильё в центре Токио. Полностью оборудованная кухня и ванные комнаты.',
  '(09) Тихое и спокойное место ночью, но активная и привлекательная зона днем.',
  '(10) Многочисленные магазины, различные рестораны, и супермаркет всего в 1 минуте, это идеальное место, чтобы пережить опыт жителя Токио, наслаждаясь доступом к близлежащим туристическим достопримечательностям.',
];

// Утилитарные функции
//Получение случайного целого число из диапазона
const getInteger = (min, max) => {
  if (min < 0 || (min > max)) {
    return 'Ошибка ввода данных';
  }
  return Math.round(Math.random() * (max - min) + min);
};
//Получение случайного числа с плавающей точкой из диапазона
const getFloat = (min, max, fixed) => {
  if (min < 0 || (fixed < 0 || !Number.isInteger(fixed)) || (min >= max) || (min.toFixed(fixed) === max.toFixed(fixed))) {
    return 'Ошибка ввода данных';
  }
  return (Math.random() * (max - min) + min).toFixed(fixed);
};
// Получение случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getInteger(0, elements.length - 1)];
//Нахождениение не повторяющегося значения:
const getRandomItemNoRepeat = (array) => {
  const randomElement = getInteger(0, array.length - 1);
  const randomElementItem = array[randomElement];
  array.splice(randomElement, 1);
  return randomElementItem;
};
// Создание из исходного массива, массива произвольной длины
const createRandomArray = (array) => new Array (0, array.length - 1).fill(null).map(() => getRandomItemNoRepeat(array));

// Создание временного объекта - объявления пользователя
const createAdvertisement = () => {
  const userAvatar = (`0${getRandomItemNoRepeat(INTEGER_ARRAY_ADVERTISEMENT_LENGTH)}`).slice(-2);
  const locationX = getFloat(35.65000, 35.70000, 5);
  const locationY = getFloat(139.7, 139.8, 5);
  return {
    author: {
      avatar: `img/avatars/user${userAvatar}.png`,
    },
    offer: {
      title: getRandomItemNoRepeat(TITLE),
      address: `${locationX}, ${locationY}`,
      price: getInteger(0, 1000000),
      type: getRandomArrayElement(TYPE),
      rooms: getInteger(1, 3),
      guests: getInteger(1, 6),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: createRandomArray(FEATURES),
      description: getRandomItemNoRepeat(DESCRIPTION),
      photos: createRandomArray(PHOTOS),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
};
// Создание массива временных объектов заданной длины (10 элементов)
const advertisementList = new Array(ADVERTISEMENT_LIST_LENGTH).fill(null).map(() => createAdvertisement());

advertisementList;
