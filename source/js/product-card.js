'use strict';
(function() {
  var addLinks = document.querySelectorAll('.product-card__to-cart');

  function addLinkClickHandler(e) {
    e.preventDefault();
    window.popup.open();
  }

  addLinks.forEach(function(link) {
    link.addEventListener('click', addLinkClickHandler);
  });
})();