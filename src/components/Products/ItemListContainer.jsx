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
    <div>
      <div className="d-flex bd-highlight">
        <div className="mt-5 nav-vertical">
          <ul className=" flex-column nav-vertical">
            <h2 className="text-center">Categorias</h2>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropend"
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
                  <Link className="dropdown-item" to="/categoria/monitores">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Monitores</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                to="/categoria/climatizacion"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span> Climatización &raquo;</span>
              </Link>

              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/aire">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Aire Acondicionado</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/ventilacion">
                    <i className="bi bi-caret-right-fill"></i>
                    <span> Ventiladores</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/calefaccion">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Calefactores</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
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
                  <Link className="dropdown-item" to="/categoria/heladera">
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
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Termotanques</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/calefones">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Calefones</span>
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
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Planchas</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/aspiradoras">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Aspiradoras</span>
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
                  <Link className="dropdown-item" to="/categoria/Batidora">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Batidora</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/Licuadora">
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
                  <Link className="dropdown-item" to="/categoria/horno de pan">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Horno de Pan</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/vaporera">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Vaporera</span>
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
                  <Link className="dropdown-item" to="/categoria/depiladora">
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
                  <Link className="dropdown-item" to="/categoria/tablets">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Tablets</span>
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
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Bicicletas</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/piletas">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Piletas</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/cortadoras">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Cortadoras de Pasto</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/hidrolavadoras"
                  >
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Hidrolavadoras</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/herramientas">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Herramientas</span>
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
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Muebles de Cocina</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/mueblesdeinterior"
                  >
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Muebles de Interior</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/parrillas">
                    <i className="bi bi-caret-right-fill"></i>
                    <span>Parrillas</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" d-flex justify-content-center ">
          <div>
            <ItemList data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
