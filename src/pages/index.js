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

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        {
          data: item,
          cardSelector: cardTemplateSelector
        }, () => {
          imagePopup.open(item)
        });
      cardList.addItem(card.generateCard());
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


function handleProfileFormSubmit({ Name, Option }) {
  userInfo.setUserInfo(Name, Option);
}

function handlePlaceFormSubmit(inputValues){
  
  const cardDescription = {
    'name': inputValues.Name,
    'link': inputValues.Option
  };

  const card = new Card(
    {
      data: cardDescription,
      cardSelector: cardTemplateSelector
    }, imagePopup.open
  );

  cardList.addItem(card.generateCard(), true);
  
  if (this.elementForm.formValidator) {
    this.elementForm.formValidator.disableSubmitButton();
  };
}

function openProfilePopup() {
  const { author, bio }= userInfo.getUserInfo();
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