import {getRandomPositiveInteger} from './get-random-numbers.js';

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomItemNoRepeat = (array) => {
  const randomElement = getRandomPositiveInteger(0, array.length - 1);
  const randomElementItem = array[randomElement];
  array.splice(randomElement, 1);
  return randomElementItem;
};

const createRandomArray = (array) => new Array(0, array.length - 1).fill(null).map(() => getRandomItemNoRepeat(array));

export {getRandomItemNoRepeat, getRandomArrayElement, createRandomArray};
