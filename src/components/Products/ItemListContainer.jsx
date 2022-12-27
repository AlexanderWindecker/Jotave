import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getItems, { getItemsByCategory } from "../../services/MockAPI";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Item.css";

function ItemListContainer() {
  let [data, setData] = useState([]);

  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  return (
    <>
      <div className="d-flex  ">
        <div className="p-2  p-0 mt-5 nav-vertical ">
          <ul className=" flex-column nav-vertical m-0 p-1">
            <h2 className="text-center">Categorias</h2>
            
            <li className="nav-link dropend">
              <Link
                className="nav-link dropend"                
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span> Smarts, Audio y Video &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/imagen">
                    <i className="bi bi-caret-right-fill">
                      <span>Smarts</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/audio">
                    <i className="bi bi-caret-right-fill">
                      <span>Audio</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/monitores">
                    <i className="bi bi-caret-right-fill">
                      <span>Monitores</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                 className="nav-link dropend"                
                 data-bs-toggle="dropdown"
                 aria-expanded="false"
              >
                <span>Climatización &raquo;</span>
              </Link>

              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/aire">
                    <i className="bi bi-caret-right-fill">
                      <span>Aire Acondicionado</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/ventilacion">
                    <i className="bi bi-caret-right-fill">
                      <span>Ventiladores</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/calefaccion">
                    <i className="bi bi-caret-right-fill">
                      <span>Calefactores</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"                
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Heladeras y Freezer &raquo;</span>
              </Link>

              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/heladera">
                    <i className="bi bi-caret-right-fill">
                      <span>Heladeras</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/freezer">
                    <i className="bi bi-caret-right-fill">
                      <span>Freezer</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Termotanques y Calefones &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/termotanques">
                    <i className="bi bi-caret-right-fill">
                      <span>Termotanques</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/calefones">
                    <i className="bi bi-caret-right-fill">
                      <span>Calefones</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
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
                    <i className="bi bi-caret-right-fill">
                      <span>Cocinas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/hornos">
                    <i className="bi bi-caret-right-fill">
                      <span>Hornos</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Pequeños Hogar &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/planchas">
                    <i className="bi bi-caret-right-fill">
                      <span>Planchas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/aspiradoras">
                    <i className="bi bi-caret-right-fill">
                      <span>Aspiradoras</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Pequeños Cocina &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/cafetera">
                    <i className="bi bi-caret-right-fill">
                      <span>Cafetera</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/pava electrica"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Pava Electrica</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/Batidora">
                    <i className="bi bi-caret-right-fill">
                      <span>Batidora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/Licuadora">
                    <i className="bi bi-caret-right-fill">
                      <span>Licuadora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/multiprocesadora"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Multiprocesadora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/fabrica de pasta"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Fabrica de Pasta</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/horno de pan">
                    <i className="bi bi-caret-right-fill">
                      <span>Horno de Pan</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/vaporera">
                    <i className="bi bi-caret-right-fill">
                      <span>Vaporera</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Celulares &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/motorola">
                    <i className="bi bi-caret-right-fill">
                      <span>Motorola</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/samsung">
                    <i className="bi bi-caret-right-fill">
                      <span>Samsung</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Cuidado personal &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/afeitadora">
                    <i className="bi bi-caret-right-fill">
                      <span>Afeitadora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/Cortadora de Pelo"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Cortadora de Pelo</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/depiladora">
                    <i className="bi bi-caret-right-fill">
                      <span>Depiladora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/Secadora de Pelo"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Secadora de Pelo</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/Planchitas y rizadores"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Planchitas y Rizadores</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Informática &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/notebook">
                    <i className="bi bi-caret-right-fill">
                      <span>Notebook</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/consolas de juegos"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Consolas de Juegos</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/tablets">
                    <i className="bi bi-caret-right-fill">
                      <span>Tablets</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Jardín &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/bicicletas">
                    <i className="bi bi-caret-right-fill">
                      <span>Bicicletas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/piletas">
                    <i className="bi bi-caret-right-fill">
                      <span>Piletas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/cortadoras">
                    <i className="bi bi-caret-right-fill">
                      <span>Cortadoras de Pasto</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/hidrolavadoras"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Hidrolavadoras</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/herramientas">
                    <i className="bi bi-caret-right-fill">
                      <span>Herramientas</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Muebles &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/mueblesdecocina"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Muebles de Cocina</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/mueblesdeinterior"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Muebles de Interior</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/parrillas">
                    <i className="bi bi-caret-right-fill">
                      <span>Parrillas</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        
          <div className="container-fluid m-0">

            <ItemList data={data} />
          </div>
          
        
      </div>
    </>
  );
}

export default ItemListContainer;
