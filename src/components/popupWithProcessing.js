import Popup from "./Popup.js";

export default class PopupWithProcessing extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._processingElement = this._elementPopup.querySelector('.popup-edit__button-save');
  }

  renderProcessing(isProcessing) {
    if (isProcessing) {
      this._originalCaption = this._processingElement.textContent;
      this._processingElement.textContent = 'Сохранение...';
    } else {
      this._processingElement.textContent = this._originalCaption;
    }
  }
}