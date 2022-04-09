import { disableSubmitButton } from './validate.js';

const popupProfileElement = document.querySelector('.popup-edit_type_profile');
const popupPlaceElement = document.querySelector('.popup-edit_type_place');
const popupPreviewElement = document.querySelector('.popup-preview')
const formProfileElement = popupProfileElement.querySelector('#profileForm');
const formPlaceElement = popupPlaceElement.querySelector('#placeForm')
const profileEditButton = document.querySelector('.profile__edit-button');
const placeAddButton = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list');
const templateCard = document.querySelector('#card-template').content.querySelector('.card');
const profileNameInput = formProfileElement.querySelector('.popup-edit__input_type_name');
const profileBioInput = formProfileElement.querySelector('.popup-edit__input_type_option');
const placeNameInput = formPlaceElement.querySelector('.popup-edit__input_type_name');
const placeOptionInput = formPlaceElement.querySelector('.popup-edit__input_type_option');
const profileAuthor = document.querySelector('.profile__author');
const profileBio = document.querySelector('.profile__bio');
const previewImage = popupPreviewElement.querySelector('.popup-preview__image');
const previewCaption = popupPreviewElement.querySelector('.popup-preview__caption');
const profileCloseButton = popupProfileElement.querySelector('.popup__close-button');
const placeCloseButton = popupPlaceElement.querySelector('.popup__close-button');
const previewCloseButton = popupPreviewElement.querySelector('.popup__close-button');
const placeSaveButton = popupPlaceElement.querySelector('.popup-edit__button-save');
const inactiveButtonClass = 'popup-edit__button-save_inactive';
const inputEvent = new Event('input');

const initialCards = [
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

const ESC_KEY = 'Escape';

function createCardElement(cardDescription) {
  const card = templateCard.cloneNode(true);
  const img = card.querySelector('.card__image');
  img.src = cardDescription.link;
  img.alt = cardDescription.name;
  img.addEventListener('click', () => {
    previewImage.src = cardDescription.link;
    previewImage.alt = cardDescription.name;
    previewCaption.textContent = cardDescription.name;
    openPopup(popupPreviewElement);
  });
  card.querySelector('.card__title').textContent = cardDescription.name;
  card.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  });
  card.querySelector('.card__delete-button').addEventListener('click', () => {
    card.remove();
  });
  return card;
}

elementsList.append(...initialCards.map(cardDescription => {
  return createCardElement(cardDescription);
}));

function onDocumentKeyUp(evt) {
  if (evt.key ===  ESC_KEY) {
    closePopup();
  }
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileAuthor.textContent = profileNameInput.value;
    profileBio.textContent = profileBioInput.value;
    
    closePopup();
}

function handlePlaceFormSubmit(evt){
  evt.preventDefault();
  
  const cardDescription = {
    'name': placeNameInput.value,
    'link': placeOptionInput.value
  };

  elementsList.prepend(createCardElement(cardDescription));

  closePopup();

  formPlaceElement.reset();
  disableSubmitButton(placeSaveButton, inactiveButtonClass);
}

function openProfilePopup() {
  profileNameInput.value = profileAuthor.textContent;
  profileNameInput.dispatchEvent(inputEvent);
  profileBioInput.value = profileBio.textContent;
  profileBioInput.dispatchEvent(inputEvent);

  openPopup(popupProfileElement);
}

function openPlacePopup() {
  openPopup(popupPlaceElement);
}

function handlePopupClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
}

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
  element.addEventListener('click', handlePopupClick);
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup) {
    openedPopup.classList.remove('popup_opened');
    openedPopup.removeEventListener('click', handlePopupClick);
  }
  document.removeEventListener('keyup', onDocumentKeyUp);
}

formProfileElement.addEventListener('submit', handleProfileFormSubmit);
formPlaceElement.addEventListener('submit', handlePlaceFormSubmit);
profileEditButton.addEventListener('click', openProfilePopup);
placeAddButton.addEventListener('click', openPlacePopup);
profileCloseButton.addEventListener('click', closePopup);
placeCloseButton.addEventListener('click', closePopup);
previewCloseButton.addEventListener('click', closePopup);