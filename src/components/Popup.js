export class Popup {
  constructor(selector) {
    this._selector = document.querySelector(selector);
    this._buttonClose = this._selector.querySelector(".popup__button-close");
    this._formElement = this._selector.querySelector('.popup__form');
    this._buttonSubmit = this._selector.querySelector(".popup__button-submit");
  }

  // Закрытие попапа по клавише Escape

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  };

  // Закрытие попапа по нажатию на оверлей

  _handleOverlayClickClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.closePopup();
    }
  };

  renderLoading(text) {
    this._buttonSubmit.textContent = text;
    console.log(this._buttonSubmit.textContent);
  };

  openPopup() {
    this._selector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._selector.addEventListener("click", this._handleOverlayClickClose);
  }

  closePopup() {
    this._selector.classList.remove("popup_opened");
    document.removeEventListener("keydown", () => this._handleEscClose);
    this._selector.removeEventListener("click", this._handleOverlayClickClose);
  }
  setEventListeners() {
    this._buttonClose.addEventListener("click", () => this.closePopup());
  }
};
