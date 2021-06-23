import { getRandomPositiveInteger, getRandomPositiveFloat } from '../utils/get-random-numbers.js';
import { getRandomItemNoRepeat, getRandomArrayElement, createRandomArray } from '../utils/get-random-array.js';

const cardData = {
  cardsArrayLength: 10,
  author: 'img/avatars/user',
  title: [
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
  ],
  price: {
    minPrice: 1,
    maxPrice: 1000000,
  },
  rooms: {
    oneRoom: 1,
    twoRooms: 2,
    threeRooms: 3,
    oneHandredRooms: 100,
  },
  guests: {
    oneRoom: 1,
    twoRooms: 2,
    threeRooms: 3,
    oneHandredRooms: '',
  },
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  times: [
    '12:00',
    '13:00',
    '14:00',
  ],
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  description: [
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
  ],
  location: {
    latMin: 35.65000,
    latMax: 35.70000,
    lngMin: 139.7,
    lngMax: 139.8,
  },
};

const createCardsArray = () => {
  const cardsArray = new Array(cardData.cardsArrayLength);
  for (let i = 0; i < cardsArray.length; i++) {
    const createCard = () => {
      const locationLat = getRandomPositiveFloat(cardData.location.latMin, cardData.location.latMax, 5);
      const locationLng = getRandomPositiveFloat(cardData.location.lngMin, cardData.location.lngMax, 5);
      const numbersOfRooms = getRandomArrayElement(Object.keys(cardData.rooms));
      const checkTime = getRandomArrayElement(cardData.times);
      return {
        author: `${cardData.author}${(`0${i + 1}`).slice(-2)}.png`,
        offer: {
          title: getRandomItemNoRepeat(cardData.title),
          address: `${locationLat}, ${locationLng}`,
          price: getRandomPositiveInteger(cardData.price.minPrice, cardData.price.maxPrice),
          type: getRandomArrayElement(cardData.type),
          rooms: cardData.rooms[numbersOfRooms],
          guests: cardData.guests[numbersOfRooms],
          checkin: checkTime,
          checkout: checkTime,
          features: createRandomArray(cardData.features),
          description: getRandomItemNoRepeat(cardData.description),
          photos: createRandomArray(cardData.photos),
        },
        location: {
          lat: locationLat,
          lng: locationLng,
        },
      };
    };
    cardsArray[i] = createCard();
  }
  return cardsArray;
};

export { createCardsArray };
