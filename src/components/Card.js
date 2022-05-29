export default class Card {
  constructor( { data, currentUserId, cardSelector }, 
    handleCardClick, 
    handleLikeButtonClick, 
    handleDeleteButtonClick) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._currentUserId = currentUserId;

    this._handleCardClick = handleCardClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
  }

  _getTemplate() {
    return document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
  }

  onLikeButtonClick(likes) {
    this._likes = likes;
    this._renderLike();
  }

  onDeleteButtonClick() {
    this._element.remove();
    this._element = null;
  }

  _renderLike() {
    if (this.isLiked()) {
      this._likeButton.classList.add('card__like-button_active');
    } else {
      this._likeButton.classList.remove('card__like-button_active');
    }
    this._elementLikesCount.textContent = this._likes.length;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButtonClick(this);
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButtonClick(this);
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
    this._elementLikesCount = this._element.querySelector('.card__like-count');

    this._setEventListeners();

    this._element.querySelector('.card__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._renderLike();

    if (this._ownerId !== this._currentUserId) {
      this._deleteButton.classList.add('card__delete-button_hidden');
    }

    return this._element;
  }

  getId() {
    return this._id;
  }

  isLiked() {
    return this._likes.some(item => {
      return item._id === this._currentUserId;
    })
  }
}