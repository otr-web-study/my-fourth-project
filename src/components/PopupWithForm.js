import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.elementForm = this._elementPopup.querySelector('.popup-edit__form')
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this.elementForm.querySelectorAll('.popup-edit__input');
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setInputValues(values) {
    values.forEach(item => {
      if (!this[item.name]) {
        this[item.name] = this._elementPopup.querySelector(item.inputSelector);
      }
      this[item.name].value = item.value;
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._elementPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    this.elementForm.reset();
    super.close();
  }

}