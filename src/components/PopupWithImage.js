import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._name = this._selector.querySelector(".popup__place-name");
    this._link = this._selector.querySelector(".popup__photo");
  }

  openPopup(name, link) {
    super.openPopup();
    this._link.src = link;
    this._link.alt = name;
    this._name.textContent = name;
  }
}
