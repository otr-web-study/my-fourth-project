import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.elementForm = this._elementPopup.querySelector('.popup-edit__form')
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this.elementForm.querySelectorAll('.popup-edit__input');
    this._submitButton = this._elementPopup.querySelector('.popup-edit__button-save');
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setInputValues(values) {
    this._inputList.forEach(input => {
      input.value = values[input.name];
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._elementPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...'

      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
          this._submitButton.textContent = initialText
        });
    });
  }

  close() {
    this.elementForm.reset();
    super.close();
  }

}