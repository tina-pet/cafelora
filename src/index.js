import './index.html';
import './style.css';

console.log('funguju!');

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
