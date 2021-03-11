import './style.css';
import navItem from './nav';
import header from './header';
import menuCreate from './menu';
import contactPage from './contact';


const content = document.getElementById('content');
content.appendChild(navItem());
content.appendChild(header());
content.appendChild(menuCreate());
content.appendChild(contactPage());


document.querySelector('#content').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  const control = e.target;
  const navbar = document.querySelector('.navbar');
  const heading = document.querySelector('#div_initial');
  const menuPage = document.querySelector('#menu');
  const contact = document.querySelector('#form-div');

  if (control.id === 'home') {
    heading.style.display = 'inherit';
    menuPage.style.display = 'none';
    contact.style.display = 'none';
  } else if (control.className === 'menu') {
    heading.style.display = 'none';
    menuPage.style.display = 'flex';
    contact.style.display = 'none';
  } else if (control.id === 'contact') {
    heading.style.display = 'none';
    menuPage.style.display = 'none';
    navbar.style.display = 'flex';
    contact.style.display = 'flex';
  }
});