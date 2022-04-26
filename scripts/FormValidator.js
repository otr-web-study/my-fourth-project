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
  
  _hasInvalidInput(inputList) {
    return inputList.some((item) => {
      return !item.validity.valid;
    })
  };
  
  disableSubmitButton(buttonElement, disableButtonClass) {
    buttonElement.classList.add(disableButtonClass);
    buttonElement.disabled = true;
  };
  
  _enableSubmitButton(buttonElement, disableButtonClass) {
    buttonElement.classList.remove(disableButtonClass);
    buttonElement.disabled = false;
  };
  
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this.disableSubmitButton(buttonElement, this._inactiveButtonClass);
    }
    else {
      this._enableSubmitButton(buttonElement, this._inactiveButtonClass);
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
    const inputList = Array.from(this._validatedForm.querySelectorAll(this._inputSelector));
    const buttonElement = this._validatedForm.querySelector(this._submitButtonSelector);
  
    this._toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
}