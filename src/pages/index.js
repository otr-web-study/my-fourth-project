import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  popupProfileSelector,
  popupPlaceSelector,
  popupPreviewSelector,
  popupConfirmSelector,
  popupAvatarSelector,
  profileEditButton,
  placeAddButton,
  profileAvatarEditButton,
  elementsListSelector,
  profileAuthorSelector,
  profileBioSelector,
  profileAvatarSelector,
  cardTemplateSelector,
  validationSettings
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-42",
  headers: {
    authorization: "68bb178a-4eee-4a74-9e44-5d7e375169e1"
  }
});

const userInfo = new UserInfo(profileAuthorSelector, profileBioSelector, profileAvatarSelector);

function createCard(inputValues) {
  const card = new Card(
    {
      data: inputValues,
      currentUserId: userInfo.getUserId(),
      cardSelector: cardTemplateSelector
    }, () => {
      imagePopup.open(inputValues)
    }, (targetCard) => {
      const cardId = targetCard.getId();
      const handleLikeFetched = res => {
        targetCard.onLikeButtonClick(res.likes)
      }
      if (targetCard.isLiked()) {
        api.unlikeCard(cardId)
          .then(handleLikeFetched)
          .catch(err => {console.log(err)});
      } else {
        api.likeCard(cardId)
          .then(handleLikeFetched)
          .catch(err => {console.log(err)});
      }
    }, (targetCard) => {
      confirmPopup.open({
        card: targetCard
      })
    });
  return card.generateCard();
}

const cardList = new Section(
  createCard,
  elementsListSelector
)

const imagePopup = new PopupWithImage(popupPreviewSelector);
imagePopup.setEventListeners();
const profilePopup = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit);
profilePopup.setEventListeners();
const placePopup = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit);
placePopup.setEventListeners();
const avatarPopup = new PopupWithForm(popupAvatarSelector, handleAvatarFormSubmit);
avatarPopup.setEventListeners();
const confirmPopup = new PopupConfirm(popupConfirmSelector, handleConfirmFormSubmit);
confirmPopup.setEventListeners();

function handleAvatarFormSubmit(avatarData) {
  return api.updateUserAvatar({avatar: avatarData.link})
    .then(res => userInfo.setUserInfo(res))
    .catch(err => {console.log(err)});
}

function handleConfirmFormSubmit({ card }) {
  return api.deleteCard(card.getId())
    .then(() => card.onDeleteButtonClick())
    .catch(err => {console.log(err)});
}

function handleProfileFormSubmit(userData) {
  return api.updateUserData(userData)
    .then(res => userInfo.setUserInfo(res))
    .catch(err => {console.log(err)});
}

function handlePlaceFormSubmit(inputValues) {
  return api.addNewCard(inputValues)
    .then(res => {
      cardList.addItem(res, true);
      return true;
    })
    .catch(err => {console.log(err)});
}

function openProfilePopup() {
  const formValidator = formValidators[profilePopup.elementForm.getAttribute('name')];
  formValidator.resetValidation();
  profilePopup.setInputValues(userInfo.getUserInfo());
  profilePopup.open();
}

function openPlacePopup() {
  const formValidator = formValidators[placePopup.elementForm.getAttribute('name')];
  formValidator.resetValidation();
  placePopup.open();
}

function openAvatarPopup() {
  const formValidator = formValidators[avatarPopup.elementForm.getAttribute('name')];
  formValidator.resetValidation();
  avatarPopup.open();
}

const formValidators = {};

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

    const formName = formElement.getAttribute('name');
    formValidators[formName] = formValidator;
  });
};

profileEditButton.addEventListener('click', openProfilePopup);
placeAddButton.addEventListener('click', openPlacePopup);
profileAvatarEditButton.addEventListener('click', openAvatarPopup);

enableValidation(validationSettings);

api.batchFetch([api.getInitialCards(), api.getUserData()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);

    cardList.renderItems(initialCards);
  })