const disableButton = (buttonElement, buttonErrorClass) => {
  if (buttonElement !== null) {
    buttonElement.classList.add(buttonErrorClass);
    buttonElement.disabled = true;
  }
}

const enableButton = (buttonElement, buttonErrorClass) => {
  if (buttonElement !== null) {
    buttonElement.classList.remove(buttonErrorClass);
    buttonElement.disabled = false;
  }

}

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((inputElement) => !inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, buttonErrorClass) => {
  
  if (!hasInvalidInput(inputList)) {
    enableButton(buttonElement, buttonErrorClass);
  } else {
    disableButton(buttonElement, buttonErrorClass);

  }
}

const showInputError = (input, errorTextElement, activeErrorClass) => {

  errorTextElement.textContent = input.validationMessage;
  errorTextElement.classList.add(activeErrorClass);

}

const hideInputError = (errorTextElement, activeErrorClass) => {

  errorTextElement.textContent = '';
  errorTextElement.classList.remove(activeErrorClass)
}

const checkInputValidity = (inputList, input, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`)
  if (!input.validity.valid) {
    showInputError(input, errorTextElement, activeErrorClass);
  } else {
    hideInputError(errorTextElement, activeErrorClass);
  }
}

const setEventListeners = (formList, config) => {
  
  formList.forEach((form) => {
    
    const inputList = form.querySelectorAll(config.inputSelector);
    const buttonElement = form.querySelector(config.buttonSelector);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });


    inputList.forEach((input) => {
      input.addEventListener("input", () => {

        checkInputValidity(inputList, input, config.errorClassTemplate, config.activeErrorClass);

        toggleButtonState(inputList, buttonElement, config.buttonErrorClass);

      });

    });

  });

};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  setEventListeners(formList, config);
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: '.popup__input-error',
  buttonSelector: '.popup__button-submit', 
  buttonErrorClass: 'popup__button-submit_disabled'
});
