// Объявление всех переменных

// Объявление данных profile
let userAuthorProfile = document.querySelector('.profile__author')
let userJobProfile = document.querySelector('.profile__job')
let buttonEditProfile = document.querySelector('.profile__button-edit')
let buttonAddAuthor = document.querySelector('.profile__add-button')

// Объявление данных попапа editProfile
let popupEditProfile = document.querySelector('.popup-edit-profile')
let popupEditProfileForm = document.querySelector('.popup__form[name=profile]')
let userAuthorInput = document.querySelector('.popup__input[name=author]')
let userJobInput = document.querySelector('.popup__input[name=job]')
let popupEditProfileButtonSaveForm = document.querySelector('.popup__button-save')
let popupEditProfileButtonClose = document.querySelector('.popup__button-close_type_edit-profile')

// Объявление данных попапа addAuthor
let popupAddAuthor = document.querySelector('.popup-add-author')
let popupFormAddAuthor = document.querySelector('.popup__form[name=place]')
let popupAddAuthorButtonSaveForm = document.querySelector('.popup__button-create')
let popupAddAuthorButtonClose = document.querySelector('.popup__button-close_type_add-author')



// Открытие попапа 'Редактировать'
function editProfile(popupElement) {
  popupElement.classList.add('popup_opened')
}

// Закрытие попапа 'Редактировать'
function closePopupEditProfile(popupElement) {
  popupElement.classList.remove('popup_opened')
}

// function closeAuthor() {
//   popupAddAuthor.classList.remove('popup_opened')
// }


buttonEditProfile.addEventListener('click', () => {
  userAuthorInput.value = userAuthorProfile.textContent
  userJobInput.value = userJobProfile.textContent
  editProfile(popupEditProfile)
})
popupEditProfileButtonClose.addEventListener('click', () => closePopupEditProfile(popupEditProfile))
buttonAddAuthor.addEventListener('click', (evt) => {
  evt.preventDefault();
  editProfile(popupAddAuthor)
})
popupAddAuthorButtonClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopupEditProfile(popupAddAuthor)
})


// Сохранить данные в попапе
function saveProfile(evt) {
  evt.preventDefault();
  userAuthorProfile.textContent = userAuthorInput.value;
  userJobProfile.textContent = userJobInput.value;
  closePopupEditProfile(popupEditProfile);
}

// Сохранить данные в попапе

popupEditProfileForm.addEventListener('submit', saveProfile);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const sectionElements = document.querySelector('.elements');

const createElement = (element) => {
  const newElement = document.querySelector('#elementTemplate').content.cloneNode(true);
  const elementName = newElement.querySelector('.element__place-name');
  elementName.textContent = element.name;

  const elementPhoto = newElement.querySelector('.element__photo')
  elementPhoto.setAttribute('src', element.link)

  sectionElements.append(newElement);
};

initialCards.forEach(createElement);



