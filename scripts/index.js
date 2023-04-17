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
const popupEditProfileButtonSaveForm = document.querySelector(
  ".popup__button-save"
)
const popupEditProfileButtonClose = document.querySelector(
  ".popup__button-close_type_edit-profile"
)

// Объявление данных попапа addAuthor
const popupAddAuthor = document.querySelector(".popup_type_add-author")
const placeNameInput = document.querySelector(".popup__input[name=place-name]")
const linkPhotoInput = document.querySelector(".popup__input[name=photo]")
const popupFormAddAuthor = document.querySelector(".popup__form[name=place]")
const popupAddAuthorButtonSaveForm = document.querySelector(
  ".popup__button-create"
)
const popupAddAuthorButtonClose = document.querySelector(
  ".popup__button-close_type_add-author"
)

// Обявление данных попапа Zoom
const popupOpenImage = document.querySelector("popup_type_open-card")
const popupOpenImageElementPhoto = document.querySelector("popup__photo")
const popupOpenImageElementName = document.querySelector("popup__place-name")
const popupOpenImageButtonClose = document.querySelector(
  ".popup__button-close popup__button-close_type_open-card"
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

/*------------------------Функция создания карточки--------------------------*/

const createElement = (element) => {
  // Объявление переменных карточки
  const newElement = document
    .querySelector("#elementTemplate")
    .content.cloneNode(true)
  const elementName = newElement.querySelector(".element__place-name")
  const elementPhoto = newElement.querySelector(".element__photo")
  const elementButtonPhoto = newElement.querySelector(".element__button-photo")
  const elementButtonLike = newElement.querySelector(".element__like")
  const elementButtonDelete = newElement.querySelector(".element__delete")

  // Слушатель попапа Zoom
  elementButtonPhoto.addEventListener("click", handleImgPopup)

  // Слушатель лайка
  elementButtonLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_active")
  })

  // Функция и слушатель удаление карточки
  function removeButton(item) {
    const chooseCard = item.closest(".element")
    chooseCard.remove()
  }
  elementButtonDelete.addEventListener("click", () =>
    removeButton(elementButtonDelete)
  )

  // Заполнение карточки данными из массива
  elementName.textContent = element.name
  elementPhoto.setAttribute("src", element.link)
  elementPhoto.setAttribute("alt", element.name)

  return newElement
}

// Вызов массива данных
initialCards.forEach(createCard)

// Создание карточки из массива
function createCard(card) {
  const createNewCard = createElement(card)
  sectionElements.prepend(createNewCard)
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
}

/*------------------------Слушатели--------------------------*/

buttonEditProfile.addEventListener("click", () => {
  userAuthorInput.value = userAuthorProfile.textContent
  userJobInput.value = userJobProfile.textContent
  openPopup(popupEditProfile)
})

popupEditProfileButtonClose.addEventListener("click", () =>
  сlosePopup(popupEditProfile)
)

buttonAddAuthor.addEventListener("click", (evt) => {
  evt.preventDefault()
  openPopup(popupAddAuthor)
})

popupAddAuthorButtonClose.addEventListener("click", (evt) => {
  evt.preventDefault()
  сlosePopup(popupAddAuthor)
})

popupEditProfileForm.addEventListener("submit", saveProfile)

popupAddAuthor.addEventListener("submit", handleFormSubmitCard)
