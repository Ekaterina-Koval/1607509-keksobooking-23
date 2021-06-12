import {getRandomPositiveInteger, getRandomPositiveFloat} from './utils/get-random-numbers.js';
import {getRandomItemNoRepeat, getRandomArrayElement, createRandomArray } from './utils/get-random-array.js';

const ADVERTISEMENT_LIST_LENGTH = 10;
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
const PRICE = {
  minPrice: 1,
  maxPrice: 1000000,
};
const ROOMS = {
  minRooms: 1,
  maxRooms: 100,
};
const GUESTS = {
  minGuests: 1,
  maxGuests: 100,
};
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
const LOCATION = {
  lat: {latMin: 35.65000, latMax: 35.70000},
  lng: {lngMin: 139.7, lngMax: 139.8},
};

const createAdvertisementList = () => {
  const advertisementList = new Array(ADVERTISEMENT_LIST_LENGTH);
  for (let i = 0; i < advertisementList.length; i++) {
    const createAdvertisement = () => {
      const userAvatarIdArray = Array.from({ length: ADVERTISEMENT_LIST_LENGTH }, (v, j) => j + 1);
      const userAvatar = (`0${getRandomItemNoRepeat(userAvatarIdArray)}`).slice(-2);
      const locationLat = getRandomPositiveFloat(LOCATION.lat.latMin, LOCATION.lat.latMax,5);
      const locationLng = getRandomPositiveFloat(LOCATION.lng.lngMin, LOCATION.lng.lngMax, 5);
      return {
        author: {
          avatar: `img/avatars/user${userAvatar}.png`,
        },
        offer: {
          title: getRandomItemNoRepeat(TITLE),
          address: `${locationLat}, ${locationLng}`,
          price: getRandomPositiveInteger(PRICE.minPrice, PRICE.maxPrice),
          type: getRandomArrayElement(TYPE),
          rooms: getRandomPositiveInteger(ROOMS.minRooms, ROOMS.maxRooms),
          guests: getRandomPositiveInteger(GUESTS.minGuests, GUESTS.maxGuests),
          checkin: getRandomArrayElement(TIMES),
          checkout: getRandomArrayElement(TIMES),
          features: createRandomArray(FEATURES),
          description: getRandomItemNoRepeat(DESCRIPTION),
          photos: createRandomArray(PHOTOS),
        },
        location: {
          lat: locationLat,
          lng: locationLng,
        },
      };
    };
    advertisementList[i] = createAdvertisement();
  }
  return advertisementList;
};

export {createAdvertisementList};
