const menuCreate = () => {
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');
menu.classList.add('menu_card');
menu.innerHTML = `
<div class="d-flex mx-auto">

<div class="card text-white bg-primary mb-3 mr-5" style="max-width: 20rem;">
  <div class="card-header">Breakfast</div>
  <div class="card-body">
  <div>Omelette</div>
  <div>Coffee</div>
  <div>Tea</div>
  <div>Bread</div>
  </div>
</div>

<div class="card text-white bg-primary mb-3 mr-5" style="max-width: 20rem;">
  <div class="card-header">Lunch</div>
  <div class="card-body">
  <div>Burger</div>
  <div>Pizza</div>
  <div>Steak</div>
  <div>Chicken panini</div> 
  </div>
</div>

<div class="card text-white bg-primary mb-3 mr-5" style="max-width: 20rem;">
  <div class="card-header">Dinner</div>
  <div class="card-body">
  <div>Salad</div>
  <div>Brown bread</div>
  <div>Soup</div>
  <div>White bread</div>
  <div>Fried rice and chicken</div>
  </div>
</div>


</div>


`;
return menu;
};

export { menuCreate as default};