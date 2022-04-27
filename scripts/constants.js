export const popupProfileElement = document.querySelector('.popup-edit_type_profile');
export const popupPlaceElement = document.querySelector('.popup-edit_type_place');
export const popupPreviewElement = document.querySelector('.popup-preview')
export const formProfileElement = popupProfileElement.querySelector('#profileForm');
export const formPlaceElement = popupPlaceElement.querySelector('#placeForm')
export const profileEditButton = document.querySelector('.profile__edit-button');
export const placeAddButton = document.querySelector('.profile__add-button');
export const elementsList = document.querySelector('.elements__list');
export const profileNameInput = formProfileElement.querySelector('.popup-edit__input_type_name');
export const profileBioInput = formProfileElement.querySelector('.popup-edit__input_type_option');
export const placeNameInput = formPlaceElement.querySelector('.popup-edit__input_type_name');
export const placeOptionInput = formPlaceElement.querySelector('.popup-edit__input_type_option');
export const profileAuthor = document.querySelector('.profile__author');
export const profileBio = document.querySelector('.profile__bio');
export const previewImage = popupPreviewElement.querySelector('.popup-preview__image');
export const previewCaption = popupPreviewElement.querySelector('.popup-preview__caption');
export const profileCloseButton = popupProfileElement.querySelector('.popup__close-button');
export const placeCloseButton = popupPlaceElement.querySelector('.popup__close-button');
export const previewCloseButton = popupPreviewElement.querySelector('.popup__close-button');
export const placeSaveButton = popupPlaceElement.querySelector('.popup-edit__button-save');
export const inactiveButtonClass = 'popup-edit__button-save_inactive';
export const inputEvent = new Event('input');
export const cardTemplate = '#card-template'

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