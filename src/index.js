import './index.html';
import './style.css';
import { Layer } from './Layer/index.js';
import { Drinks } from './Drinks/index.js';

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

const drinksList = document.querySelector('.drinks-list');

//const drinks = '';
fetch('https://run.mocky.io/v3/920f04d5-bf2e-49b3-9402-c693e6ea9499')
  .then((response) => response.json())
  .then((json) =>
    json.forEach((drink) => {
      drinksList.appendChild(Drinks(drink));
    }),
  );

// drinks.forEach((drink) => {
//   drinksList.appendChild(Drinks(drink));
// });
