export class FormValidation {
  constructor(config) {
    this._formList = Array.from(document.querySelectorAll(config.formSelector));
    this._buttonErrorClass = config.buttonErrorClass;
    this._errorClassTemplate = config.errorClassTemplate;
    this._activeErrorClass = config.activeErrorClass;
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
  }
  
  _disableButton = () => {
    if (this._buttonElement !== null) {
      this._buttonElement.classList.add(this._buttonErrorClass);
      this._buttonElement.disabled = true;
    }
  }
  
  _enableButton = () => {
    if (this._buttonElement !== null) {
      this._buttonElement.classList.remove(this._buttonErrorClass);
      this._buttonElement.disabled = false;
    }
  
  }
  
  _hasInvalidInput = () => {
    return Array.from(this._inputList).some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState = () => {
    if (!this._hasInvalidInput()) {
      this._enableButton();
    } else {
      this._disableButton();
  
    }
  }

  _showInputError = (input) => {

    this._errorTextElement.textContent = input.validationMessage;
    this._errorTextElement.classList.add(this._activeErrorClass);
  
  }
  
  _hideInputError = () => {
  
    this._errorTextElement.textContent = '';
    this._errorTextElement.classList.remove(this._activeErrorClass)
  }
  
  _checkInputValidity = (input) => {

    this._errorTextElement = document.querySelector(`${this._errorClassTemplate}${input.name}`)

    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError();
    }
  }

  _setEventListeners() {

    this._formList.forEach((form) => {
    
      this._inputList = form.querySelectorAll(this._inputSelector);
      this._buttonElement = form.querySelector(this._buttonSelector);
      
      this._toggleButtonState();
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
  
      this._inputList.forEach((input) => {

        input.addEventListener("input", () => {
  
          this._checkInputValidity(input);
  
          this._toggleButtonState();
  
        });
      });
      
  
    });
  
  }

  enableValidation() {
    this._setEventListeners();
  }

}

