import { enabledElementsWithPerrent } from '../form/change-form-state.js';

const userFilterDataArray = [];

const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((dataArray) => {
      onSuccess(dataArray);
      dataArray.forEach((element) => {
        userFilterDataArray.push(element);
      });
      enabledElementsWithPerrent('map__filters', 'select, fieldset');
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData, userFilterDataArray };
