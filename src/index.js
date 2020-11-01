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
const romano = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const romanoElm = Drinks(romano);
drinksList.appendChild(romanoElm);
