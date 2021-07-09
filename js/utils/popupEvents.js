import { resetUserForm } from '../map/map.js';

const ESC_KEYCODE = 27;

const showPopup = (popupTemplate) => {
  const popup = popupTemplate.cloneNode(true);
  document.body.append(popup);

  const escClose = (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      popup.remove();
      document.removeEventListener('keydown', escClose);
    }
  };
  const clickClose = () => {
    popup.remove();
    document.removeEventListener('click', clickClose);
  };

  document.addEventListener('keydown', escClose);
  document.addEventListener('click', clickClose);
};

const successTemplatePopup = document.querySelector('#success').content.querySelector('.success');
const errorTemplatePopup = document.querySelector('#error').content.querySelector('.error');

const showSuccessPopup = () => {
  showPopup(successTemplatePopup);
  resetUserForm();
};

const showErrorPopup = () => {
  showPopup(errorTemplatePopup);
  //добавить кнопку закрытия окна
  //сохранение данных
};

export {showSuccessPopup, showErrorPopup};
