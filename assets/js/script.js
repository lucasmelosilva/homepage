const buttonMenu = document.querySelector('.header__button');
const buttonMenuImages = ['./assets/img/svg/menu.svg', './assets/img/svg/close.svg']

buttonMenu.addEventListener('click', () => {
  buttonMenu.style.backgroundImage = `url(${buttonMenuImages[1]})`;
  buttonMenuImages.reverse()

  document.querySelector('.header__menu').classList.toggle('header__menu--open');
})