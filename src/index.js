import './index.html';
import './style.css';

console.log('funguju???');

const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const navLink = document.querySelectorAll('nav a');
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
}

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = false;
const makeOrder = () => {
  if (ordered === false) {
    drinkCup.classList.add('drink__cup--selected');
    ordered = true;
    orderBtn.textContent = 'Zrušit';
  } else {
    drinkCup.classList.remove('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
    ordered = false;
  }
  console.log('Tak co se děje??');
};

orderBtn.addEventListener('click', makeOrder);
