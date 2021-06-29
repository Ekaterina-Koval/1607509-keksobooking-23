import { setDisabledValue } from '../utils/set-disabled-value.js';

const MATCHING_FORM_FIELDS = {
  title: {
    minLength: 30,
    maxLength: 100,
  },
  price: {
    max: 1000000,
    min: [
      {bungalow: 0},
      {flat: 1000},
      {hotel: 3000},
      {house: 5000},
      {palace: 10000},
    ],
  },
  roomsForGuests: {
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    100: [0],
  },
  time: [
    '12:00',
    '13:00',
    '14:00',
  ],
};

const AD_FORM = document.querySelector('.ad-form');
const titleField = AD_FORM.querySelector('input[name=title]');
const addressField = document.querySelector('input[name=address]');
const typeField = AD_FORM.querySelector('select[name=type]');
const priceField = AD_FORM.querySelector('input[name=price]');
const timeInField = AD_FORM.querySelector('select[name=timein]');
const timeInFieldOptions = timeInField.querySelectorAll('option');
const timeOutField = AD_FORM.querySelector('select[name=timeout]');
const timeOutFieldOptions = timeOutField.querySelectorAll('option');
const roomsField = AD_FORM.querySelector('select[name=rooms]');
const capacityField = AD_FORM.querySelector('select[name=capacity]');
const capacityFieldOptions = capacityField.querySelectorAll('option');
//const featuresField = AD_FORM.querySelector('input[name=features]');
//const discriptionField = AD_FORM.querySelector('textarea[name=discription]');
//const imagesField = AD_FORM.querySelector('input[name=images]');
const resetButton = AD_FORM.querySelector('.ad-form__reset');

titleField.addEventListener('input', () => {
  const titleFieldValueLength = titleField.value.length;
  if (titleFieldValueLength === 0) {
    titleField.setCustomValidity('Обязательное поле');
  } else if (titleFieldValueLength < MATCHING_FORM_FIELDS.title.minLength) {
    titleField.setCustomValidity(`Введите ещё ${MATCHING_FORM_FIELDS.title.minLength - titleFieldValueLength} симв.`);
  } else if (titleFieldValueLength > MATCHING_FORM_FIELDS.title.maxLength) {
    titleField.setCustomValidity(`Удалите лишние ${titleFieldValueLength - MATCHING_FORM_FIELDS.title.maxLength} симв.`);
  } else {
    titleField.setCustomValidity('');
  }
  titleField.reportValidity();
});

addressField.setAttribute('readonly', '');

priceField.setAttribute('min', MATCHING_FORM_FIELDS.price.min.flat);
typeField.addEventListener('change', () => {
  const typeFieldValue = typeField.value;
  const minPriceOfType = MATCHING_FORM_FIELDS.price.min;
  minPriceOfType.forEach ((element) => {
    switch (typeFieldValue) {
      case Object.keys(element)[0]:
        priceField.setAttribute('min', Object.values(element)[0]);
        priceField.setAttribute('placeholder', Object.values(element)[0]);
        break;
    }
  });
});
// Добавить проверку на не число!
priceField.addEventListener('input', () => {
  const priceFieldValue = priceField.value;
  if (priceFieldValue > MATCHING_FORM_FIELDS.price.max) {
    priceField.setCustomValidity(`Цена за начь не должна превышать ${MATCHING_FORM_FIELDS.price.max}`);
  } else if (priceFieldValue < priceField.min) {
    priceField.setCustomValidity(`Цена за начь должна быть больше ${priceField.min}`);
  } else {
    priceField.setCustomValidity('');
  }
  priceField.reportValidity();
});

capacityFieldOptions[0].removeAttribute('selected');
capacityFieldOptions[2].setAttribute('selected', '');
roomsField.addEventListener('change', () => {
  const roomsFieldValue = roomsField.value;
  switch (roomsFieldValue) {
    case Object.keys(MATCHING_FORM_FIELDS.roomsForGuests)[0]:
      setDisabledValue(capacityFieldOptions, ['0', '2', '3']);
      capacityFieldOptions[2].selected = true;
      break;
    case Object.keys(MATCHING_FORM_FIELDS.roomsForGuests)[1]:
      setDisabledValue(capacityFieldOptions, ['0', '3']);
      capacityFieldOptions[1].selected = true;
      break;
    case Object.keys(MATCHING_FORM_FIELDS.roomsForGuests)[2]:
      setDisabledValue(capacityFieldOptions, ['0']);
      capacityFieldOptions[0].selected = true;
      break;
    case Object.keys(MATCHING_FORM_FIELDS.roomsForGuests)[3]:
      setDisabledValue(capacityFieldOptions, ['1', '2', '3']);
      capacityFieldOptions[3].selected = true;
      break;
  }
});

const changeTimeField = (variableField, dependentField ) => {
  variableField.addEventListener('change', () => {
    const variableFieldValue = variableField.value;
    switch (variableFieldValue) {
      case 'MATCHING_FORM_FIELDS.time[0]':
        setDisabledValue(dependentField, ['1', '2']);
        dependentField[0].selected = true;
        break;
      case MATCHING_FORM_FIELDS.time[1]:
        setDisabledValue(dependentField, ['0', '2']);
        dependentField[1].selected = true;
        break;
      case MATCHING_FORM_FIELDS.time[2]:
        setDisabledValue(dependentField, ['0', '1']);
        dependentField[2].selected = true;
        break;
    }
  });
};

changeTimeField(timeInField, timeOutFieldOptions);
changeTimeField(timeOutField, timeInFieldOptions);

export {addressField, resetButton};
