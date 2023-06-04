// Объявление данных profile
export const userAuthorProfile = document.querySelector(".profile__author");
export const userJobProfile = document.querySelector(".profile__job");
export const buttonEditProfile = document.querySelector(
  ".profile__button-edit"
);
export const buttonAddAuthor = document.querySelector(".profile__add-button");

// Объявление данных попапа editProfile
export const popupEditProfile = document.querySelector(
  ".popup_type_edit-profile"
);
export const popupEditProfileForm = document.querySelector(
  ".popup__form[name=profile]"
);
export const userAuthorInput = document.querySelector(".popup__input[name=author]");
export const userJobInput = document.querySelector(".popup__input[name=job]");

// Объявление данных попапа addAuthor
export const popupAddAuthor = document.querySelector(".popup_type_add-author");
export const popupAddAuthorForm = document.querySelector(
  ".popup__form[name=place]"
);
export const placeNameInput = document.querySelector(
  ".popup__input[name=place-name]"
);
export const linkPhotoInput = document.querySelector(
  ".popup__input[name=photo]"
);

// Обявление данных попапа Zoom
export const popupOpenImage = document.querySelector(".popup_type_open-card");

// Объявление массива форм
export const formList = Array.from(document.querySelectorAll(".popup__form"));

// Объявление данных карточек
export const sectionElements = document.querySelector(".elements");

