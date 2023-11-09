'use strict'

let burgerBtn = document.querySelector('.menu-burger__button');
let headerBlock = document.querySelector('.header__container');
let previousDocWidth = document.documentElement.clientWidth;

function clickHandler(ev) {
  headerBlock.classList.toggle('mobile-active');
  burgerBtn.classList.toggle('menu-burger__button_active');
}

function resizeHandler(ev) {
  if (previousDocWidth < 759 && document.documentElement.clientWidth > 758) {
    headerBlock.classList.remove('mobile-active');
    burgerBtn.classList.remove('menu-burger__button_active');
  }

  previousDocWidth = document.documentElement.clientWidth;
}

burgerBtn.addEventListener('click', clickHandler);
window.addEventListener('resize', resizeHandler)