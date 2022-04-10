const showInputError = (formElement, inputElement, errorMessage, settingsObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settingsObject.inputErrorClass);
  errorElement.classList.add(settingsObject.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, settingsObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settingsObject.inputErrorClass);
  errorElement.classList.remove(settingsObject.errorClass);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((item) => {
    return !item.validity.valid;
  })
};

const disableSubmitButton = (buttonElement, disableButtonClass) => {
  buttonElement.classList.add(disableButtonClass);
  buttonElement.disabled = true;
};

const enableSubmitButton = (buttonElement, disableButtonClass) => {
  buttonElement.classList.remove(disableButtonClass);
  buttonElement.disabled = false;
};

const toggleButtonState = (inputList, buttonElement, settingsObject) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, settingsObject.inactiveButtonClass);
  }
  else {
    enableSubmitButton(buttonElement, settingsObject.inactiveButtonClass);
  }
};

const checkInputValidity = (formElement, inputElement, settingsObject) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settingsObject);
  } else {
    hideInputError(formElement, inputElement, settingsObject);
  }
};

const setEventListeners = (formElement, settingsObject) => {
  const inputList = Array.from(formElement.querySelectorAll(settingsObject.inputSelector));
  const buttonElement = formElement.querySelector(settingsObject.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, settingsObject);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settingsObject);
      toggleButtonState(inputList, buttonElement, settingsObject);
    });
  });
};

const enableValidation = (settingsObject) => {
  const formList = Array.from(
    document.querySelectorAll(settingsObject.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settingsObject);
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