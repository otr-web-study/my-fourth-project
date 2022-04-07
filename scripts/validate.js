const enableValidation = (settingsObject) => {
  const formList = Array.from(
    document.querySelectorAll(settingsObject.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  });
};






enableValidation({
  formSelector: '.popup-edit__form',
  inputSelector: '.popup-edit__input',
  submitButtonSelector: '.popup-edit__button-save',
  inactiveButtonClass: 'popup-edit__button-save_inactive',
  inputErrorClass: 'popup-edit__input_type_error',
  errorClass: 'popup-edit__error_active'
});