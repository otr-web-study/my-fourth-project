import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._previewImage = this._elementPopup.querySelector('.popup-preview__image');
    this.open = this.open.bind(this);
  };

  open({ link, name }) {
    this._previewImage.src = link;
    this._previewImage.alt = name;
    this._previewImage.textContent = name;
    super.open()
  }
}