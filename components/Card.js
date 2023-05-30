export class Card {
  constructor(data, cardTemplateSelector, handleImgPopup) {
    this._link = data.link;
    this._name = data.name;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleImgPopup = handleImgPopup;
  }
  
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _likeButton() {
    this._cardButtonLike.classList.toggle("element__like_active");
  }
  _removeButton() {
    this._cardButtonDelete.closest(".element").remove();
  }


  _setEventLinstener() {

    this._cardButtonPhoto.addEventListener("click", () => this._handleImgPopup(this._name,this._link));

    this._cardButtonLike.addEventListener("click", () =>
      this._likeButton()
    );

    this._cardButtonDelete.addEventListener("click", () =>
      this._removeButton()
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardPhoto = this._element.querySelector(".element__photo");
    this._cardName = this._element.querySelector(".element__place-name");
    this._cardButtonPhoto = this._element.querySelector(".element__button-photo");
    this._cardButtonLike = this._element.querySelector(".element__like");
    this._cardButtonDelete = this._element.querySelector(".element__delete");

    this._cardName.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;


    this._setEventLinstener();
    return this._element;
  }
}
