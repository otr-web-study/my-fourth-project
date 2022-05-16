import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  popupProfileSelector,
  popupPlaceSelector,
  popupPreviewSelector,
  popupInputAuthorSelector,
  popupInputBioSelector,
  profileEditButton,
  placeAddButton,
  elementsListSelector,
  profileAuthorSelector,
  profileBioSelector,
  cardTemplateSelector,
  initialCards,
  validationSettings
} from "../utils/constants.js";

const userInfo = new UserInfo(profileAuthorSelector, profileBioSelector);

function createCard(inputValues) {
  const card = new Card(
    {
      data: inputValues,
      cardSelector: cardTemplateSelector
    }, () => {
      imagePopup.open(inputValues)
    });
  return card.generateCard()
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    }
  },
  elementsListSelector
)

cardList.renderItems();

const imagePopup = new PopupWithImage(popupPreviewSelector);
imagePopup.setEventListeners();
const profilePopup = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit);
profilePopup.setEventListeners();
const placePopup = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit);
placePopup.setEventListeners();


function handleProfileFormSubmit(userDescription) {
  userInfo.setUserInfo(userDescription);
}

function handlePlaceFormSubmit(inputValues) {
  cardList.addItem(createCard(inputValues), true);
  this.elementForm.formValidator.disableSubmitButton();
}

function openProfilePopup() {
  const { author, bio } = userInfo.getUserInfo();
  const inputValues = [
    {
      'name': 'author',
      'inputSelector': popupInputAuthorSelector,
      'value': author
    },
    {
      'name': 'bio',
      'inputSelector': popupInputBioSelector,
      'value': bio
    }
  ];

  profilePopup.setInputValues(inputValues);
  profilePopup.elementForm.formValidator.toggleButtonState();
  profilePopup.open();
}

function openPlacePopup() {
  placePopup.open();
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

profileEditButton.addEventListener('click', openProfilePopup);
placeAddButton.addEventListener('click', openPlacePopup);

enableValidation(validationSettings);