'use strict';
(function() {
  var popup = document.querySelector('.popup');
  var popupAddButton = document.querySelector('.popup__add-button');

  function close() {
    popup.classList.remove('popup--opened');
    popup.removeEventListener('click', popupClickHandler)
  }

  function open() {
    popup.classList.add('popup--opened');
    popup.addEventListener('click', popupClickHandler);
  }

  function popupClickHandler(e) {
    if (e.target === popup) {
      close();
    }

    return;
  }

  function addButtonClickHandler(e) {
    e.preventDefault();
    close();
  }

  popupAddButton.addEventListener('click', addButtonClickHandler);

  if (!window.popup) {
    window.popup = {
      open: open,
      close: close
    };
  }
  
})();
