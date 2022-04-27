import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  popupProfileElement,
  popupPlaceElement,
  popupPreviewElement,
  formProfileElement,
  formPlaceElement,
  profileEditButton,
  placeAddButton,
  elementsList,
  profileNameInput,
  profileBioInput,
  placeNameInput,
  placeOptionInput,
  profileAuthor,
  profileBio,
  previewImage,
  previewCaption,
  profileCloseButton,
  placeCloseButton,
  previewCloseButton,
  placeSaveButton,
  inactiveButtonClass,
  inputEvent,
  cardTemplate,
  ESC_KEY,
  initialCards,
  validationSettings
} from "./constants.js";


function createCardElement(cardDescription) {
  const card = new Card(cardDescription, cardTemplate, openImagePopup);
  return card.generateCard();
}

elementsList.append(...initialCards.map(createCardElement));

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
  evt.target.formValidator.disableSubmitButton(placeSaveButton, inactiveButtonClass);
}

function openImagePopup(cardDescription) {
  previewImage.src = cardDescription.link;
  previewImage.alt = cardDescription.name;
  previewCaption.textContent = cardDescription.name;
  openPopup(popupPreviewElement);
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

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
  element.addEventListener('click', closePopup);
}

function closePopup(evt) {
  if (evt && evt.target !== evt.currentTarget) {
    return
  }
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup) {
    openedPopup.classList.remove('popup_opened');
    openedPopup.removeEventListener('click', closePopup);
  }
  document.removeEventListener('keyup', onDocumentKeyUp);
}

const enableValidation = (settingsObject) => {
  const { formSelector } = settingsObject;
  const formList = Array.from(
    document.querySelectorAll(formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const formValidator = new FormValidator(settingsObject, formElement);
    formValidator.enableValidation();
    formElement.formValidator = formValidator;
  });
};

formProfileElement.addEventListener('submit', handleProfileFormSubmit);
formPlaceElement.addEventListener('submit', handlePlaceFormSubmit);
profileEditButton.addEventListener('click', openProfilePopup);
placeAddButton.addEventListener('click', openPlacePopup);
profileCloseButton.addEventListener('click', closePopup);
placeCloseButton.addEventListener('click', closePopup);
previewCloseButton.addEventListener('click', closePopup);

enableValidation(validationSettings);