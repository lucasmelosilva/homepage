const buttonMenu = document.querySelector('.header__button');
const buttonMenuImages = ['./assets/img/svg/menu.svg', './assets/img/svg/close.svg']
const cards = document.querySelectorAll('.card');


buttonMenu.addEventListener('click', () => {
  buttonMenu.style.backgroundImage = `url(${buttonMenuImages[1]})`;
  buttonMenuImages.reverse()

  document.querySelector('.header__menu').classList.toggle('header__menu--open');
})

for (let card of cards) {
  let button = card.querySelector('.card__button');

  card.addEventListener('mouseover', () => {
    card.classList.add('card--horver');
    button.classList.add('card__button--horver');
  })

  card.addEventListener('mouseout', () => {
    card.classList.remove('card--horver');
    button.classList.remove('card__button--horver');
  })

}