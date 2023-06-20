import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(selector, handleSubmitForm) {
    super(selector);
    this._handleSubmitForm = handleSubmitForm;
    this._formElement = this._selector.querySelector('.popup__form');
  }
  setData(cardId, element) {
    this._cardId = cardId;
    this._element = element;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._cardId, this._element)
    })
  }
  closePopup() {
    this._formElement.reset();
    super.closePopup();
  }
}