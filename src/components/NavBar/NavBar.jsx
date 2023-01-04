import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-light border ">
        <div className="container ">
          <div className="container d-flex justify-content-around">
            <Link className="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/brV3x78/LogoNg.png"
                alt=""
                className="logoNavbar"
              />
            </Link>
            <button
              className="navbar-toggler "
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
          <div
            className="container collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item active">
                <Link className="nav-link fs-4" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fs-4" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fs-4 dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </Link>
                <ul
                  className="dropdown-menu ul-color styleUl "
                  aria-labelledby="navbarDropdownMenuLink"
                 >
                  <li>
                    <Link className="dropdown-item" to="/todos">
                      {" "}
                      Todos
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropend"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> Tv´s, Audio y Video &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link className="dropdown-item" to="/categoria/imagen">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Tv´s</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/audio">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Audio</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/monitores"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Monitores</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link className="dropdown-item" to="/categoria/aire">
                          <i className="bi bi-caret-right-fill text-start">
                            <span> Aire Acondicionado</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/ventilacion"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span> Ventiladores</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/calefaccion"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span> Calefactores</span>
                          </i>
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
                      <span>Heladeras y Freezer &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/heladera"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Heladeras</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/freezer">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Freezer</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/termotanques"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Termotanques</span>
                          </i>
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
                      <span>Lavado &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/lavarropa"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Lavarropa</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/secarropa">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Secarropa</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link className="dropdown-item" to="/categoria/cocina">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Cocinas</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/horno">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Hornos</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/microonda">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Microondas</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">                      
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/aspiradora"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Aspiradoras</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">                     
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/batidora"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Batidora</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/licuadora"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Licuadora</span>
                          </i>
                        </Link>
                      </li>                      
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/multiprocesadora"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Multiprocesadora</span>
                          </i>
                        </Link>
                      </li>                     
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/freidora"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Freidoras</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/hornodepan"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Horno de Pan</span>
                          </i>
                        </Link>
                      </li>                      
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/equipamiento"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Otros</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/motorola"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Motorola</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/samsung">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Samsung</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/notebook"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Notebook</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/gabinete"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Gabinete</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/pc"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>PC</span>
                          </i>
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
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/bicicletas"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Bicicletas</span>
                          </i>
                        </Link>
                      </li> 
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/hidrolavadoras"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Hidrolavadoras</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/categoria/piletas">
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Piletas</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/cortadoras"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Cortadoras de Pasto</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/herramientas"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Herramientas</span>
                          </i>
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
                      <span>Muebles &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu ul-color">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/mueblesdecocina"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Muebles de Cocina</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/mueblesdeinterior"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Muebles de Interior</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/parrillas"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Parrillas</span>
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/colchones"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Colchones</span>
                          </i>
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
                      <span>Motos &raquo;</span>
                    </Link>
                    <ul className="dropdown-menu submenu ul-color">                      
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/categoria/motos"
                        >
                          <i className="bi bi-caret-right-fill text-start">
                            <span>Motos</span>
                          </i>
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
