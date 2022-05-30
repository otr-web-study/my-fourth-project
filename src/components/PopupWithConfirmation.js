import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.elementForm = this._elementPopup.querySelector('.popup-edit__form')
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._elementPopup.querySelector('.popup-edit__button-save');
  }

  setEventListeners() {
    super.setEventListeners();
    this._elementPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = 'Удаление...';

      this._handleFormSubmit(this._confirmOptions)
        .then(() => {this.close()})
        .finally(() => {
          this._submitButton.textContent = initialText
        });
    });
  }

  open(options) {
    this._confirmOptions = options;
    super.open();
  }
}