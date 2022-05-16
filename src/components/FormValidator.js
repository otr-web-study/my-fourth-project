export default class FormValidator {
  constructor(settings, validatedForm) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._validatedForm = validatedForm;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._validatedForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };
  
  _hideInputError(inputElement) {
    const errorElement = this._validatedForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
  
  _hasInvalidInput() {
    return this._inputList.some((item) => {
      return !item.validity.valid;
    })
  };
  
  disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  };
  
  _enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  };
  
  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    }
    else {
      this._enableSubmitButton();
    }
  };
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  enableValidation() {
    this._inputList = Array.from(this._validatedForm.querySelectorAll(this._inputSelector));
    this._submitButton = this._validatedForm.querySelector(this._submitButtonSelector);
  
    this.toggleButtonState();
  
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }
}