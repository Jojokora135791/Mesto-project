export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResult(res) {
    if (!res.ok) {
      return Promise.reject(`Error ${res.status}`);
    } else {
      return res.json();
    }
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  patchUserInfo(author, job) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: author,
        about: job,
      }),
    }).then((res) => this._checkResult(res));
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => this._checkResult(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkResult(res));
  }
  
  likeCard(card) {
    return fetch(`${this._baseUrl}/cards/${card._cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => this._checkResult(res));
  }

  dislikeCard(card) {
    return fetch(`${this._baseUrl}/cards/${card._cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkResult(res));
  }

  editAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      }),
    })
    .then((res) => this._checkResult(res));
  }
}
