import PopupWithProcessing from "./popupWithProcessing.js";

export default class PopupConfirm extends PopupWithProcessing {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.elementForm = this._elementPopup.querySelector('.popup-edit__form')
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._elementPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._confirmOptions);

      super.close();
    });
  }

  open(options) {
    this._confirmOptions = options;
    super.open();
  }
}