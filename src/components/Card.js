export class Card {
  constructor(data, cardTemplateSelector, handleImgPopup, deleteCard, likeCard, dislikeCard) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes.length;
    this._cardId = data._id;
    this.__owner = data.owner._id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleImgPopup = handleImgPopup;
    this._deleteCard = deleteCard;
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
    this._likeStatus = false;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return this._cardElement;
  }

  likesSum(likes) {
    this._numberLikes.textContent = likes;
  }

  likeButton() {
    this._cardButtonLike.classList.add("element__like_active");
    this._likeStatus = true;
  }

  dislikeButton() {
    this._cardButtonLike.classList.remove("element__like_active");
    this._likeStatus = false;
  }

  _changeLikeButton() {
    if (this._likeStatus === false) {
      this._likeCard(this)
    }
    else {
      this._dislikeCard(this)
    }
  }

  _setEventLinstener() {
    this._cardButtonPhoto.addEventListener("click", () =>
      this._handleImgPopup(this._name, this._link)
    );
    this._cardButtonLike.addEventListener("click", () => this._changeLikeButton());
    this._cardButtonDelete.addEventListener("click", () =>
      this._deleteCard(this._cardId, this._element)
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardPhoto = this._element.querySelector(".element__photo");
    this._cardName = this._element.querySelector(".element__place-name");
    this._cardButtonPhoto = this._element.querySelector(
      ".element__button-photo"
    );
    this._cardButtonLike = this._element.querySelector(".element__like");
    this._numberLikes = this._element.querySelector(".element__number-like");
    this._cardButtonDelete = this._element.querySelector(".element__delete");

    
    this._cardName.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._numberLikes.textContent = this._likes;

    for (let i = 0; i < this._likes; i++) {
      if ((this._data.likes[i]._id) === "ee86309dcc48b49d0e2659a6") {
        this.likeButton();
      }
    }
    
    if (this.__owner != "ee86309dcc48b49d0e2659a6") {
      this._cardButtonDelete.remove();
    }
    
    this._setEventLinstener();
    return this._element;
  }
}
