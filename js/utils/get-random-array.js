import {getRandomPositiveInteger} from './get-random-numbers.js';

const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const getRandomItemNoRepeat = (array) => {
  const randomElement = getRandomPositiveInteger(0, array.length - 1);
  const randomElementItem = array[randomElement];
  array.splice(randomElement, 1);
  return randomElementItem;
};

const createRandomArray = (array) => {
  const newArray = array.slice();
  return new Array(getRandomPositiveInteger(0, array.length - 1)).fill(null).map(() => getRandomItemNoRepeat(newArray));
};

export {getRandomItemNoRepeat, getRandomArrayElement, createRandomArray};
