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
const popupEditProfileButtonClose = document.querySelector(
  ".popup__button-close_type_edit-profile"
)
// Объявление данных попапа addAuthor
const popupAddAuthor = document.querySelector(".popup_type_add-author")
const placeNameInput = document.querySelector(".popup__input[name=place-name]")
const linkPhotoInput = document.querySelector(".popup__input[name=photo]")
const popupFormAddAuthor = document.querySelector(".popup__form[name=place]")
const popupAddAuthorButtonClose = document.querySelector(
  ".popup__button-close_type_add-author"
)
// Обявление данных попапа Zoom
const popupOpenImage = document.querySelector(".popup_type_open-card")
const popupOpenImageElementPhoto = document.querySelector(".popup__photo")
const popupOpenImageElementName = document.querySelector(".popup__place-name")
const popupOpenImageButtonClose = document.querySelector(
  ".popup__button-close_type_open-card"
)
// Объявление данных карточек
const sectionElements = document.querySelector(".elements")


/*------------------Основные функции-----------------------*/
// Открытие попапа
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened")
}
// Закрытие попапа
function сlosePopup(popupElement) {
  popupElement.classList.remove("popup_opened")
}
// Сохранить данные в попапе
function saveProfile(evt) {
  evt.preventDefault()
  userAuthorProfile.textContent = userAuthorInput.value
  userJobProfile.textContent = userJobInput.value
  сlosePopup(popupEditProfile)
}
// Открытие попапа Zoom
function handleImgPopup(evt) {
  popupOpenImageElementPhoto.src = evt.target.src
  popupOpenImageElementPhoto.alt = evt.target.alt
  popupOpenImageElementName.textContent = evt.target.alt
  openPopup(popupOpenImage)
}
// Вызов массива данных
initialCards.forEach(createCard)
// Создание карточки из массива
function createCard(card) {

  const newCard = new Card(card, '#elementTemplate', handleImgPopup)
  const cardElement = newCard.generateCard();
  sectionElements.prepend(cardElement)
}
// Создание карточки пользователем
const handleFormSubmitCard = (evt) => {
  evt.preventDefault()

  const newCard = {
    name: placeNameInput.value,
    link: linkPhotoInput.value,
  }

  createCard(newCard)
  сlosePopup(popupAddAuthor)

  placeNameInput.value = ''
  linkPhotoInput.value =''
}
// Обработка валидации инпутов
const forms = new FormValidation(selectors);
const formValid = forms.enableValidation(); 

/*------------------------Слушатели--------------------------*/

buttonEditProfile.addEventListener("click", () => {
  userAuthorInput.value = userAuthorProfile.textContent
  userJobInput.value = userJobProfile.textContent
  openPopup(popupEditProfile)
})

// Закрытие попапа editProfile через клик на buttonClose
popupEditProfileButtonClose.addEventListener("click", () =>
  сlosePopup(popupEditProfile)
)
// Закрытие попапа editProfile через клик на оверлей
popupEditProfile.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    сlosePopup(popupEditProfile)
  }
})
// Закрытие попапа editProfile через esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    сlosePopup(popupEditProfile)
  }
})
buttonAddAuthor.addEventListener("click", () => {
  openPopup(popupAddAuthor)
})
// Закрытие попапа addAuthor через клик на buttonClose
popupAddAuthorButtonClose.addEventListener("click", () => {
  сlosePopup(popupAddAuthor)
})
// Закрытие попапа addAuthor через клик на оверлей
popupAddAuthor.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    сlosePopup(popupAddAuthor)
  }
})
// Закрытие попапа addAuthor через esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    сlosePopup(popupAddAuthor)
  }
})
// Закрытие попапа zoomCard через клик на buttonClose
popupOpenImageButtonClose.addEventListener("click", () => {
  сlosePopup(popupOpenImage)
})
// Закрытие попапа zoomCard через клик на оверлей
popupOpenImage.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    сlosePopup(popupOpenImage)
  }
})
// Закрытие попапа zoomCard через esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    сlosePopup(popupOpenImage)
  }
})
// Сохранение данных в попапе
popupEditProfileForm.addEventListener("submit", saveProfile)
// Создание карточки пользователем
popupAddAuthor.addEventListener("submit", handleFormSubmitCard)

