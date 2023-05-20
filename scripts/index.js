// Импорт всех классов и объектов
import {initialCards,selectors} from './array.js';
import {Card} from './Card.js';
import {FormValidation} from './validate.js';

/*--------------Объявление переменных-----------------------*/
// Объявление данных profile
const userAuthorProfile = document.querySelector(".profile__author")
const userJobProfile = document.querySelector(".profile__job")
const buttonEditProfile = document.querySelector(".profile__button-edit")
const buttonAddAuthor = document.querySelector(".profile__add-button")

// Объявление данных попапа editProfile
const popupEditProfile = document.querySelector(".popup_type_edit-profile")
const popupEditProfileForm = document.querySelector(".popup__form[name=profile]")
const userAuthorInput = document.querySelector(".popup__input[name=author]")
const userJobInput = document.querySelector(".popup__input[name=job]")

// Объявление данных попапа addAuthor
const popupAddAuthor = document.querySelector(".popup_type_add-author")
const popupAddAuthorForm = document.querySelector(".popup__form[name=place]")
const placeNameInput = document.querySelector(".popup__input[name=place-name]")
const linkPhotoInput = document.querySelector(".popup__input[name=photo]")
const popupAddAuthorButtonClose = document.querySelector(".popup__button-close_type_add-author")
// Обявление данных попапа Zoom
const popupOpenImage = document.querySelector(".popup_type_open-card")
const popupOpenImageElementPhoto = document.querySelector(".popup__photo")
const popupOpenImageElementName = document.querySelector(".popup__place-name")
const popupOpenImageButtonClose = document.querySelector(
  ".popup__button-close_type_open-card"
)
// Объявление кнопки закрытия для всех попапов (нодлист)
const closeButtons = document.querySelectorAll('.popup__button-close');
// Объявление данных карточек
const sectionElements = document.querySelector(".elements");
const formList = Array.from(document.querySelectorAll('.popup__form'));

/*------------------Основные функции-----------------------*/

// Закрытие попапа по клавише Escape
function closePopupKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    сlosePopup(openedPopup)
  }
};

// Закрытие попапа по нажатию на оверлей
function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    const openedPopup = document.querySelector('.popup_opened');
    сlosePopup(openedPopup)
  }
}


// Открытие попапа
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupKey);
  popupElement.addEventListener('click', closePopupOverlay);
}

// Закрытие попапа
function сlosePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupKey);
  popupElement.removeEventListener('click', closePopupOverlay);
}

// Функция добавления слушателя для крестика всех попапов
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => сlosePopup(popup))
});

// Добавление слушателя для кнопки "Редактировать профиль"
buttonEditProfile.addEventListener("click", () => {
  userAuthorInput.value = userAuthorProfile.textContent
  userJobInput.value = userJobProfile.textContent
  openPopup(popupEditProfile)
})

// Сохранить данные в попапе
function saveProfile(evt) {
  evt.preventDefault()
  userAuthorProfile.textContent = userAuthorInput.value
  userJobProfile.textContent = userJobInput.value
  сlosePopup(popupEditProfile)
};
popupEditProfileForm.addEventListener("submit", saveProfile);

// Открытие попапа Zoom
function handleImgPopup(name, link) {
  popupOpenImageElementPhoto.src = link; 
  popupOpenImageElementPhoto.alt = name;
  popupOpenImageElementName.textContent = name;
  openPopup(popupOpenImage);
}

// Создание карточки из массива
function createCard(card) {

  const newCard = new Card(card, '#elementTemplate', handleImgPopup)
  const cardElement = newCard.generateCard();
  sectionElements.prepend(cardElement)
}

// Вызов массива данных
initialCards.forEach(createCard)

// Создание карточки пользователем
const handleFormSubmitCard = (evt) => {
  evt.preventDefault()

  const newCard = {
    name: placeNameInput.value,
    link: linkPhotoInput.value,
  }

  createCard(newCard)
  сlosePopup(popupAddAuthor)
  evt.target.reset();
}

// Создание карточки пользователем
popupAddAuthorForm.addEventListener("submit", handleFormSubmitCard)

formList.forEach((formElement) => {
  const forms = new FormValidation(selectors, formElement);
  forms.setDefaultButton();
  forms.enableValidation();
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  // Добавление слушателя для кнопки "Добавить карточку"
buttonAddAuthor.addEventListener("click", () => {
  openPopup(popupAddAuthor);
  popupAddAuthorForm.reset();
  forms.setDefaultButton();
  });

});




