import './style.css';
// import Amala from '../assets/images/background2.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `<div class="container hello d-flex">
  <h3>Breakfast</h3>
 <div class="d-block">
 <span>Omelette</span>
         <span>Coffee</span>
         <span>Tea</span>
         <span>Bread</span>
 
 </div>

 </div>`;
//  const myAmala = new Image();
//  myAmala.src = Amala;
//  element.appendChild(myAmala);
 
  return element;
}

document.body.appendChild(component());