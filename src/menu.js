const menuCreate = () => {
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');
menu.classList.add('menu_card');
menu.innerHTML = `
<div class="d-flex">

<div class="card text-white bg-primary mb-3 mr-2" style="max-width: 20rem;">
  <div class="card-header">Breakfast</div>
  <div class="card-body">
  <span>Omelette</span>
  <span>Coffee</span>
  <span>Tea</span>
  <span>Bread</span>
  </div>
</div>

<div class="card text-white bg-primary mb-3 mr-2" style="max-width: 20rem;">
  <div class="card-header">Lunch</div>
  <div class="card-body">
  <span>Burger</span>
  <span>Pizza</span>
  <span>Steak</span>
  <span>Chicken panini</span> 
  </div>
</div>

<div class="card text-white bg-primary mb-3 mr-2" style="max-width: 20rem;">
  <div class="card-header">Dinner</div>
  <div class="card-body d-flex flex-direction-column">
  <span>Salad</span>
  <span>Brown bread</span>
  <span>Soup</span>
  <span>White bread</span>
  <span>Fried rice and chicken</span>
  </div>
</div>


</div>


`;
return menu;
};

export { menuCreate as default};