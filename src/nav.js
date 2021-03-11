const navItem = () => {
const navbar = document.createElement('nav');
navbar.classList.add('navbar');
navbar.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark nav_item container-fluid vh-100  ">
  <a class="navbar-brand " href="#"><h1>Foodiez</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03 d-flex">
    <ul class="navbar-nav mr-auto d-flex">
      <li class="nav-item active ml-5">
        <a class="nav-link" href="#"><h4>Home</h4>
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item ml-5">
        <a class="nav-link text-white" href="#"><h4>Menu</h4></a>
      </li>
      <li class="nav-item ml-5">
        <a class="nav-link text-white" href="#"><h4>Contact</h4></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

`;

return navbar;
};


export { navItem as default };