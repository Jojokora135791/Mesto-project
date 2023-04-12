let editProfileButtons = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__button-close');
let userAuthorProfile = document.querySelector('.profile__author');
let userJobProfile = document.querySelector('.profile__job');
let userAuthorInput = popup.querySelector('.popup__input_type_author'); 
let userJobInput = popup.querySelector('.popup__input_type_job');
let popupForm = popup.querySelector('.popup__form');
let saveFormButton = popup.querySelector('.popup__button-save')

let buttonAddAuthor = document.querySelector('.profile__add-button')
let popupAddAuthor = document.querySelector('.popup-add-author')


// Открытие попапа 'Редактировать'
function editProfile() {
  userAuthorInput.value = userAuthorProfile.textContent;
  userJobInput.value = userJobProfile.textContent; 
  popup.classList.add('popup_opened');
}

// Закрытие попапа 'Редактировать'
function closePopup() {
  popup.classList.remove('popup_opened');
}

function addAuthor() {
  popupAddAuthor.classList.add('popup_opened');
}


editProfileButtons.addEventListener('click', editProfile);
closePopupButton.addEventListener('click', closePopup);
buttonAddAuthor.addEventListener('click', addAuthor)


// Сохранить данные в попапе
function saveProfile(evt) {
  evt.preventDefault();
  userAuthorProfile.textContent = userAuthorInput.value;
  userJobProfile.textContent = userJobInput.value;
  closePopup(popup);
}

popupForm.addEventListener('submit', saveProfile);


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



