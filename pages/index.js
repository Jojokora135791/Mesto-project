// Импорт всех классов и объектов
import { initialCards, selectors } from "../utils/constants.js";
import { FormValidation } from "../components/FormValidation.js";
import {
  userAuthorProfile,
  userJobProfile,
  buttonEditProfile,
  buttonAddAuthor,
  popupEditProfile,
  popupEditProfileForm,
  userAuthorInput,
  userJobInput,
  popupAddAuthor,
  popupAddAuthorForm,
  placeNameInput,
  linkPhotoInput,
  popupOpenImage,
  popupOpenImageElementPhoto,
  popupOpenImageElementName,
  closeButtons,
  sectionElements,
  formList,
} from "../utils/elements.js";
import Section from "../components/Section.js";
import {Card} from "../components/Card.js"
import {Popup} from "../components/Popup.js";
/*------------------Основные функции-----------------------*/

const popup = new Popup(popupEditProfile)
popup.setEventListeners();

// Старые отработанные функции
{
// // Закрытие попапа по клавише Escape
// function closePopupKey(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     сlosePopup(openedPopup);
//   }
// }

// // Закрытие попапа по нажатию на оверлей
// function closePopupOverlay(evt) {
//   if (evt.currentTarget === evt.target) {
//     const openedPopup = document.querySelector(".popup_opened");
//     сlosePopup(openedPopup);
//   }
// }

// // Открытие попапа
// function openPopup(popupElement) {
//   popupElement.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupKey);
//   popupElement.addEventListener("click", closePopupOverlay);
// }

// // Закрытие попапа
// function сlosePopup(popupElement) {
//   popupElement.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closePopupKey);
//   popupElement.removeEventListener("click", closePopupOverlay);
// }


// // Функция добавления слушателя для крестика всех попапов
// closeButtons.forEach((button) => {
  //   const popup = button.closest(".popup");
  //   button.addEventListener("click", () => сlosePopup(popup));
  // });
}

// Добавление слушателя для кнопки "Редактировать профиль"
buttonEditProfile.addEventListener("click", () => {
  userAuthorInput.value = userAuthorProfile.textContent;
  userJobInput.value = userJobProfile.textContent;
  popup.openPopup();
});

// Сохранить данные в попапе
function saveProfile(evt) {
  evt.preventDefault();
  userAuthorProfile.textContent = userAuthorInput.value;
  userJobProfile.textContent = userJobInput.value;
 popup.closePopup();
}
popupEditProfileForm.addEventListener("submit", saveProfile);

const popupWithImage = new Popup(popupOpenImage)
popupWithImage.setEventListeners();

// Открытие попапа Zoom
function handleImgPopup(name, link) {
  popupOpenImageElementPhoto.src = link;
  popupOpenImageElementPhoto.alt = name;
  popupOpenImageElementName.textContent = name;
  popupWithImage.openPopup();
}

const defaultCardList = new Section(
  { data: initialCards, 
    renderer: (card) => createCard(card) 
  },
  sectionElements
);

defaultCardList.renderCards();

// Создание карточки из массива
function createCard(card) {
  const newCard = new Card(card, "#elementTemplate", handleImgPopup);
  const cardElement = newCard.generateCard();
  defaultCardList.setCard(cardElement);
};

const popupWithFormAddAuthor = new Popup(popupAddAuthor)
popupWithFormAddAuthor.setEventListeners();

// Создание карточки пользователем
const handleFormSubmitCard = (evt) => {
  evt.preventDefault();

  const newCard = {
    name: placeNameInput.value,
    link: linkPhotoInput.value,
  };

  createCard(newCard);
  popupWithFormAddAuthor.closePopup();
  evt.target.reset();
};

// Создание карточки пользователем
popupAddAuthorForm.addEventListener("submit", handleFormSubmitCard);

// Валидация форм
formList.forEach((formElement) => {
  const forms = new FormValidation(selectors, formElement);
  forms.setDefaultButton();
  forms.enableValidation();
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  // Добавление слушателя для кнопки "Добавить карточку"
  buttonAddAuthor.addEventListener("click", () => {
    popupWithFormAddAuthor.openPopup();
    popupAddAuthorForm.reset();
    forms.setDefaultButton();
  });
});