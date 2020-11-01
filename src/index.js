import './index.html';
import './style.css';
import { Layer } from './Layer/index.js';

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
};

orderBtn.addEventListener('click', makeOrder);

const drinkInfo = document.querySelector('.drink__info');
const cappuccino = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: 'fed7b0a',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

for (let i = 0; i < cappuccino.length; i++) {
  drinkInfo.innerHTML += Layer(cappuccino[i]);
}
