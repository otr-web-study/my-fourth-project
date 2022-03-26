const popupProfileElement = document.querySelector('.popup-edit_type_profile');
const popupPlaceElement = document.querySelector('.popup-edit_type_place');
const popupPreviewElement = document.querySelector('.popup-preview')
const formProfileElement = popupProfileElement.querySelector('#profileForm');
const formPlaceElement = popupPlaceElement.querySelector('#placeForm')
const profileEditButton = document.querySelector('.profile__edit-button');
const placeAddButton = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list');
const templateCard = document.querySelector('#card-template');
let saveButton;

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
const ENTER_KEY = 'Enter';

function createCardElement(cardDescription) {
  const card = templateCard.content.querySelector('.card').cloneNode(true);
  img = card.querySelector('.card__image');
  img.src = cardDescription.link;
  img.addEventListener('click', openPreviewPopup);
  card.querySelector('.card__title').textContent = cardDescription.name;
  card.querySelector('.card__like-button').addEventListener('click', () => {
    card.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  })
  card.querySelector('.card__delete-button').addEventListener('click', () => {
    card.remove();
  })
  return card;
}

elementsList.append(...initialCards.map(cardDescription => {
  return createCardElement(cardDescription);
}));

function openPreviewPopup() {
  alert(1);
}

function onDocumentKeyUp(evt) {
  if (evt.key ===  ESC_KEY) {
    closePopup();
  }
  else if (evt.key === ENTER_KEY && saveButton) {
    saveButton.click();
  }
}

function formProfileSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameValue = formProfileElement.querySelector('#Name').value;
    let bioValue = formProfileElement.querySelector('#Option').value;

    document.querySelector('.profile__author').textContent = nameValue;
    document.querySelector('.profile__bio').textContent = bioValue;
    
    closePopup();
}

function openProfilePopup() {
  let nameValue = document.querySelector('.profile__author').textContent;
  let bioValue = document.querySelector('.profile__bio').textContent;

  saveButton = popupProfileElement.querySelector('.popup-edit__button-save');

  formProfileElement.querySelector('#Name').value = nameValue;
  formProfileElement.querySelector('#Option').value = bioValue;

  openPopup(popupProfileElement);
}

function openPreviewPopup() {
  openPopup(popupPreviewElement);
}

function openPlacePopup() {
  openPopup(popupPlaceElement);
}

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
  element.querySelector('.popup__close-button').addEventListener('click', closePopup);
}

function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
}

formProfileElement.addEventListener('submit', formProfileSubmitHandler);
profileEditButton.addEventListener('click', openProfilePopup);
placeAddButton.addEventListener('click', openPlacePopup);