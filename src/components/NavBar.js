import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-light nav--color">
        <div class="container-fluid">
          <div>
            <a class="navbar-brand" href="#">
              <img
                src="./logo-gamestore.png"
                alt="logo videogame store"
                class="nav--logo"
              ></img>
            </a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Tienda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Descuentos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Acerca de
                </a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
