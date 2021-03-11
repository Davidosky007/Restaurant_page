const header = () => {
const initialDiv = document.createElement('div');
initialDiv.classList.add('initail_div');
initialDiv.setAttribute('id', 'div_initial');
initialDiv.innerHTML = `
  <h1 class="display-4">Welcome to <span class="text-info">Foodiez</span></h1>
  <h2 class="lead">Where you get the best of Nigerian local cuisines</h2>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
`;
return initialDiv;
};

export { header as default};