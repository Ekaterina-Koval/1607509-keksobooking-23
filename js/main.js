// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getInteger = (min, max) => {
  //если переданы отрицательные значения
  if (min < 0 || max < 0) {
    return 'Ошибка ввода данных: минимальное/максимальное значения ожидаются положительные числа (включая ноль)';
  }

  //если передать значение «до» меньшее, чем значение «от», или равное ему
  if (min >= max) {
    return 'Ошибка ввода данных: минимальное значение ожидается меньше максимального';
  }

  //если передан диапазон, в котором отсутствует целое положительное число
  if (Math.floor(min) === Math.floor(max)) {
    return 'Ошибка ввода данных: в переданном дапазоне отсутствует целое число';
  }

  return Math.ceil(Math.random() * (max - min) + min);
};

getInteger();

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getFloat = (min, max, fixed) => {
  if (min < 0 || max < 0) {
    return 'Ошибка ввода данных: минимальное/максимальное значения ожидаются положительные числа (включая ноль)';
  }

  //если «количество знаков после запятой» передано не целое число
  if (fixed < 0 || !Number.isInteger(fixed)) {
    return 'Ошибка ввода данных: количество знаков после запятой ожидается целое положительное число (включая ноль)';
  }

  if (min < 0 || max < 0) {
    return 'Ошибка ввода данных: минимальное/максимальное значения ожидаются положительные числа (включая ноль)';
  }

  if (min >= max) {
    return 'Ошибка ввода данных: минимальное значение ожидается меньше максимального';
  }

  //если после округления сгенерированного числа, оно перестаёт попадать в диапазон
  if (min.toFixed(fixed) === max.toFixed(fixed)) {
    return 'Ошибка ввода данных: необходимо увеличить количество знаков после запятой или изменить диапазон значений';
  }

  return Math.abs((Math.random() * (max - min) + min).toFixed(fixed));
};

getFloat();

/*
Используемые источники:
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  https://learn.javascript.ru/number
  https://habr.com/ru/post/312880/
*/