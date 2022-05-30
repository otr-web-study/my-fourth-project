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
  popupInputAuthorSelector,
  popupInputBioSelector,
  popupInputAvatarSelector,
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
          .then(handleLikeFetched);
      } else {
        api.likeCard(cardId)
          .then(handleLikeFetched);
      }
    }, (targetCard) => {
      confirmPopup.open({
        card: targetCard
      })
    });
  return card.generateCard();
}

const cardList = new Section(
  (item) => {
    cardList.addItem(createCard(item));
  },
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
  avatarPopup.renderProcessing(true);
  api.updateUserAvatar({avatar: avatarData.link})
    .then(res => {
      userInfo.setAvatar(res.avatar);
      avatarPopup.close();
    })
    .finally(() => {avatarPopup.renderProcessing(false)});
}

function handleConfirmFormSubmit({ card }) {
  confirmPopup.renderProcessing(true);
  api.deleteCard(card.getId())
    .then(res => {
      card.onDeleteButtonClick();
      confirmPopup.close();
    })
    .finally(() => {confirmPopup.renderProcessing(false)});
}

function handleProfileFormSubmit({ name, option: about }) {
  profilePopup.renderProcessing(true);
  api.updateUserData({name, about})
    .then(res => {
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .finally(() => {profilePopup.renderProcessing(false)});
}

function handlePlaceFormSubmit(inputValues) {
  placePopup.renderProcessing(true);
  api.addNewCard(inputValues)
    .then(res => {
      cardList.addItem(createCard(res), true);
      this.elementForm.formValidator.disableSubmitButton();
      placePopup.close();
    })
    .finally(() => {placePopup.renderProcessing(false)})
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

function openAvatarPopup() {
  avatarPopup.setInputValues([{
    'name': 'link',
    'inputSelector': popupInputAvatarSelector,
    'value': userInfo.getAvatar()
  }]);
  avatarPopup.elementForm.formValidator.toggleButtonState();
  avatarPopup.open();
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
profileAvatarEditButton.addEventListener('click', openAvatarPopup);

enableValidation(validationSettings);

api.batchFetch([api.getInitialCards(), api.getUserData()])
  .then(([initialCards, userData]) => {
    userInfo.setUserId(userData._id);
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData.avatar);

    cardList.renderItems(initialCards);
  })