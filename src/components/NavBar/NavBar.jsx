import React from "react";
import { Link } from "react-router-dom";


import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container d-flex justify-content-between">
          <div className="container d-flex justify-content-around">
            <Link className="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/bvM0jYg/Logo-Blanco.png"
                alt=""
                className="logoNavbar"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {/* <div className="container">
            <form className="d-flex ">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar"
              ></input>
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div> */}
           
          <div className="container"></div>
          <div
            className="container collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/todos">
                      {" "}
                      Todos
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toogle"
                      to="/categoria/Smarts, audio y video"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> Smarts, Audio y Video &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link className="dropdown-item" to="/categoria/imagen">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Smarts</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/audio">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Audio</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/Video">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Video</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toogle"
                      to="/categoria/climatizacion"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> Climatización &raquo;</span>
                    </Link>

          <ul className="dropdown-menu submenu">
          <li><Link className="dropdown-item" to="/categoria/aire"><span>Aire Acondicionado</span><i className="bi bi-caret-down-fill"></i></Link></li>
          <li><Link className="dropdown-item" to="/categoria/ventilacion"><span> Ventiladores</span><i className="bi bi-caret-down-fill"></i></Link></li>
          <li><Link className="dropdown-item" to="/categoria/calefaccion"><span>Calefactores</span><i className="bi bi-caret-down-fill"></i></Link></li>
          </ul>
             </li>
           <li><Link className="dropdown-item" to="/categoria/heladeras y freezer"><span>Heladeras & Freezer</span><i className="bi bi-caret-down-fill"></i></Link></li>
           <li><Link className="dropdown-item" to="/categoria/termotanques"><span>Termotanques & Calefones</span></Link></li>
           <li><Link className="dropdown-item" to="/categoria/lavarropas"><span>Lavarropas & Secarropas</span></Link></li>
           <li><Link className="dropdown-item" to="/categoria/cocinas y hornos"><span>Cocinas & Hornos</span><i className="bi bi-caret-down-fill"></i></Link></li>
           <li><Link className="dropdown-item" to="/categoria/pequeños hogar"><span>Pequeños Hogar</span><i className="bi bi-caret-down-fill"></i></Link></li>
           <li><Link className="dropdown-item" to="/categoria/pequeños cocina"><span>Pequeños Cocina</span><i className="bi bi-caret-down-fill"></i></Link></li>
           <li><Link className="dropdown-item" to="/categoria/cuidado personal"><span>Cuidado personal</span></Link></li>
           <li><Link className="dropdown-item" to="/categoria/informatica"><span>Informática</span><i className="bi bi-caret-down-fill"></i></Link></li>
           <li><Link className="dropdown-item" to="/categoria/jardin"><span>Jardín</span><i className="bi bi-caret-down-fill"></i></Link></li>
   
        </ul>
     </li>
   </ul>
   <form className=" mx-auto mt-10">
 
         <input className="form-row mt-sm-2 p-1"  type="search" placeholder="Buscar"></input>
         <button className="btn btn-outline-success my-sm-o p-1 mb-1" type="submit"><i className="bi bi-search"></i></button>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toogle"
                      to="/categoria/climatizacion"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Heladeras y Freezer &raquo;</span>
                    </Link>

                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/heladera"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Heladeras</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/freezer">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Freezer</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Termotanques y Calefones &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/termotanques"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Termotanques</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/calefones"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Calefones</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Cocinas y Hornos &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link className="dropdown-item" to="/categoria/cocinas">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Cocinas</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/hornos">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Hornos</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Pequeños Hogar &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/planchas"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Planchas</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/aspiradoras"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Aspiradoras</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Pequeños Cocina &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/cafetera"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Cafetera</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/pava electrica"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Pava Electrica</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/Batidora"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Batidora</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/Licuadora"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Licuadora</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/multiprocesadora"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Multiprocesadora</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/fabrica de pasta"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Fabrica de Pasta</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/horno de pan"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Horno de Pan</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/vaporera"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Vaporera</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Celulares &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/motorola"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Motorola</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/samsung">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Samsung</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"                     
                    >
                      <span>Cuidado personal &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/afeitadora"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Afeitadora</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/Cortadora de Pelo"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Cortadora de Pelo</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/Depiladora"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Depiladora</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/Secadora de Pelo"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Secadora de Pelo</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/Planchitas y rizadores"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Planchitas y Rizadores</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Informática &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/notebook"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Notebook</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/consolas de juegos"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Consolas de Juegos</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/Tablets">
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Tablets</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="nav-link dropdown-toogle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>Jardín &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/bicicletas"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Bicicletas</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/herramientas"
                        >
                          <i className="bi bi-caret-right-fill"></i>
                          <span>Herramientas</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
