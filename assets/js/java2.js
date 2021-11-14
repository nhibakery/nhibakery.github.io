// JavaScript Document
const menuItems = document.querySelectorAll('.menu__item');

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', buttonClick);
}

function buttonClick() {
  if (!this.classList.contains('menu__item--active')) {
    document.body.style.backgroundColor = `#${this.getAttribute('data-background')}`;
  }
}

