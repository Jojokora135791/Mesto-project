// Импорт CSS
import "./pages.css";
// Импорт всех классов и объектов
import { initialCards, selectors } from "../utils/constants.js";
import { FormValidation } from "../components/FormValidation.js";
import {
  buttonEditProfile,
  buttonAddAuthor,
  userAuthorInput,
  userJobInput,
  popupAddAuthorForm,
  popupEditProfileForm,
} from "../utils/elements.js";
import Section from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
/*------------------Основные функции-----------------------*/

const ProfileName = document.querySelector(".profile__author");
const ProfileJob = document.querySelector(".profile__job");

// 64e76916-bb9d-45f2-aa0a-555c04a49e1a
// cohort-65
// https://mesto.nomoreparties.co



function checkResult(res) {
  if (!res.ok) {
    return Promise.reject(`Error ${res.status}`);
  } else {
    return res.json();
  }
}

fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me", {
  headers: {
    authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  },
})
  .then((res) => checkResult(res))
  .then((result) => {
    ProfileName.textContent = result.name;
    ProfileJob.textContent = result.about;
  })
  .catch((err) => console.error(err));

  fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards", {
  headers: {
    authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  },
})
  .then((res) => checkResult(res))
  .then((result) => {
    const defaultCardList = new Section(
      { data: result, renderer: (card) => {
        defaultCardList.setCard(createCard(card))
      } },
      ".elements"
    );
    defaultCardList.renderCards();
  })
  .catch((err) => console.error(err));

  {
  function editProfile(author, job) {
    fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me", {
      method: 'PATCH',
      headers: {
        authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: author,
        about: job
      })
    })
      .then((res) => checkResult(res))
      .then((res) => {
        userInfo.setUserInfo(author, job);
        popupWithFormEditProfile.closePopup();
      })
      .catch((err) => console.error(err));

  }
}
  function addNewCard(data) {
    fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards", {
      method: 'POST',
      headers: {
        authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
      .then((res) => checkResult(res))
      .then((result) => {
        console.log(result);
        const CardList = new Section(
          { data: result, renderer: (card) => { 
            const newCard = createCard(card)
             CardList.setCard(newCard)
            }
           
        }, ".elements");
         CardList.renderCards();
      })
      .catch((err) => console.error(err));
  }
{
  // const newCard = {
  //   userID: 'oleg',
  //   title: 'Test Post',
  //   body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  // }
  // console.log(JSON.stringify(newCard));
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   headers: {
  //     authorization: "64e76916-bb9d-45f2-aa0a-555c04a49e1a",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(newCard),
  // }).then(res => res.json())
  //   .then((result) => {
  //     console.log(result)
  //   });
}

const userInfo = new UserInfo(".profile__author", ".profile__job");
const popupWithFormEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  handleFormSubmitProfile
);
popupWithFormEditProfile.setEventListeners();

function handleFormSubmitProfile(inputList) {
  editProfile(inputList["author"], inputList["job"])
}

const popupWithImage = new PopupWithImage(".popup_type_open-card");
popupWithImage.setEventListeners();

function handleImgPopup(name, link) {
  popupWithImage.openPopup(name, link);
}

// const defaultCardList = new Section(
//   { data: initialCards, renderer: (card) => createCard(card) },
//   ".elements"
// );
// defaultCardList.renderCards();

function createCard(card) {
  const newCard = new Card(card, "#elementTemplate", handleImgPopup);
  const cardElement = newCard.generateCard();
  return cardElement;
  // defaultCardList.setCard(cardElement);
}

const popupWithFormAddAuthor = new PopupWithForm(
  ".popup_type_add-author",
  handleFormSubmitCard
);
popupWithFormAddAuthor.setEventListeners();


// Здесь Ошибка
function handleFormSubmitCard(inputList) {
  const cardData = {
    name: inputList["place-name"],
    link: inputList["photo"],
  };
  addNewCard(cardData)
  
}

const FormValidationEditProfile = new FormValidation(
  selectors,
  popupEditProfileForm
);

FormValidationEditProfile.enableValidation();

buttonEditProfile.addEventListener("click", () => {
  const list = userInfo.getUserInfo();
  userAuthorInput.value = list["author"];
  userJobInput.value = list["job"];
  popupWithFormEditProfile.openPopup();
  FormValidationEditProfile.setDefaultButton();
});

const FormValidationAddAuthor = new FormValidation(
  selectors,
  popupAddAuthorForm
);

FormValidationAddAuthor.enableValidation();
buttonAddAuthor.addEventListener("click", () => {
  popupWithFormAddAuthor.openPopup();
  popupAddAuthorForm.reset();
  FormValidationAddAuthor.setDefaultButton();
});
