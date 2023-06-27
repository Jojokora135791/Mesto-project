// Импорт CSS
import "./pages.css";
// Импорт всех классов и объектов
import { selectors } from "../utils/constants.js";
import { FormValidation } from "../components/FormValidation.js";
import {
  buttonEditProfile,
  buttonAddAuthor,
  buttonEditAvatar,
  userAuthorInput,
  userJobInput,
  popupAddAuthorForm,
  popupEditProfileForm,
  popupEditAvatarForm,
} from "../utils/elements.js";
import Section from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api";

let defaultCardList = null;

{
  // function checkResult(res) {
  //   if (!res.ok) {
  //     return Promise.reject(`Error ${res.status}`);
  //   } else {
  //     return res.json();
  //   }
  // }
  // fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me", {
  //   headers: {
  //     authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //   },
  // })
  //   .then((res) => checkResult(res))
  //   .then((result) => {
  //     profileName.textContent = result.name;
  //     profileJob.textContent = result.about;
  //     profileAvatar.src = result.avatar;
  //   })
  //   .catch((err) => console.error(err));
  // fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards", {
  //   headers: {
  //     authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //   },
  // })
  //   .then((res) => checkResult(res))
  //   .then((result) => {
  //     const defaultCardList = new Section(
  //       {
  //         data: result,
  //         renderer: (card) => {
  //           defaultCardList.setCard(createCard(card));
  //         },
  //       },
  //       ".elements"
  //     );
  //     defaultCardList.renderCards();
  //   })
  //   .catch((err) => console.error(err));
  // function editProfile(author, job) {
  //   fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me", {
  //     method: "PATCH",
  //     headers: {
  //       authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: author,
  //       about: job,
  //     }),
  //   })
  //     .then((res) => checkResult(res))
  //     .then((res) => {
  //       userInfo.setUserInfo(author, job);
  //       popupWithFormEditProfile.closePopup();
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => popupWithFormEditProfile.renderLoading("Сохранить"));
  // }
  // function addNewCard(data) {
  //   fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards", {
  //     method: "POST",
  //     headers: {
  //       authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: data.name,
  //       link: data.link,
  //     }),
  //   })
  //     .then((res) => checkResult(res))
  //     .then((result) => {
  //       const CardList = new Section(
  //         {
  //           data: result,
  //           renderer: (card) => CardList.setCard(createCard(card)),
  //         },
  //         ".elements"
  //       );
  //       CardList.renderUserCards();
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => popupWithFormAddAuthor.renderLoading("Создать"));
  // }
  // function deleteCardApi(cardId, element) {
  //   fetch(`https://mesto.nomoreparties.co/v1/cohort-65/cards/${cardId}`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //     },
  //   })
  //     .then((res) => checkResult(res))
  //     .then((result) => {
  //       element.remove();
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => popupDeleteCard.renderLoading("Да"));
  // }
  // function likeCard(card) {
  //   fetch(
  //     `https://mesto.nomoreparties.co/v1/cohort-65/cards/${card._cardId}/likes`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //       },
  //     }
  //   )
  //     .then((res) => checkResult(res))
  //     .then((result) => {
  //       card.likesSum(result.likes.length);
  //       card.likeButton();
  //     })
  //     .catch((err) => console.error(err));
  // }
  // function handleDislike(card) {
  //   fetch(
  //     `https://mesto.nomoreparties.co/v1/cohort-65/cards/${card._cardId}/likes`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //       },
  //     }
  //   )
  //     .then((res) => checkResult(res))
  //     .then((result) => {
  //       card.likesSum(result.likes.length);
  //       card.dislikeButton();
  //     })
  //     .catch((err) => console.error(err));
  // }
  // function editAvatar(link) {
  //   // popupWithFormEditAvatar.renderLoading('Сохранение...');
  //   fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me/avatar", {
  //     method: "PATCH",
  //     headers: {
  //       authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       avatar: link,
  //     }),
  //   })
  //     .then((res) => checkResult(res))
  //     .then((res) => {
  //       /* сюда вставить */
  //       userInfo.setUserAvatar(res.avatar);
  //       popupWithFormEditAvatar.closePopup();
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => popupWithFormEditAvatar.renderLoading("Сохранить"));
  // }
  // function handleFormEditAvatar(inputList) {
  //   popupWithFormEditAvatar.renderLoading("Сохранение...");
  //   editAvatar(inputList["avatar"]);
  // }
  // function handleFormSubmitProfile(inputList) {
  //   popupWithFormEditProfile.renderLoading('Сохранение...');
  //   editProfile(inputList["author"], inputList["job"]);
  // }
  // function handleFormDelete(cardId, element) {
  //   popupDeleteCard.renderLoading("Сохранение...");
  //   deleteCardApi(cardId, element);
  //   popupDeleteCard.closePopup();
  // }
  // function handleFormSubmitCard(inputList) {
  //   popupWithFormAddAuthor.renderLoading("Сохранение...");
  //   const cardData = {
  //     name: inputList["place-name"],
  //     link: inputList["photo"],
  //   };
  //   addNewCard(cardData);
  // }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((res) => {
    const [userData, cardsData] = res;
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);

    defaultCardList = new Section(
      {
        data: cardsData,
        renderer: (card) => {
          defaultCardList.setCard(createCard(card));
        },
      },
      ".elements"
    );
    defaultCardList.renderCards();
  })
  .catch((err) => {
    console.log(err);
  });

function handleFormSubmitProfile(inputList) {
  popupWithFormEditProfile.renderLoading("Сохранение...");
  api
    .patchUserInfo(inputList["author"], inputList["job"])
    .then((res) => {
      userInfo.setUserInfo(inputList["author"], inputList["job"]);
      popupWithFormEditProfile.closePopup();
    })
    .catch((err) => console.error(err))
    .finally(() => popupWithFormEditProfile.renderLoading("Сохранить"));
}

function handleFormSubmitCard(inputList) {
  popupWithFormAddAuthor.renderLoading("Сохранение...");
  const cardData = {
    name: inputList["place-name"],
    link: inputList["photo"],
  };
  api
    .addNewCard(cardData)
    .then((card) => {
      defaultCardList.setCard(createCard(card));
      popupWithFormAddAuthor.closePopup();
    })
    .catch((err) => console.error(err))
    .finally(() => popupWithFormAddAuthor.renderLoading("Создать"));
}

function handleFormDelete(cardId, element) {
  popupDeleteCard.renderLoading("Сохранение...");
  api
    .deleteCard(cardId)
    .then((res) => {
      element.remove();
      popupDeleteCard.closePopup();
    })
    .catch((err) => console.error(err))
    .finally(() => popupDeleteCard.renderLoading("Да"));
}

function handleLike(card) {
  api
    .likeCard(card)
    .then((result) => {
      card.likesSum(result.likes.length);
      card.likeButton();
    })
    .catch((err) => console.error(err));
}

function handleDislike(card) {
  api
    .dislikeCard(card)
    .then((result) => {
      card.likesSum(result.likes.length);
      card.dislikeButton();
    })
    .catch((err) => console.error(err));
}

function handleFormEditAvatar(inputList) {
  popupWithFormEditAvatar.renderLoading("Сохранение...");
  api
    .editAvatar(inputList["avatar"])
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      popupWithFormEditAvatar.closePopup();
    })
    .catch((err) => console.error(err))
    .finally(() => popupWithFormEditAvatar.renderLoading("Сохранить"));
}

function createCard(card) {
  const newCard = new Card(
    card,
    "#elementTemplate",
    handleImgPopup,
    deleteCard,
    handleLike,
    handleDislike
  );
  const cardElement = newCard.generateCard();
  return cardElement;
}

function handleImgPopup(name, link) {
  popupWithImage.openPopup(name, link);
}

function deleteCard(cardId, element) {
  popupDeleteCard.openPopup();
  popupDeleteCard.setData(cardId, element);
}

const userInfo = new UserInfo(
  ".profile__author",
  ".profile__job",
  ".profile__avatar"
);

const popupWithFormEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  handleFormSubmitProfile
);
popupWithFormEditProfile.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_type_open-card");
popupWithImage.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation(
  ".popup_type_delete-card",
  handleFormDelete
);
popupDeleteCard.setEventListeners();

const popupWithFormAddAuthor = new PopupWithForm(
  ".popup_type_add-author",
  handleFormSubmitCard
);
popupWithFormAddAuthor.setEventListeners();

const popupWithFormEditAvatar = new PopupWithForm(
  ".popup_type_update-avatar",
  handleFormEditAvatar
);
popupWithFormEditAvatar.setEventListeners();

const FormValidationEditProfile = new FormValidation(
  selectors,
  popupEditProfileForm
);
FormValidationEditProfile.enableValidation();

const FormValidationAddAuthor = new FormValidation(
  selectors,
  popupAddAuthorForm
);
FormValidationAddAuthor.enableValidation();

const FormValidationEditAvatar = new FormValidation(
  selectors,
  popupEditAvatarForm
);
FormValidationEditAvatar.enableValidation();

buttonEditProfile.addEventListener("click", () => {
  const list = userInfo.getUserInfo();
  userAuthorInput.value = list["author"];
  userJobInput.value = list["job"];
  popupWithFormEditProfile.openPopup();
  FormValidationEditProfile.setDefaultButton();
});

buttonAddAuthor.addEventListener("click", () => {
  popupWithFormAddAuthor.openPopup();
  popupAddAuthorForm.reset();
  FormValidationAddAuthor.setDefaultButton();
});

buttonEditAvatar.addEventListener("click", () => {
  popupWithFormEditAvatar.openPopup();
  popupEditAvatarForm.reset();
  FormValidationEditAvatar.setDefaultButton();
});
