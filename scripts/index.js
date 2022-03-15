const popupElement = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const saveButton = popupElement.querySelector('.popup__button-save');
const formElement = popupElement.querySelector('.popup__form');
const nameInput = formElement.querySelector('#profileAuthor');
const bioInput = formElement.querySelector('#profileBio');
const nameProfile = document.querySelector('.profile__author');
const bioProfile = document.querySelector('.profile__bio');
const ESC_KEY = 'Escape';
const ENTER_KEY = 'Enter';

function onDocumentKeyUp(evt) {
  if (evt.key ===  ESC_KEY) {
    closePopup();
  }
  else if (evt.key === ENTER_KEY) {
    saveButton.click();
  }
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameValue = nameInput.value;
    let bioValue = bioInput.value;

    nameProfile.textContent = nameValue;
    bioProfile.textContent = bioValue;
    
    closePopup();
}

function openPopup() {
  let nameValue = nameProfile.textContent;
  let bioValue = bioProfile.textContent;

  nameInput.value = nameValue;
  bioInput.value = bioValue;

  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
}

formElement.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);