'use strict';
(function() {
  var pageHeader = document.querySelector('.page-header');
  var burger = document.querySelector('.page-header__menu-burger');

  function burgerClickHandler() {
    pageHeader.classList.toggle('page-header--menu-opened');
  }

  pageHeader.classList.remove('page-header--menu-opened');
  burger.addEventListener('click', burgerClickHandler);
})();
