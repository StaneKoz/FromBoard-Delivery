
let cards = document.querySelectorAll('.item-comments');
let leftArrow = document.querySelector('.comments__left-arrow');
let rightArrow = document.querySelector('.comments__right-arrow');

for (let i = 0; i< cards.length; i++) {
  cards[i].style.order = i;
  console.log(cards[i].style.order);
}

function leftClickHandler(ev) {
  for (let card of cards) {
    card.style.order -= 2;
    card.style.order = (+card.style.order < 0) ? cards.length + +card.style.order
    : card.style.order;
  }
}

function rightClickHandler (ev) {
  for (let card of cards) {
    card.style.order = (+card.style.order + 2) % cards.length;
    console.log(card.style.order)
  }
}

leftArrow.addEventListener('click', leftClickHandler);
rightArrow.addEventListener('click', rightClickHandler);