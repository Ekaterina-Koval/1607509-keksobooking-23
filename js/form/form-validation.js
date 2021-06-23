import { setDisabledValue } from '../utils/set-disabled-value.js';

const MATCHING_FORM_FIELDS = {
  title: {
    minLength: 30,
    maxLength: 100,
  },
  price: {
    max: 1000000,
  },
};

const AD_FORM = document.querySelector('.ad-form');
const titleField = AD_FORM.querySelector('input[name=title]');
//const addressField = AD_FORM.querySelector('input[name=address]');
//const typeField = AD_FORM.querySelector('select[name=type]');
const priceField = AD_FORM.querySelector('input[name=price]');
//const timeInField = AD_FORM.querySelector('select[name=timein]');
//const timeOutField = AD_FORM.querySelector('select[name=timeOut]');
const roomsField = AD_FORM.querySelector('select[name=rooms]');
const capacityField = AD_FORM.querySelector('select[name=capacity]');
const capacityFieldOptions = capacityField.querySelectorAll('option');
//const featuresField = AD_FORM.querySelector('input[name=features]');
//const discriptionField = AD_FORM.querySelector('textarea[name=discription]');
//const imagesField = AD_FORM.querySelector('input[name=images]');

titleField.addEventListener('input', () => {
  const valueLength = titleField.value.length;
  if (valueLength === 0) {
    titleField.setCustomValidity('Обязательное поле');
  } else if (valueLength < MATCHING_FORM_FIELDS.title.minLength) {
    titleField.setCustomValidity(`Введите ещё ${MATCHING_FORM_FIELDS.title.minLength - valueLength} симв.`);
  } else if (valueLength > MATCHING_FORM_FIELDS.title.maxLength) {
    titleField.setCustomValidity(`Удалите лишние ${valueLength - MATCHING_FORM_FIELDS.title.maxLength} симв.`);
  } else {
    titleField.setCustomValidity('');
  }
  titleField.reportValidity();
});
priceField.addEventListener('input', () => {
  const value = priceField.value;
  if (value > MATCHING_FORM_FIELDS.price.max) {
    priceField.setCustomValidity(`Цена за начь не должна превышать ${MATCHING_FORM_FIELDS.price.max}`);
  } else {
    priceField.setCustomValidity('');
  }
  priceField.reportValidity();
});

roomsField.addEventListener('change', () => {
  const roomsFieldValue = roomsField.value;
  switch (roomsFieldValue) {
    case '1':
      setDisabledValue(capacityFieldOptions, ['0', '2', '3']);
      capacityFieldOptions[2].selected = true;
      break;
    case '2':
      setDisabledValue(capacityFieldOptions, ['0', '3']);
      capacityFieldOptions[1].selected = true;
      break;
    case '3':
      setDisabledValue(capacityFieldOptions, ['0']);
      capacityFieldOptions[0].selected = true;
      break;
    case '100':
      setDisabledValue(capacityFieldOptions, ['1', '2', '3']);
      capacityFieldOptions[3].selected = true;
      break;
  }
});
