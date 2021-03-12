const navItem = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');
  navbar.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark nav_item container-fluid  ">
  <a class="navbar-brand mr-6 " href="#"><h1 class="display-3">Foodiez</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03 d-flex">
    <ul class="navbar-nav mr-auto d-flex">
      <li class="nav-item active ml-5">
        <a class="nav-link btn btn-outline-info" href="#home"><h4 id="home">Home</h4>
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item ml-5">
      <a class="nav-link text-white btn btn-outline-info" href="menu"><h4 class="menu">Menu</h4></a>
      </li>
      <li class="nav-item ml-5">
        <a class="nav-link text-white btn btn-outline-info" href="#"><h4 id="contact">Contact</h4></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

`;

  return navbar;
};

export { navItem as default };