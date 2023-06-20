export default class Section {
  constructor({ data, renderer }, selector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderCards() {
    // Переберем массив _initialArray с начальными сообщениями
    this._initialArray.forEach((card) => {
      this._renderer(card);
    });
  }

  renderUserCards() {
    this._renderer(this._initialArray)
  }
  setCard(element) {
    this._container.prepend(element);
  }
}
