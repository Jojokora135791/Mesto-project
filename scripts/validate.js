export class FormValidation {
  constructor(config, formElement) {
    this._form = formElement;
    this._inputSelector = config.inputSelector;
    this._buttonErrorClass = config.buttonErrorClass;
    this._errorClassTemplate = config.errorClassTemplate;
    this._activeErrorClass = config.activeErrorClass;
    this._inputList = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    this._buttonElement = formElement.querySelector(config.buttonSelector);
  }

  _disableButton () {
      this._buttonElement.classList.add(this._buttonErrorClass);
      this._buttonElement.disabled = true;
  };

  _enableButton () {
      this._buttonElement.classList.remove(this._buttonErrorClass);
      this._buttonElement.disabled = false;
    
  };

  _hasInvalidInput () {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };

  _showInputError = (input, errorMessage) => {
    this._errorTextElement = document.querySelector(
      `${this._errorClassTemplate}${input.name}`
    );

    this._errorTextElement.classList.add(this._activeErrorClass);
    this._errorTextElement.textContent = errorMessage;
  };

  _hideInputError = (input) => {
    this._errorTextElement = document.querySelector(
      `${this._errorClassTemplate}${input.name}`
    );
    this._errorTextElement.classList.remove(this._activeErrorClass);
    this._errorTextElement.textContent = "";
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  setDefaultButton() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
      this._toggleButtonState();
    })
  }

  enableValidation() {
    this._setEventListeners();
  }
}
