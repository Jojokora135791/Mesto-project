// Импорт CSS
import './pages.css';
// Импорт всех классов и объектов
import { initialCards, selectors } from "../utils/constants.js";
import { FormValidation } from "../components/FormValidation.js";
import {
  buttonEditProfile,
  buttonAddAuthor,
  userAuthorInput,
  userJobInput,
  popupAddAuthorForm,
  formList,
} from "../utils/elements.js";
import Section from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
/*------------------Основные функции-----------------------*/

const userInfo = new UserInfo(".profile__author", ".profile__job")
const popupWithFormEditProfile = new PopupWithForm(".popup_type_edit-profile", handleFormSubmitProfile);
popupWithFormEditProfile.setEventListeners();

function handleFormSubmitProfile(inputList) {
  userInfo.setUserInfo(inputList['author'], inputList['job']);
  popupWithFormEditProfile.closePopup();
};

buttonEditProfile.addEventListener("click", () => {
  const list = userInfo.getUserInfo();
  userAuthorInput.value = list['author'];
  userJobInput.value = list['job'];
  popupWithFormEditProfile.openPopup();
});

const popupWithImage = new PopupWithImage(".popup_type_open-card");
popupWithImage.setEventListeners();

function handleImgPopup(name, link) {
  popupWithImage.openPopup(name, link);
}

const defaultCardList = new Section(
  { data: initialCards,
    renderer: (card) => createCard(card) 
  },
  ".elements"
);
defaultCardList.renderCards();

function createCard(card) {
  const newCard = new Card(card, "#elementTemplate", handleImgPopup);
  const cardElement = newCard.generateCard();
  defaultCardList.setCard(cardElement);
}

const popupWithFormAddAuthor = new PopupWithForm(".popup_type_add-author", handleFormSubmitCard);
popupWithFormAddAuthor.setEventListeners();

function handleFormSubmitCard(inputList) {
  const cardData = {
    name: inputList['place-name'],
    link: inputList['photo'],
  };
  createCard(cardData);
};

formList.forEach((formElement) => {
  const forms = new FormValidation(selectors, formElement);
  forms.setDefaultButton();
  forms.enableValidation();
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  buttonAddAuthor.addEventListener("click", () => {
    popupWithFormAddAuthor.openPopup();
    popupAddAuthorForm.reset();
    forms.setDefaultButton();
  });
});
