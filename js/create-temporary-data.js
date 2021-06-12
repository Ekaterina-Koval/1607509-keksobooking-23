import { getRandomPositiveInteger, getRandomPositiveFloat } from './utils/get-random-numbers.js';
import { getRandomItemNoRepeat, getRandomArrayElement, createRandomArray } from './utils/get-random-array.js';

const advertData = {
  title: [
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
  ],
  price: {
    minPrice: 1,
    maxPrice: 1000000,
  },
  rooms: {
    minRooms: 1,
    maxRooms: 100,
  },
  guests: {
    minGuests: 1,
    maxGuests: 100,
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
  ],
  location: {
    lat: { latMin: 35.65000, latMax: 35.70000 },
    lng: { lngMin: 139.7, lngMax: 139.8 },
  },
};

const createAdvertList = () => {
  const advertListLength = 10;
  const advertList = new Array(advertListLength);
  for (let i = 0; i < advertList.length; i++) {
    const createAdvert = () => {
      const userAvatarIdArray = Array.from({ length: advertListLength }, (v, j) => j + 1);
      const userAvatar = (`0${getRandomItemNoRepeat(userAvatarIdArray)}`).slice(-2);
      const locationLat = getRandomPositiveFloat(advertData.location.lat.latMin, advertData.location.lat.latMax, 5);
      const locationLng = getRandomPositiveFloat(advertData.location.lng.lngMin, advertData.location.lng.lngMax, 5);
      return {
        author: {
          avatar: `img/avatars/user${userAvatar}.png`,
        },
        offer: {
          title: getRandomItemNoRepeat(advertData.title),
          address: `${locationLat}, ${locationLng}`,
          price: getRandomPositiveInteger(advertData.price.minPrice, advertData.price.maxPrice),
          type: getRandomArrayElement(advertData.type),
          rooms: getRandomPositiveInteger(advertData.rooms.minRooms, advertData.rooms.maxRooms),
          guests: getRandomPositiveInteger(advertData.guests.minGuests, advertData.guests.maxGuests),
          checkin: getRandomArrayElement(advertData.times),
          checkout: getRandomArrayElement(advertData.times),
          features: createRandomArray(advertData.features),
          description: getRandomItemNoRepeat(advertData.description),
          photos: createRandomArray(advertData.photos),
        },
        location: {
          lat: locationLat,
          lng: locationLng,
        },
      };
    };
    advertList[i] = createAdvert();
  }
  return advertList;
};

export { createAdvertList };
