let editProfileButtons = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__button-close');
let userAuthorProfile = document.querySelector('.profile__author');
let userJobProfile = document.querySelector('.profile__job');
let userAuthorInput = popup.querySelector('.popup__input_type_author'); 
let userJobInput = document.querySelector('.popup__input_type_job');
let popupForm = popup.querySelector('.popup__form');
let saveFormButton = popup.querySelector('.popup__button-save')


editProfileButtons.addEventListener('click', editProfile);
closePopupButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', saveProfile);

// Сохранить данные в попапе
function saveProfile(evt) {
  evt.preventDefault();
  userAuthorProfile.textContent = userAuthorInput.value;
  userJobProfile.textContent = userJobInput.value;
  closePopup(popup);
}

// Открытие попапа "Редактировать"
function editProfile() {
  userAuthorInput.value = userAuthorProfile.textContent;
  userJobInput.value = userJobProfile.textContent; 
  popup.style = 'display:flex';
}

// Закрытие попапа "Редактировать"
function closePopup() {
  popup.style = 'display:none';
}




