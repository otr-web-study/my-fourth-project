export const popupProfileSelector = '.popup-edit_type_profile';
export const popupPlaceSelector = '.popup-edit_type_place';
export const popupPreviewSelector = '.popup-preview';
export const popupInputAuthorSelector = '.popup-edit__input_type_name';
export const popupInputBioSelector = '.popup-edit__input_type_option';
export const profileEditButton = document.querySelector('.profile__edit-button');
export const placeAddButton = document.querySelector('.profile__add-button');
export const elementsListSelector = '.elements__list';
export const profileAuthorSelector = '.profile__author';
export const profileBioSelector = '.profile__bio';
export const inactiveButtonClass = 'popup-edit__button-save_inactive';
export const cardTemplateSelector = '#card-template';

export const ESC_KEY = 'Escape';

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationSettings = {
  formSelector: '.popup-edit__form',
  inputSelector: '.popup-edit__input',
  submitButtonSelector: '.popup-edit__button-save',
  inactiveButtonClass: 'popup-edit__button-save_inactive',
  inputErrorClass: 'popup-edit__input_type_error',
  errorClass: 'popup-edit__error_active'
}