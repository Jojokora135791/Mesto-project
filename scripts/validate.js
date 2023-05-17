class FormValidation {
  constructor(config) {
    this._formList = Array.from(document.querySelectorAll(config.formSelector));
    this._buttonErrorClass = config.buttonErrorClass;
    this._errorClassTemplate = config.errorClassTemplate;
    this._activeErrorClass = config.activeErrorClass;
  }
  
  _disableButton = () => {
    if (this._buttonElement !== null) {
      this._buttonElement.classList.add(this._buttonErrorClass);
      this._buttonElement.disabled = true;
    }
  }
  
  _enableButton = () => {
    if (this._buttonElement !== null) {
      this._buttonElement.classList.remove(buttonErrorClass);
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
    
      this._inputList = form.querySelectorAll(config.inputSelector);
      this._buttonElement = form.querySelector(config.buttonSelector);
      
      this._toggleButtonState();
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
  
      this._inputList.forEach((input) => {

        input.addEventListener("input", () => {
  
          _checkInputValidity(input);
  
          this._toggleButtonState();
  
        });
  
      });
  
    });
  
  }

  enableValidation() {
    this._setEventListeners();
  }

}

const forms = new FormValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: '.popup__input-error',
  buttonSelector: '.popup__button-submit', 
  buttonErrorClass: 'popup__button-submit_disabled'
});
const formValid = forms.enableValidation(); 

