export default class Card {
  constructor( { data, cardSelector }, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  _handleLikeButtonClick() {
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _handleDeleteButtonClick() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (evt) => {
      this._handleLikeButtonClick();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButtonClick();
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick({name: this._name, link: this._link});
    })

  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__like-button');
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._setEventListeners();

    this._element.querySelector('.card__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    return this._element;
  }
}