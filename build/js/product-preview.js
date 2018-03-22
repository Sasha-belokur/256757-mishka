'use strict';
(function() {
  var orderButton = document.querySelector('.product-preview__btn');

  function orderButtonClickHandler(e) {
    e.preventDefault();
    window.popup.open();
  }

  orderButton.addEventListener('click', orderButtonClickHandler);
})();
