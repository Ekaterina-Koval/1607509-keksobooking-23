const setDisabledValue = (elements, values) => {
  for (let item = 0; item < elements.length; item++) {
    elements[item].disabled = values.indexOf(elements[item].value) > -1;
  }
};

export {setDisabledValue};
