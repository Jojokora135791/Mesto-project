import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    super(selector);
    this._submitForm = submitForm;
    this._formElement = this._selector.querySelector(".popup__form")
  }
  _getInputValues() {

  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._submitForm);
  }
  closePopup() {
    super.closePopup();
  }
}
