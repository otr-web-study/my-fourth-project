import {
  ESC_KEY
} from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._elementPopup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._elementPopup.querySelector('.popup__close-button');
  }

  _handleEscClose(evt) {
    if (evt.key ===  ESC_KEY) {
      this.close();
    }
  }

  open() {
    this._elementPopup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._elementPopup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  setEventListeners() {
    this._elementPopup.addEventListener('click', (evt) => {
      if (evt && (evt.target === this._elementPopup
          || evt.target.classList.contains('popup__close-button'))) {
        this.close();
      }
    });
  }
}