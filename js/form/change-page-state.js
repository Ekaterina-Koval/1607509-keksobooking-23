const disabledElementsWithPerrent = (perrentClassName, childTegName) => {
  const perrentElement = document.querySelector(`.${perrentClassName}`);
  const childElement = perrentElement.querySelectorAll(childTegName);
  perrentElement.classList.add(`${perrentClassName}--disabled`);
  childElement.forEach((element) => (element.disabled = true));
};

const enabledElementsWithPerrent = (perrentClassName, childTegName) => {
  const perrentElement = document.querySelector(`.${perrentClassName}`);
  const childElement = perrentElement.querySelectorAll(childTegName);
  perrentElement.classList.remove(`${perrentClassName}--disabled`);
  childElement.forEach((element) => (element.disabled = false));
};

/*
disabledElementsWithPerrent('ad-form', 'fieldset');
enabledElementsWithPerrent('ad-form', 'fieldset');
disabledElementsWithPerrent('map__filters', 'select, fieldset');
enabledElementsWithPerrent('map__filters', 'select, fieldset');
*/

export { disabledElementsWithPerrent };
export { enabledElementsWithPerrent };
